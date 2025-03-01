import styles from "./index.module.css";

type WordProps = {
    word: string;
    showLetters: number[];
};

export default function Word(props: WordProps) {
    return (
        <section className={styles.word}>
            {props.word.split("").map((letter, index) => (
                <span className={styles.letter} key={index}>
                    {props.showLetters.includes(index) ? letter.toLowerCase() : ""}
                </span>
            ))}
        </section>
    );
}
