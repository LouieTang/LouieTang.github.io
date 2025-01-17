import Highlight from "./Highlight";
import portfolioData from "../context/portfolio.json";

function Portfolio(){
    return (
        <>
            <h2 id="portfolio">Portfolio</h2>
            {portfolioData.portfolio.map((item, index) => (
                <Highlight key={index} data={item} />
            ))}
        </>
    );
};

export default Portfolio;