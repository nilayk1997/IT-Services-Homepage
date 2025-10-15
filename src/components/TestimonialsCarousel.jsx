import React, { useState, useEffect, useRef } from "react";
import "./TestimonialsCarousel.css";

const testimonials = [
    {
        name: "Aarav Mehta",
        role: "Founder, FinTech Labs",
        photo: "https://randomuser.me/api/portraits/men/1.jpg",
        feedback:
            "TechNova IT helped us scale our app infrastructure seamlessly. Their attention to performance optimization is world-class!",
    },
    {
        name: "Sara Kapoor",
        role: "CTO, EduPro Systems",
        photo: "https://randomuser.me/api/portraits/women/2.jpg",
        feedback:
            "Working with TechNova was a pleasure. Their developers are proactive, skilled, and deliver results faster than expected.",
    },
    {
        name: "Vikram Rao",
        role: "CEO, HealthSync",
        photo: "https://randomuser.me/api/portraits/men/3.jpg",
        feedback:
            "Our cloud migration was smooth and secure thanks to TechNova’s expertise. The team goes above and beyond to support us.",
    },
    {
        name: "Priya Nair",
        role: "Product Manager, NeoTech",
        photo: "https://randomuser.me/api/portraits/women/4.jpg",
        feedback:
            "The UI/UX revamp they did transformed our website. User engagement increased by 40% within the first month!",
    },
    {
        name: "Rahul Sharma",
        role: "Operations Head, MarketGenius",
        photo: "https://randomuser.me/api/portraits/men/5.jpg",
        feedback:
            "Reliable, responsive, and highly skilled — TechNova is our go-to IT partner for all critical projects.",
    },
    {
        name: "Ananya Gupta",
        role: "Director, SmartEdu",
        photo: "https://randomuser.me/api/portraits/women/6.jpg",
        feedback:
            "They combine creativity with technical expertise. Our LMS platform runs flawlessly thanks to their custom solutions.",
    },
];

export default function TestimonialsCarousel() {
    const [current, setCurrent] = useState(0);
    const length = testimonials.length;
    const touchStartX = useRef(null);
    const touchEndX = useRef(null);

    // Auto-slide every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, [length]);

    const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);
    const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);
    const goToSlide = (index) => setCurrent(index);

    // Touch handlers
    const handleTouchStart = (e) => {
        touchStartX.current = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e) => {
        touchEndX.current = e.changedTouches[0].screenX;
        handleSwipe();
    };

    const handleSwipe = () => {
        const deltaX = touchStartX.current - touchEndX.current;
        if (deltaX > 50) {
            // Swiped left
            nextSlide();
        } else if (deltaX < -50) {
            // Swiped right
            prevSlide();
        }
    };

    return (
        <section id="testimonialCarousel">
            <h2>What Our Clients Say</h2>
            <p className="subtitle">
                Hear from the innovators and leaders who trust us to power their digital
                success.
            </p>

            <div
                className="carousel-container"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <button className="arrow left" onClick={prevSlide}>
                    &#10094;
                </button>

                {testimonials.map((t, index) => (
                    <div
                        className={`carousel-slide ${index === current ? "active" : ""}`}
                        key={index}
                    >
                        {index === current && (
                            <div className="testimonial-card">
                                <div className="testimonial-header">
                                    <img src={t.photo} alt={t.name} />
                                    <div>
                                        <h4>{t.name}</h4>
                                        <span>{t.role}</span>
                                    </div>
                                </div>
                                <p className="testimonial-text">“{t.feedback}”</p>
                            </div>
                        )}
                    </div>
                ))}

                <button className="arrow right" onClick={nextSlide}>
                    &#10095;
                </button>
            </div>

            {/* Dot navigation */}
            <div className="carousel-dots">
                {testimonials.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === current ? "active" : ""}`}
                        onClick={() => goToSlide(index)}
                    ></span>
                ))}
            </div>
        </section>
    );
}
