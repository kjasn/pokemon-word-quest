interface ChipProps {
    backgroundColor: string;
    color: string;
    name: string;
    url: string;
    disabled?: boolean;
}

export default function Chip({ backgroundColor, color, name, url, disabled }: ChipProps) {
    const styles = {
        backgroundColor: disabled ? "#444" : backgroundColor,
        color: disabled ? "#999" : color,
        transform: disabled ? "scale(0.95)" : "scale(1)",
    };

    return (
        <div className={`chip-item ${disabled ? "disabled" : ""}`} style={styles}>
            <img src={url} alt={name} />
            <p>{name}</p>
        </div>
    );
}
