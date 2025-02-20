import Socials from "./Socials";
import "../styles/About.css";

function About(){
    return (
        <div id="about" className="fade-in">
            <div className="about-container">
                <h2 className="sub-header">Get To Know Me</h2>
                <p>Hi, I'm Louie! I am a Computer Engineering Student pursuing my Bachelor's degree at the University of British Columbia. I am a researcher, problem solver, and aspiring software engineer. I look to update my website X ~ N(3,1) times every year. If you like what you see, please consider checking out my socials and getting in contact. Thank you for visiting!</p>
                <Socials />
            </div>
        </div>
    );
};

export default About;