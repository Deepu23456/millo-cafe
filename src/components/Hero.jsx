import { useEffect } from "react";
import { gsap } from "gsap";
import "./Hero.css";
import cafeVideo from "../assets/cafe-video.mp4";

const Hero = () => {
    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo(".hero-tagline", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
            .fromTo(".hero-title", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }, "-=0.4")
            .fromTo(".hero-desc", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.4")
            .fromTo(".hero-btns", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.3")
            .fromTo(".hero-badge", { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 0.7, ease: "power3.out" }, "-=0.4");
    }, []);

    return (
        <section className="hero" id="home">
            {/* Background Image */}
            <div className="hero-bg">
                <video
                    src={cafeVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="hero-video"
                >
                    Your browser does not support the video tag.
                </video>

                <div className="hero-overlay"></div>
            </div>

            {/* Content */}
            <div className="hero-content">
                <p className="hero-tagline">☕ Welcome to Millo Café</p>
                <h1 className="hero-title">
                    A Place Where <br />
                    <span>Good Food</span> Meets <br />
                    Great Vibes
                </h1>
                <p className="hero-desc">
                    Fresh ingredients, cozy ambiance, and flavors that feel like home.
                    Come sit with us — every cup tells a story.
                </p>
                <div className="hero-btns">
                    <a href="#menu" className="btn-primary">Explore Menu</a>
                    <a href="#reservation" className="btn-secondary">Reserve a Table</a>
                </div>
            </div>

            {/* Floating Badge */}
            <div className="hero-badge">
                <span className="badge-number">4.9</span>
                <span className="badge-star">★★★★★</span>
                <span className="badge-text">500+ Happy Guests</span>
            </div>

            {/* Scroll Down Indicator */}
            <div className="hero-scroll">
                <span></span>
            </div>
        </section>
    );
};

export default Hero;