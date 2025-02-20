import "../App.css";

interface KeyboardKeyProps {
    letter: string;
    onClick?: () => void;
    disabled: boolean;
}

export default function KeyboardKey(props: KeyboardKeyProps) {
    return (
        <button className="keyboard-key" onClick={props.onClick} disabled={props.disabled}>
            {props.letter}
        </button>
    );
}
