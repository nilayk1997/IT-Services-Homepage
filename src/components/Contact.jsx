import React, { useState } from "react";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";
import ReCAPTCHA from "react-google-recaptcha";
import "./Contact.css";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [captchaVerified, setCaptchaVerified] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCaptchaChange = (value) => {
        if (value) setCaptchaVerified(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            toast.error("Please fill in all fields.");
            return;
        }

        if (!captchaVerified) {
            toast.error("Please verify you are not a robot.");
            return;
        }

        emailjs
            .send(
                "service_h2eenoq",    // Replace with your EmailJS service ID
                "template_k3z6tjc",   // Replace with your EmailJS template ID
                formData,
                "JYz32lzrmDGdU3fsB"     // Replace with your EmailJS public key
            )
            .then(
                () => {
                    toast.success("Message sent successfully!");
                    setFormData({ name: "", email: "", message: "" });
                    setCaptchaVerified(false);
                },
                (error) => {
                    console.error(error);
                    toast.error("Something went wrong. Please try again later.");
                }
            );
    };

    return (
        <section id="contact">
            <Toaster position="top-center" />
            <h2>Contact Us</h2>
            <p>We’d love to hear about your project or answer any questions you may have.</p>

            <div className="contact-container">
                <div className="contact-form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Enter your full name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder="Write your message..."
                            ></textarea>
                        </div>

                        <ReCAPTCHA
                            sitekey="6LfXrOsrAAAAAG83Zfbt88qc5jcoFen_KxLAd6RU" // Replace with your actual reCAPTCHA site key
                            onChange={handleCaptchaChange}
                            theme={
                                document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light"
                            }
                        />

                        <button type="submit" className="submit-btn">
                            Send Message
                        </button>
                    </form>
                </div>

                <div className="contact-info">
                    <h3>Get in Touch</h3>
                    <p>
                        📍 123 Innovation Drive, Tech City, India
                        <br />
                        📞 +91 98765 43210
                        <br />
                        ✉️ hello@technovait.com
                    </p>

                    <div className="map-container">
                        <iframe
                            title="TechNova IT Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086847779353!2d-122.4194156846817!3d37.77492977975968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808d1f4a19e1%3A0x8e74d0dddcf3e45!2sTech+Company!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
                            width="100%"
                            height="250"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
