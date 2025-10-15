import React from "react";
import "./Footer.css";

export default function Footer() {
    return (
        <footer id="footer">
            <div className="footer-main">
                {/* Company Info */}
                <div className="footer-col company">
                    <h3>TechNova IT</h3>
                    <p>
                        Innovating digital solutions for businesses worldwide. Web, mobile,
                        cloud & consulting services.
                    </p>
                </div>

                {/* Services */}
                <div className="footer-col services">
                    <h4>Services</h4>
                    <ul>
                        <li>Web Development</li>
                        <li>App Development</li>
                        <li>UI/UX Design</li>
                        <li>Cloud Solutions</li>
                        <li>IT Consulting</li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div className="footer-col links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#hero">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                {/* Contact & Newsletter */}
                <div className="footer-col contact">
                    <h4>Contact</h4>
                    <p>hello@technovait.com</p>
                    <p>+91 98765 43210</p>
                    <p>123 Innovation Drive, Tech City, India</p>

                    <div className="newsletter">
                        <input type="email" placeholder="Your Email" />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2025 TechNova IT. All rights reserved.</p>
                <div className="footer-socials">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
        </footer>
    );
}
