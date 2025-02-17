interface ChipProps {
    backgroundColor: string;
    color: string;
    name: string;
    url: string;
}

export default function Chip(props: ChipProps) {
    const styles = {
        backgroundColor: props.backgroundColor,
        color: props.color,
    };
    return (
        <div className="chip-item" style={styles}>
            <img src={props.url} alt={props.name} />
            <p>{props.name}</p>
        </div>
    );
}
