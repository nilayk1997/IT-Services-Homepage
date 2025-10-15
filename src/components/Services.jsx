import React from "react";
import "./Services.css";
import {
    FaCode,
    FaMobileAlt,
    FaCloud,
    FaPalette,
    FaShieldAlt,
    FaBrain,
    FaCube,
    FaUserTie,
} from "react-icons/fa";

export default function Services() {
    const services = [
        {
            icon: <FaCode className="service-icon" />,
            title: "Web Development",
            desc: "Modern, scalable web applications using React, Node.js, and cloud-native technologies.",
        },
        {
            icon: <FaMobileAlt className="service-icon" />,
            title: "Mobile App Development",
            desc: "Cross-platform mobile apps built with React Native and Flutter for seamless experiences.",
        },
        {
            icon: <FaCloud className="service-icon" />,
            title: "Cloud Solutions",
            desc: "Cloud migration, DevOps, and managed cloud infrastructure for AWS, Azure, and GCP.",
        },
        {
            icon: <FaPalette className="service-icon" />,
            title: "UI/UX Design",
            desc: "Intuitive, engaging, and accessible designs that enhance user experience and brand identity.",
        },
        {
            icon: <FaShieldAlt className="service-icon" />,
            title: "Cybersecurity",
            desc: "Comprehensive threat assessments, data protection, and security solutions for all systems.",
        },
        {
            icon: <FaBrain className="service-icon" />,
            title: "AI & Data Analytics",
            desc: "Leverage AI and big data insights to drive smarter business decisions and automation.",
        },
        {
            icon: <FaCube className="service-icon" />,
            title: "Blockchain Solutions",
            desc: "Secure, decentralized applications and smart contract development for businesses.",
        },
        {
            icon: <FaUserTie className="service-icon" />,
            title: "IT Consulting",
            desc: "Tailored technology strategies to modernize and optimize your IT infrastructure.",
        },
    ];

    return (
        <section id="services">
            <h2>Our Services</h2>
            <p>
                We provide end-to-end technology solutions that empower businesses to scale and innovate.
            </p>
            <div className="service-grid">
                {services.map((s, i) => (
                    <div key={i} className="service-card">
                        {s.icon}
                        <h3>{s.title}</h3>
                        <p>{s.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
