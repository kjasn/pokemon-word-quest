import KeyboardKey from "./KeyboardKey";

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
    return (
        <section className="keyboard">
            {KEYBOARD_KEYS.map((row, rowIndex) => (
                <div key={rowIndex} className="keyboard-row">
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
