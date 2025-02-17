import Header from "./components/Header";
import Word from "./components/Word";
import Keyboard from "./components/Keyboard";
import Chips from "./components/Chips";

import { useState } from "react";

export default function App() {
    const [currentWord, setCurrentWord] = useState("react");

    return (
        <main>
            <Header />
            <Word word={currentWord} />
            <Chips />
            <Keyboard />
            <button className="restart-btn">再玩一次</button>
        </main>
    );
}
