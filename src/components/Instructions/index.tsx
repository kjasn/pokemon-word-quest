import styles from "./index.module.css";

interface InstructionsProps {
    leftAttempts: number;
}
export default function Instructions(props: InstructionsProps) {
    return (
        <section className={styles.instructions}>
            {props.leftAttempts > 0 ? (
                <p>你还有 {props.leftAttempts} 只宝可梦可以挑战</p>
            ) : (
                <p>你已经没有可以挑战的宝可梦了，你的眼前一片漆黑</p>
            )}
        </section>
    );
}
