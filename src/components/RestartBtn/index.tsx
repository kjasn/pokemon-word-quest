import styles from "./index.module.css";

interface RestartBtnProps {
    initialWord: () => void;
}

export default function RestartBtn(props: RestartBtnProps) {
    return (
        <button className={styles.restartBtn} onClick={props.initialWord}>
            再玩一次
        </button>
    );
}
