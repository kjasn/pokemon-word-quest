import Header from "./components/Header";
import Word from "./components/Word";
import Keyboard from "./components/Keyboard";
import Chips from "./components/Chips";
import RestartBtn from "./components/RestartBtn";

import { useState, useEffect } from "react";
// import "./styles/main.css";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
    const [currentWord, setCurrentWord] = useState("");
    const [wordList, setWordList] = useState<Array<{ name: string }>>([]);
    const [currentDict, setCurrentDict] = useState("CET4");
    const [leftAttempts, setLeftAttempts] = useState(8);
    const [showedIndexes, setShowedIndexes] = useState<number[]>([]);

    async function loadDictionary(dictName: string) {
        try {
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
        setCurrentWord(words[randomIndex].name.toLowerCase());
        setShowedIndexes([]);
        setLeftAttempts(8);
        console.log(words[randomIndex].name);
    }

    useEffect(() => {
        loadDictionary(currentDict);
    }, []);

    function handleDictionaryChange(dictName: string) {
        loadDictionary(dictName);
    }

    function addGuessedLetters(letter: string) {
        // 只接受字母输入
        if (!letter.match(/[A-Za-z]/)) return;

        // 猜对
        if (currentWord.includes(letter.toLowerCase())) {
            // 更新显示的字母
            for (let i = 0; i < currentWord.length; i++) {
                if (currentWord[i] === letter.toLowerCase() && !showedIndexes.includes(i)) {
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
                <Word word={currentWord} showLetters={showedIndexes} />
                <Chips leftAttempts={leftAttempts} />
                <Keyboard onClick={addGuessedLetters} />
                <RestartBtn initialWord={() => initialWord()} />
            </main>
        </ThemeProvider>
    );
}
