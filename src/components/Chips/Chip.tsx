import styles from "./index.module.css";

interface ChipProps {
    backgroundColor: string;
    color: string;
    name: string;
    url: string;
    disabled?: boolean;
}

export default function Chip({ backgroundColor, color, name, url, disabled }: ChipProps) {
    const customStyles = {
        backgroundColor: disabled ? "#444" : backgroundColor,
        color: disabled ? "#999" : color,
    };

    return (
        <div
            className={`${styles.chip} ${disabled ? styles.chipDisabled : ""}`}
            style={customStyles}
        >
            <img src={url} alt={name} className={styles.chipImage} />
            <p className={styles.chipName}>{name}</p>
        </div>
    );
}
