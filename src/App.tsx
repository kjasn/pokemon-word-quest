import Header from "./components/Header";
import WordCard from "./components/Word";
import Keyboard from "./components/Keyboard";
import Chips from "./components/Chips";
import RestartBtn from "./components/RestartBtn";
import Instructions from "./components/Instructions";

import { useState, useEffect, useRef } from "react";
import { ThemeProvider } from "./context/ThemeContext";

import { Word } from "./types/word";

export default function App() {
    const [currentWord, setCurrentWord] = useState<Word | null>(null);
    const [wordList, setWordList] = useState<Word[]>([]);
    const [currentDict, setCurrentDict] = useState("CET4");
    const [leftAttempts, setLeftAttempts] = useState(8);
    const [showedIndexes, setShowedIndexes] = useState<number[]>([]);
    const [currentWordMap, setCurrentWordMap] = useState<Map<string, number[]>>(new Map());

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
        console.log(word);

        setCurrentWord(word);
        setShowedIndexes([]);

        // 重置 map
        const newMap = new Map<string, number[]>();
        for (let i = 0; i < word.name.length; i++) {
            const letter = word.name[i].toLowerCase();
            if (!newMap.has(letter)) {
                newMap.set(letter, [i]);
            } else {
                newMap.get(letter)!.push(i);
            }
        }
        setCurrentWordMap(newMap);
    }

    function restartGame() {
        initialWord();
        setLeftAttempts(8);
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
        if (!currentWord || !letter.match(/[A-Za-z]/)) return;

        const lowerCaseLetter = letter.toLowerCase();

        if (currentWordMap.has(lowerCaseLetter)) {
            const indexes = currentWordMap.get(lowerCaseLetter);
            if (!indexes || indexes.length === 0) return;

            setShowedIndexes((prev) => [...prev, indexes[0]]);

            setCurrentWordMap((prev) => {
                const newMap = new Map(prev);
                if (indexes.length === 1) {
                    newMap.delete(lowerCaseLetter);
                } else {
                    newMap.set(lowerCaseLetter, indexes.slice(1));
                }
                return newMap;
            });
        } else {
            setLeftAttempts((prev) => prev - 1);
        }
    }

    if (showedIndexes.length === currentWord?.name.length) {
        setTimeout(() => {
            initialWord();
        }, 500);
    }

    return (
        <ThemeProvider>
            <main>
                <Header onDictionaryChange={handleDictionaryChange} />
                <Instructions leftAttempts={leftAttempts} />
                <WordCard
                    word={currentWord}
                    showLetters={showedIndexes}
                    leftAttempts={leftAttempts}
                />
                <Chips leftAttempts={leftAttempts} />
                <Keyboard onClick={addGuessedLetters} leftAttempts={leftAttempts} />
                {leftAttempts <= 0 && (
                    <RestartBtn restart={() => restartGame()} buttonRef={buttonRef} />
                )}
            </main>
        </ThemeProvider>
    );
}
