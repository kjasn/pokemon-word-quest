import { useState } from "react";
import pokemonLogo from "../assets/logo.svg";
import dictionary from "../assets/dictionary-book-with-letters-a-to-z.svg";
import github from "../assets/github.svg";

interface HeaderProps {
    onDictionaryChange: (dictName: string) => void;
}

export default function Header({ onDictionaryChange }: HeaderProps) {
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
        <header>
            <div className="header-container">
                <img className="game-logo" src={pokemonLogo} alt="Pokemon Logo" />
                <div className="icons-container">
                    <div className="dict-selector">
                        <img
                            className="icon"
                            src={dictionary}
                            alt="Dictionary"
                            onClick={() => setShowDictMenu((prev) => !prev)}
                        />
                        {showDictMenu && (
                            <div className="dict-menu">
                                {dictionaries.map((dict) => (
                                    <button
                                        key={dict.id}
                                        className="dict-item"
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
                        <img className="icon" src={github} alt="GitHub" />
                    </a>
                </div>
            </div>
            <h1>Pokémon Word Quest</h1>
            <p>试试在 8 次机会用完之前猜出单词吧，每猜错一次就会失去一只宝可梦</p>
        </header>
    );
}
