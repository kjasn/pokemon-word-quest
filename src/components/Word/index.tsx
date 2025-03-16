import styles from "./index.module.css";
import { Word } from "../../types/word";
import pronounceIcon from "../../assets/pronounce.svg";
import { useCallback, useState, useEffect } from "react";

type WordProps = {
    word: Word | null;
    showLetters: number[];
    leftAttempts: number;
};

export default function WordCard(props: WordProps) {
    const [error, setError] = useState<string | null>(null);

    const pronounce = useCallback(() => {
        if (!props.word) return;
        if (!window.speechSynthesis) {
            setError("Your browser doesn't support speech synthesis");
            return;
        }

        try {
            // 取消之前的发音
            window.speechSynthesis.cancel();

            const utterance = new SpeechSynthesisUtterance(props.word.name);
            utterance.lang = "en-US";
            utterance.rate = 0.8;
            utterance.pitch = 1;
            utterance.volume = 1;
            window.speechSynthesis.speak(utterance);
        } catch (err) {
            console.error("Speech synthesis error:", err);
            setError("Failed to pronounce the word");
        }
    }, [props.word]);

    // 自动发音
    useEffect(() => {
        if (props.word) {
            pronounce();
        } else {
            // TODO: 单词加载 和 发音顺序
            console.log("No word to pronounce");
        }
    }, [props.word, pronounce]);

    // 快捷键
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.ctrlKey && event.key.toLowerCase() === "j") {
                event.preventDefault();
                pronounce();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [pronounce]);

    if (!props.word) return null;

    return (
        <section className={styles.word}>
            <div className={styles.wordContainer}>
                <div className={styles.letters}>
                    {props.word.name.split("").map((letter, index) => (
                        <span className={styles.letter} key={index}>
                            {props.showLetters.includes(index) ? letter.toLowerCase() : ""}
                        </span>
                    ))}
                </div>
                <img
                    className={styles.pronounceIcon}
                    src={pronounceIcon}
                    alt="Pronounce"
                    title="按 Ctrl+J 发音"
                    onClick={pronounce}
                />
            </div>
            {/* 只剩 2 只宝可梦 或 才对单词 显示单词释义 */}
            {(props.leftAttempts <= 2 || props.showLetters.length === props.word.name.length) && (
                <span className={styles.translation}>{props.word.trans}</span>
            )}
            {error && <span className={styles.error}>{error}</span>}
        </section>
    );
}
