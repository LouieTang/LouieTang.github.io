import scrollDown from "../assets/chevron-down.svg";
import "../styles/Home.css";

function Home() {
    return (
        <div id="home" className="fade-in">
            <div className="home-content title">
                <h1>Louie Tang</h1>
                <h2>Turning Potential Into Progress</h2>
            </div>
            <div className="home-content scroll-down">
                <div>
                    <p>Scroll Down To Begin</p>
                    <img src={scrollDown} alt="Scroll Down" />
                </div>
            </div>
        </div>
    );
};

export default Home;