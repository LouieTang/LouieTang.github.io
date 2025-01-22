import Highlight from "./Highlight";
import careerData from "../context/career.json";
import "../styles/Career.css";

function Career() {
    return (
        <div id="career" className="fade-in">
            <h2 className="sub-header">Career Timeline</h2>
            <div className="timeline">
                {careerData.career.map((item, index) => (
                    <div key={index} className={`timeline-container ${index % 2 === 0 ? "left" : "right"}`}>
                        <Highlight data={item} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Career;