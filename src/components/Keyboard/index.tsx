import KeyboardKey from "./Key";
import styles from "./index.module.css";
import { useEffect } from "react";

const KEYBOARD_KEYS = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
];

interface KeyboardProps {
    onClick: (letter: string) => void;
    guessedLetters?: string[];
}

export default function Keyboard(props: KeyboardProps) {
    // 监听键盘输入
    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            const key = event.key.toLowerCase();
            if (key.length === 1 && key.match(/[A-Za-z]/)) {
                props.onClick(key);
            }
        };

        window.addEventListener("keypress", handleKeyPress);
        return () => window.removeEventListener("keypress", handleKeyPress);
    }, [props]);

    return (
        <section className={styles.keyboard}>
            {KEYBOARD_KEYS.map((row, rowIndex) => (
                <div key={rowIndex} className={styles.keyboardRow}>
                    {row.map((k) => (
                        <KeyboardKey
                            key={k}
                            letter={k}
                            onClick={() => props.onClick(k)}
                            disabled={props.guessedLetters?.includes(k) ?? false}
                        />
                    ))}
                </div>
            ))}
        </section>
    );
}
