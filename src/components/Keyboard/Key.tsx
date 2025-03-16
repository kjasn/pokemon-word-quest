import styles from "./index.module.css";

interface KeyboardKeyProps {
    letter: string;
    onClick?: () => void;
}

export default function KeyboardKey(props: KeyboardKeyProps) {
    return (
        <button className={styles["keyboard-key"]} onClick={props.onClick}>
            {props.letter}
        </button>
    );
}
