import pokemonLogo from "../assets/logo.svg";
import "../App.css";

export default function Header() {
    return (
        <header>
            <img src={pokemonLogo} />
            <h1>Pokemon Word Quest</h1>
            <p>试试在8次机会用完之前猜出单词吧，每猜错一次就会失去一直宝可梦</p>
        </header>
    );
}
