import styles from "./index.module.css";

interface KeyboardKeyProps {
    letter: string;
    onClick?: () => void;
    disabled: boolean;
}

export default function KeyboardKey(props: KeyboardKeyProps) {
    return (
        <button
            className={styles["keyboard-key"]}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.letter}
        </button>
    );
}
