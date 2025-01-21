import { useEffect } from "react";
import Career from "./Career";
import Portfolio from "./Portfolio";
import About from "./About";
import Home from "./Home";

function Body(){
    useEffect(() => {
        const sections = document.querySelectorAll(".fade-in");

        const observer = new IntersectionObserver(
            (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
                } else {
                entry.target.classList.remove("in-view");
                }
            });
            },
            { threshold: 0.25 }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect(); // Cleanup observer
    }, []);

    
    return (
        <>
            <Home />
            <About />
            <Career />
            <Portfolio />
        </>
    );
};

export default Body;