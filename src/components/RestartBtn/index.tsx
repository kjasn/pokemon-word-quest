import { RefObject } from "react";
import styles from "./index.module.css";

interface RestartBtnProps {
    initialWord: () => void;
    buttonRef: RefObject<HTMLButtonElement | null>;
}

export default function RestartBtn(props: RestartBtnProps) {
    return (
        <button className={styles.restartBtn} onClick={props.initialWord} ref={props.buttonRef}>
            再玩一次
        </button>
    );
}
