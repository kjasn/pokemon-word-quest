import Header from "./components/Header";
import WordCard from "./components/Word";
import Keyboard from "./components/Keyboard";
import Chips from "./components/Chips";
import RestartBtn from "./components/RestartBtn";
import GameStatus from "./components/GameStatus";

import { useState, useEffect, useRef } from "react";
import { ThemeProvider } from "./context/ThemeContext";

import { Word } from "./types/word";

export default function App() {
    const [currentWord, setCurrentWord] = useState<Word | null>(null);
    const [wordList, setWordList] = useState<Word[]>([]);
    const [currentDict, setCurrentDict] = useState("CET4");
    const [leftAttempts, setLeftAttempts] = useState(8);
    const [showedIndexes, setShowedIndexes] = useState<number[]>([]);

    const buttonRef = useRef<HTMLButtonElement>(null);

    async function loadDictionary(dictName: string) {
        try {
            // 默认从 public 下导入
            const res = await fetch(`/dictionaries/${dictName}.json`);
            const data = await res.json();
            setWordList(data);
            setCurrentDict(dictName);
            initialWord(data);
        } catch (error) {
            console.error("Error loading dictionary:", error);
        }
    }

    function initialWord(words = wordList) {
        if (!words || words.length === 0) return;
        const randomIndex = Math.floor(Math.random() * words.length);
        const word = words[randomIndex];

        setCurrentWord(word);
        setShowedIndexes([]);
        setLeftAttempts(8);
        console.log(word);
    }

    useEffect(() => {
        loadDictionary(currentDict);
    }, []);

    // 游戏失败后自动聚焦到重新开始按钮
    useEffect(() => {
        if (leftAttempts <= 0 && buttonRef.current) {
            buttonRef.current.focus();
        }
    }, [leftAttempts]);

    function handleDictionaryChange(dictName: string) {
        loadDictionary(dictName);
    }

    function addGuessedLetters(letter: string) {
        // 只接受字母输入
        if (!currentWord || !letter.match(/[A-Za-z]/)) return;

        const lowerCaseLetter = letter.toLocaleLowerCase();
        // 猜对
        if (currentWord.name.includes(lowerCaseLetter)) {
            // 更新显示的字母
            for (let i = 0; i < currentWord?.name.length; i++) {
                if (currentWord.name[i] === lowerCaseLetter && !showedIndexes.includes(i)) {
                    setShowedIndexes((prev) => {
                        if (prev.includes(i)) return prev;
                        return [...prev, i];
                    });
                    break;
                }
            }
        } else {
            // 猜错 失去一只宝可梦
            setLeftAttempts((prev) => prev - 1);
            if (leftAttempts <= 1) {
                // TODO: 游戏结束
                console.log("Game Over");
            }
        }
    }

    return (
        <ThemeProvider>
            <main>
                <Header onDictionaryChange={handleDictionaryChange} />
                {leftAttempts <= 0 && <GameStatus />}
                {/* <GameStatus /> */}
                <WordCard
                    word={currentWord}
                    showLetters={showedIndexes}
                    leftAttempts={leftAttempts}
                />
                <Chips leftAttempts={leftAttempts} />
                <Keyboard onClick={addGuessedLetters} leftAttempts={leftAttempts} />
                {leftAttempts <= 0 && (
                    <RestartBtn initialWord={() => initialWord()} buttonRef={buttonRef} />
                )}
            </main>
        </ThemeProvider>
    );
}
