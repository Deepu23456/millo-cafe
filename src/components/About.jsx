import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".about-img-wrapper",
                { opacity: 0, x: -60 },
                {
                    opacity: 1, x: 0, duration: 1, ease: "power3.out",
                    scrollTrigger: { trigger: ".about-img-wrapper", start: "top 80%" }
                }
            );

            gsap.fromTo(".about-tag",
                { opacity: 0, y: 20 },
                {
                    opacity: 1, y: 0, duration: 0.6, ease: "power3.out",
                    scrollTrigger: { trigger: ".about-tag", start: "top 85%" }
                }
            );

            gsap.fromTo(".about-title",
                { opacity: 0, y: 30 },
                {
                    opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
                    scrollTrigger: { trigger: ".about-title", start: "top 85%" }
                }
            );

            gsap.fromTo(".about-desc",
                { opacity: 0, y: 30 },
                {
                    opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
                    scrollTrigger: { trigger: ".about-desc", start: "top 85%" }
                }
            );

            gsap.fromTo(".about-stat",
                { opacity: 0, y: 20 },
                {
                    opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: "power3.out",
                    scrollTrigger: { trigger: ".about-stats", start: "top 85%" }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="about" id="about" ref={sectionRef}>
            <div className="about-container">

                {/* Left - Image */}
                <div className="about-img-wrapper">
                    <img
                        src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=800&auto=format&fit=crop"
                        alt="Millo Cafe Interior"
                        className="about-img"
                    />
                    <div className="about-img-badge">
                        <span className="about-badge-year">10+</span>
                        <span className="about-badge-text">Years of Serving Love</span>
                    </div>
                </div>

                {/* Right - Content */}
                <div className="about-content">
                    <p className="about-tag">Our Story</p>
                    <h2 className="about-title">
                        More Than Just a <span>Café</span>
                    </h2>
                    <p className="about-desc">
                        Millo Café was born out of a simple idea — that great food and a warm
                        space can bring people together. Since 2014, we've been crafting
                        handpicked recipes using the freshest local ingredients, served with
                        a smile in a space that feels like home.
                    </p>
                    <p className="about-desc">
                        Whether you're catching up with an old friend, working on your next
                        big idea, or simply enjoying a quiet morning — Millo is your place.
                    </p>

                    {/* Stats */}
                    <div className="about-stats">
                        <div className="about-stat">
                            <span className="stat-number">500+</span>
                            <span className="stat-label">Happy Guests</span>
                        </div>
                        <div className="about-stat">
                            <span className="stat-number">40+</span>
                            <span className="stat-label">Menu Items</span>
                        </div>
                        <div className="about-stat">
                            <span className="stat-number">10+</span>
                            <span className="stat-label">Years Experience</span>
                        </div>
                    </div>

                    <a href="#menu" className="about-btn">Explore Our Menu</a>
                </div>

            </div>
        </section>
    );
};

export default About;