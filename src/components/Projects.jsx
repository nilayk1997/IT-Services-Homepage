import React from "react";
import "./Projects.css";

export default function Projects() {
    const projects = [
        {
            name: "E-Commerce Hub",
            desc: "A robust online shopping platform with payment integration.",
            img: "https://picsum.photos/400",
            link: "https://example.com/ecommerce",
        },
        {
            name: "HealthSync Portal",
            desc: "Patient and doctor management system with live analytics.",
            img: "https://picsum.photos/400",
            link: "https://example.com/healthsync",
        },
        {
            name: "EduPro LMS",
            desc: "Learning management system for schools and institutions.",
            img: "https://picsum.photos/400",
            link: "https://example.com/edupro",
        },
        {
            name: "FinEdge Dashboard",
            desc: "Finance dashboard for real-time insights and reports.",
            img: "https://picsum.photos/400",
            link: "https://example.com/finedge",
        },
        {
            name: "TravelMate App",
            desc: "Smart travel planner with destination recommendations.",
            img: "https://picsum.photos/400",
            link: "https://example.com/travelmate",
        },
        {
            name: "Foodies Connect",
            desc: "Restaurant discovery and food delivery platform.",
            img: "https://picsum.photos/400",
            link: "https://example.com/foodies",
        },
        {
            name: "Real Estate",
            desc: "Restaurant discovery and food delivery platform.",
            img: "https://picsum.photos/400",
            link: "https://example.com/foodies",
        },
        {
            name: "Shipping",
            desc: "Restaurant discovery and food delivery platform.",
            img: "https://picsum.photos/400",
            link: "https://example.com/foodies",
        },
    ];

    return (
        <section id="projects">
            <h2>Recent Projects</h2>
            <p>Explore some of our latest work for global clients.</p>
            <div className="projects-grid">
                {projects.map((p, i) => (
                    <div key={i} className="project-card">
                        <img src={p.img} alt={p.name} />
                        <div className="project-overlay">
                            <h3>{p.name}</h3>
                            <p>{p.desc}</p>
                            <a href={p.link} target="_blank" rel="noreferrer" className="view-btn">
                                View Site
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
