export default function Word(props: { word: string }) {
    return (
        <section className="word">
            {props.word.split("").map((letter, index) => (
                <span key={index}>{letter}</span>
            ))}
        </section>
    );
}
