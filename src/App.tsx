import Header from "./components/Header";
import Pikachu from "./assets/Pikachu.svg";
import Bulbasaur from "./assets/Bulbasaur.svg";
import Charizard from "./assets/Charizard.svg";
import Squirtle from "./assets/Squirtle.svg";
import Caterpie from "./assets/Caterpie.svg";
import Pidgeot from "./assets/Pidgeot.svg";
import Lapras from "./assets/Lapras.svg";
import Tauros from "./assets/Tauros.svg";

export default function App() {
    return (
        <main>
            <Header />

            <section className="game-status">
                <h2>游戏胜利</h2>
                <p>好耶🎉</p>
            </section>

            <section className="chips">
                <div className="chip-item">
                    <img src={Pikachu} alt="皮卡丘" />
                    <p>皮卡丘</p>
                </div>
                <div className="chip-item">
                    <img src={Bulbasaur} alt="妙蛙种子" />
                    <p>妙蛙种子</p>
                </div>
                <div className="chip-item">
                    <img src={Charizard} alt="喷火龙" />
                    <p>喷火龙</p>
                </div>
                <div className="chip-item">
                    <img src={Squirtle} alt="杰尼龟" />
                    <p>杰尼龟</p>
                </div>
                <div className="chip-item">
                    <img src={Caterpie} alt="绿毛虫" />
                    <p>绿毛虫</p>
                </div>
                <div className="chip-item">
                    <img src={Pidgeot} alt="大比鸟" />
                    <p>大比鸟</p>
                </div>
                <div className="chip-item">
                    <img src={Lapras} alt="拉普拉斯" />
                    <p>拉普拉斯</p>
                </div>
                <div className="chip-item">
                    <img src={Tauros} alt="肯泰罗" />
                    <p>肯泰罗</p>
                </div>
            </section>
        </main>
    );
}
