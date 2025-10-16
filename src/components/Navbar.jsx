import ThemeToggle from "./ThemeToggle";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar({ toggleTheme, theme }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="logo">
                    <h2><a href="/">TechNova IT</a></h2>
                </div>

                {/* Hamburger */}
                <div className="hamburger" onClick={toggleMenu}>
                    <div className={isOpen ? "line line1 rotate1" : "line"}></div>
                    <div className={isOpen ? "line line2 fade" : "line"}></div>
                    <div className={isOpen ? "line line3 rotate2" : "line"}></div>
                </div>

                {/* Menu Links */}
                <ul className={isOpen ? "nav-links active" : "nav-links"}>
                    <li><a href="#hero" onClick={() => setIsOpen(false)}>Home</a></li>
                    <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
                    <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
                    <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
                    <li>
                        <a href="#testimonialCarousel" onClick={() => setIsOpen(false)}>Testimonials</a>
                    </li>
                    <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
                </ul>
                <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
            </div>
        </nav>
    );
}
