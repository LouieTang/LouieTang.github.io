import githubIcon from '../assets/github.png';
import linkedinIcon from '../assets/linkedin.png';
import emailIcon from '../assets/email.png';
import leetcodeIcon from '../assets/leetcode.svg';
import xlogoIcon from '../assets/xlogo.png';

import '../styles/Socials.css';

function Socials() {
    return (
        <div className="socials-container">
            <a href="https://louietang.github.io" target="_blank" className="socials"><img className="icon-l" src={githubIcon} alt="GitHub" /></a>
            <a href="https://www.linkedin.com/in/louie-tang" target="_blank" className="socials"><img className="icon-l" src={linkedinIcon} alt="LinkedIn" /></a>
            <a href="mailto:404notfoundlouie@gmail.com" className="socials"><img className="icon-l email" src={emailIcon} alt="Email" /></a>
            <a href="https://leetcode.com/u/LouieTang/" target="_blank" className="socials"><img className="icon-l" src={leetcodeIcon} alt="LeetCode" /></a>
            <a href="https://x.com/louietang_" target="_blank" className="socials"><img className="icon-l" src={xlogoIcon} alt="X" /></a>
        </div>
    );
};

export default Socials;