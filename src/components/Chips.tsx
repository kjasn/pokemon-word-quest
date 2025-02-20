import "../App.css";
import Chip from "./Chip";

import Pikachu from "../assets/Pikachu.svg";
import Bulbasaur from "../assets/Bulbasaur.svg";
import Charizard from "../assets/Charizard.svg";
import Squirtle from "../assets/Squirtle.svg";
import Caterpie from "../assets/Caterpie.svg";
import Pidgeot from "../assets/Pidgeot.svg";
import Lapras from "../assets/Lapras.svg";
import Tauros from "../assets/Tauros.svg";

const POKEMONS = [
    { name: "皮卡丘", url: Pikachu, backgroundColor: "#FFE135", color: "#000000" },
    { name: "妙蛙种子", url: Bulbasaur, backgroundColor: "#A7DB8D", color: "#000000" },
    { name: "喷火龙", url: Charizard, backgroundColor: "#F08030", color: "#FFFFFF" },
    { name: "杰尼龟", url: Squirtle, backgroundColor: "#6890F0", color: "#FFFFFF" },
    { name: "绿毛虫", url: Caterpie, backgroundColor: "#A8B820", color: "#FFFFFF" },
    { name: "大比鸟", url: Pidgeot, backgroundColor: "#A890F0", color: "#FFFFFF" },
    { name: "拉普拉斯", url: Lapras, backgroundColor: "#98D8D8", color: "#000000" },
    { name: "肯泰罗", url: Tauros, backgroundColor: "#A8A878", color: "#FFFFFF" },
];

interface ChipsProps {
    leftAttempts: number;
}

export default function Chips(props: ChipsProps) {
    return (
        <section className="chips">
            {POKEMONS.map((pokemon, index) => (
                <Chip key={pokemon.name} disabled={index < 8 - props.leftAttempts} {...pokemon} />
            ))}
        </section>
    );
}
