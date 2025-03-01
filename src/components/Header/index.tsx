import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import pokemonLogo from "../../assets/logo.svg";
import dictionary from "../../assets/dictionary-book-with-letters-a-to-z.svg";
import github from "../../assets/github.svg";
import moon from "../../assets/moon.svg";
import sun from "../../assets/sun.svg";
import styles from "./index.module.css";

interface HeaderProps {
    onDictionaryChange: (dictName: string) => void;
}

export default function Header({ onDictionaryChange }: HeaderProps) {
    const { theme, toggleTheme } = useTheme();
    const [showDictMenu, setShowDictMenu] = useState(false);

    const dictionaries = [
        { id: "CET4", name: "CET-4" },
        { id: "CET6", name: "CET-6" },
        // { id: "TOEFL", name: "TOEFL" },
        // { id: "IELTS", name: "IELTS" },
        // { id: "TOEIC", name: "TOEIC" },
    ];

    const handleDictSelect = (dictId: string) => {
        onDictionaryChange(dictId);
        setShowDictMenu(false);
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <img className={styles.logo} src={pokemonLogo} alt="Pokemon Logo" />
                <div className={styles.icons}>
                    <img
                        className={styles.icon}
                        src={theme === "light" ? moon : sun}
                        alt="Toggle Theme"
                        onClick={toggleTheme}
                    />
                    <div className={styles.dictSelector}>
                        <img
                            className={styles.icon}
                            src={dictionary}
                            alt="Dictionary"
                            onClick={() => setShowDictMenu((prev) => !prev)}
                        />
                        {showDictMenu && (
                            <div className={styles.dictMenu}>
                                {dictionaries.map((dict) => (
                                    <button
                                        key={dict.id}
                                        className={styles.dictItem}
                                        onClick={() => handleDictSelect(dict.id)}
                                    >
                                        {dict.name}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                    <a
                        href="https://github.com/kjasn/pokemon-word-quest"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img className={styles.icon} src={github} alt="GitHub" />
                    </a>
                </div>
            </div>
            <h1>Pokémon Word Quest</h1>
            <p>试试在 8 次机会用完之前猜出单词吧，每猜错一次就会失去一只宝可梦</p>
        </header>
    );
}
