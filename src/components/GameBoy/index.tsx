import WordCard from "../Word";
import Keyboard from "../Keyboard";
import RestartBtn from "../RestartBtn";
import styles from "./styles.module.css";
import { useRef, useEffect } from "react";
import { Word } from "../../types/word";

interface GameBoyProps {
    word: Word | null;
    showLetters: number[];
    leftAttempts: number;
    onKeyClick: (letter: string) => void;
    onRestart: () => void;
}

export default function GameBoy({
    word,
    showLetters,
    leftAttempts,
    onKeyClick,
    onRestart,
}: GameBoyProps) {
    const buttonRef = useRef<HTMLButtonElement>(null);

    // 游戏失败后自动聚焦到重新开始按钮
    useEffect(() => {
        if (leftAttempts <= 0 && buttonRef.current) {
            buttonRef.current.focus();
        }
    }, [leftAttempts]);
    return (
        <div className={styles.gameBoy}>
            <div className={styles.screen}>
                <WordCard word={word} showLetters={showLetters} leftAttempts={leftAttempts} />
                <Keyboard onClick={onKeyClick} leftAttempts={leftAttempts} />
                {leftAttempts <= 0 && <RestartBtn restart={onRestart} buttonRef={buttonRef} />}
            </div>
        </div>
    );
}
