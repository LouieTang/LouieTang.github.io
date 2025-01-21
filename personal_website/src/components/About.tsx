import Socials from "./Socials";
import "../styles/About.css";

function About(){
    return (
        <div id="about">
            <div>
                <h2>Get To Know Me</h2>
                <p>Hi, I'm Louie! I am a Computer Engineering Student pursuing my Bachelor's degree at the University of British Columbia. I am a researcher, problem solver, and aspiring software engineer. I look to update my website X ~ N(3,1) times every year. If you like what you see, please consider checking out my socials and getting in contact. Thank you for visiting!</p>
            </div>
            <Socials />
        </div>
    );
};

export default About;