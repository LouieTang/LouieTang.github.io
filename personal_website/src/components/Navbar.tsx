import "../styles/Navbar.css";

function Navbar(){
    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };


    return (
        <ul className="navbar">
            <li><a className="navbar-link pointer" onClick={() => scrollToSection("home")}>Home</a></li>
            <li><a className="navbar-link pointer" onClick={() => scrollToSection("about")}>About Me</a></li>
            <li><a className="navbar-link pointer" onClick={() => scrollToSection("career")}>Career</a></li>
            <li><a className="navbar-link pointer" onClick={() => scrollToSection("portfolio")}>Portfolio</a></li>
        </ul>
    );
};

export default Navbar;