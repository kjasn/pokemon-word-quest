import { RefObject } from "react";
import styles from "./index.module.css";

interface RestartBtnProps {
    restart: () => void;
    buttonRef: RefObject<HTMLButtonElement | null>;
}

export default function RestartBtn(props: RestartBtnProps) {
    const handleClick = () => {
        props.restart();
        props.buttonRef.current?.blur();
    };

    return (
        <button className={styles.restartBtn} onClick={handleClick} ref={props.buttonRef}>
            再玩一次
        </button>
    );
}
