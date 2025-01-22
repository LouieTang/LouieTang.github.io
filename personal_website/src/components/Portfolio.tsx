import { useState } from "react";
import Highlight from "./Highlight";
import portfolioData from "../context/portfolio.json";
import "../styles/portfolio.css"
// import rightArrow from "../assets/arrow-right-square-fill.svg";
// import leftArrow from "../assets/arrow-left-square-fill.svg";

function Portfolio(){
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? portfolioData.portfolio.length - 1 : prevIndex - 1));
    };
    
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === portfolioData.portfolio.length - 1 ? 0 : prevIndex + 1));
    };

    const handleIndex = (index: number) => {
        setCurrentIndex(index);
    }

    return (
        <div id="portfolio" className="fade-in">
            <div className="portfolio-container">
                <h2 className="sub-header">Portfolio</h2>
                <div className="portfolio-container">
                    <div id="carousel">
                        <Highlight key={currentIndex} data={portfolioData.portfolio[currentIndex]} />
                    </div>
                    <div className="controls">
                        {/* <button onClick={handlePrev}><img src={leftArrow} alt="Left Arrow" /></button> */}
                        <button className="pointer" onClick={handlePrev}>&larr;</button>
                        <div>
                        <span className="mobile">{currentIndex + 1}/{portfolioData.portfolio.length}</span>
                            {Array.from({ length: portfolioData.portfolio.length }).map((_, index) => (
                                (index === currentIndex) ? <button className="web" key={index}>&#9679;</button> : <button className="web pointer" key={index} onClick={() => handleIndex(index)}>&#9675;</button>
                            ))}
                        </div>
                        <button className="pointer" onClick={handleNext}>&rarr;</button>
                        {/* <button onClick={handleNext}><img src={rightArrow} alt="Right Arrow" /></button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;