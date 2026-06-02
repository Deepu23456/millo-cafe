import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Footer.css";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    useEffect(() => {
        gsap.fromTo(".footer-content",
            { opacity: 0, y: 40 },
            {
                opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
                scrollTrigger: { trigger: ".footer-content", start: "top 90%" }
            }
        );
    }, []);

    return (
        <footer className="footer">
            <div className="footer-content">

                {/* Top Section */}
                <div className="footer-top">

                    {/* Brand */}
                    <div className="footer-brand">
                        <h2 className="footer-logo">Millo <span>Café</span></h2>
                        <p className="footer-tagline">
                            A place where good food meets great vibes. Come visit us and feel the warmth of Millo.
                        </p>
                        <div className="footer-socials">
                            <a href="#" className="social-link">📘</a>
                            <a href="#" className="social-link">📸</a>
                            <a href="#" className="social-link">🐦</a>
                            <a href="#" className="social-link">▶️</a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-col">
                        <h4 className="footer-col-title">Quick Links</h4>
                        <ul className="footer-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#menu">Menu</a></li>
                            <li><a href="#gallery">Gallery</a></li>
                            <li><a href="#reservation">Reservation</a></li>
                        </ul>
                    </div>

                    {/* Opening Hours */}
                    <div className="footer-col">
                        <h4 className="footer-col-title">Opening Hours</h4>
                        <ul className="footer-hours">
                            <li>
                                <span>Monday - Friday</span>
                                <span>8:00am - 10:00pm</span>
                            </li>
                            <li>
                                <span>Saturday</span>
                                <span>9:00am - 11:00pm</span>
                            </li>
                            <li>
                                <span>Sunday</span>
                                <span>9:00am - 11:00pm</span>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-col">
                        <h4 className="footer-col-title">Contact Us</h4>
                        <ul className="footer-contact">
                            <li>
                                <span className="contact-icon">📍</span>
                                <span>12, Café Lane, Connaught Place, New Delhi</span>
                            </li>
                            <li>
                                <span className="contact-icon">📞</span>
                                <span>+91 98765 43210</span>
                            </li>
                            <li>
                                <span className="contact-icon">✉️</span>
                                <span>hello@millocafe.in</span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Divider */}
                <div className="footer-divider"></div>

                {/* Bottom */}
                <div className="footer-bottom">
                    <p>© 2024 Millo Café. All rights reserved.</p>
                    <p>Designed & Developed with ❤️ by <span>Deepika Singh</span></p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;