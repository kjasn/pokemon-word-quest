interface ChipProps {
    backgroundColor: string;
    color: string;
    name: string;
    url: string;
    disabled?: boolean;
}

export default function Chip(props: ChipProps) {
    const styles = {
        backgroundColor: props.disabled ? "#ccc" : props.backgroundColor,
        color: props.disabled ? "#666" : props.color,
    };
    return (
        <div className="chip-item" style={styles}>
            <img src={props.url} alt={props.name} />
            <p>{props.name}</p>
        </div>
    );
}
