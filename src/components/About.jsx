import React from "react";
import { FaLightbulb, FaShieldAlt, FaUsers } from "react-icons/fa";
import "./About.css";

export default function About() {
    return (
        <section id="about" className="about-alt-section">
            <div className="about-alt-container">
                {/* Left: Text Content */}
                <div className="about-alt-text">
                    <h2>Who We Are</h2>
                    <p>
                        TechNova IT is a full-stack technology company focused on delivering
                        cutting-edge IT solutions. From web and mobile apps to cloud and
                        digital transformation, we help businesses innovate and grow.
                    </p>
                    <p>
                        Our team combines creativity, technical expertise, and strategic
                        thinking to build scalable and reliable solutions that empower
                        clients worldwide.
                    </p>
                </div>

                {/* Right: Icon Feature Cards */}
                <div className="about-alt-cards">
                    <div className="icon-card">
                        <FaLightbulb size={32} color="#0077ff" className="feature-icons" />
                        <h4>Innovation</h4>
                        <p>We bring creative and tech-driven solutions to solve complex business challenges.</p>
                    </div>
                    <div className="icon-card">
                        <FaShieldAlt size={32} color="#0077ff" className="feature-icons" />
                        <h4>Reliability</h4>
                        <p>Our solutions are secure, robust, and scalable for long-term success.</p>
                    </div>
                    <div className="icon-card">
                        <FaUsers size={32} color="#0077ff" className="feature-icons" />
                        <h4>Customer Success</h4>
                        <p>We focus on client satisfaction and measurable results with every project.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
