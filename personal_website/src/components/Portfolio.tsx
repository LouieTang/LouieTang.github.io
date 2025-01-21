import { useState } from "react";
import Highlight from "./Highlight";
import portfolioData from "../context/portfolio.json";
import "../styles/portfolio.css"
import rightArrow from "../assets/arrow-right-square-fill.svg";
import leftArrow from "../assets/arrow-left-square-fill.svg";

function Portfolio(){
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? portfolioData.portfolio.length - 1 : prevIndex - 1));
    };
    
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === portfolioData.portfolio.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div id="portfolio">
            <h2>Portfolio</h2>
            <div className="portfolio-container">
                <div id="carousel">
                    <Highlight key={currentIndex} data={portfolioData.portfolio[currentIndex]} />
                </div>
                <div className="controls">
                    <button onClick={handlePrev}><img src={leftArrow} alt="Left Arrow" /></button>
                    <span>{currentIndex + 1}/{portfolioData.portfolio.length}</span>
                    <button onClick={handleNext}><img src={rightArrow} alt="Right Arrow" /></button>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;