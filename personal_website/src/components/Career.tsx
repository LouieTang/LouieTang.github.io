import Highlight from "./Highlight";
import careerData from "../context/career.json";

function Career(){
    return (
        <>
            <h2 id="career">Career</h2>
            {careerData.career.map((item, index) => (
                <Highlight key={index} data={item} />
            ))}
        </>
    );
};

export default Career;