import "../App.css";

interface KeyboardKeyProps {
    letter: string;
    onClick?: () => void;
}

export default function KeyboardKey(props: KeyboardKeyProps) {
    return (
        <button className="keyboard-key" onClick={props.onClick}>
            {props.letter}
        </button>
    );
}
