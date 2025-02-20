type WordProps = {
    word: string;
    showLetters: number[];
};
export default function Word(props: WordProps) {
    return (
        <section className="word">
            {props.word.split("").map((letter, index) => (
                <span key={index}>{props.showLetters.includes(index) ? letter : ""}</span>
            ))}
        </section>
    );
}
