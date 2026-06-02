import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Reservation.css";

gsap.registerPlugin(ScrollTrigger);

const Reservation = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".reservation-left",
                { opacity: 0, x: -60 },
                {
                    opacity: 1, x: 0, duration: 1, ease: "power3.out",
                    scrollTrigger: { trigger: ".reservation-left", start: "top 85%" }
                }
            );
            gsap.fromTo(".reservation-right",
                { opacity: 0, x: 60 },
                {
                    opacity: 1, x: 0, duration: 1, ease: "power3.out",
                    scrollTrigger: { trigger: ".reservation-right", start: "top 85%" }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Table Reserved! We'll confirm your booking shortly. 🎉");
        e.target.reset();
    };

    return (
        <section className="reservation" id="reservation" ref={sectionRef}>
            <div className="reservation-container">

                {/* Left */}
                <div className="reservation-left">
                    <p className="reservation-tag">Book A Seat</p>
                    <h2 className="reservation-title">Reserve Your <span>Table</span></h2>
                    <p className="reservation-desc">
                        Whether it's a special occasion or just a cozy evening out — we'd love to have you.
                        Book your table in advance and we'll make sure everything is just right.
                    </p>

                    {/* Info Cards */}
                    <div className="reservation-info">
                        <div className="info-card">
                            <span className="info-icon">🕐</span>
                            <div className="info-text">
                                <h4>Opening Hours</h4>
                                <p>Mon - Fri: 8am - 10pm</p>
                                <p>Sat - Sun: 9am - 11pm</p>
                            </div>
                        </div>
                        <div className="info-card">
                            <span className="info-icon">📍</span>
                            <div className="info-text">
                                <h4>Location</h4>
                                <p>12, Café Lane, Connaught Place</p>
                                <p>New Delhi, India</p>
                            </div>
                        </div>
                        <div className="info-card">
                            <span className="info-icon">📞</span>
                            <div className="info-text">
                                <h4>Call Us</h4>
                                <p>+91 98765 43210</p>
                                <p>Available 9am - 9pm</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right - Form */}
                <div className="reservation-right">
                    <div className="reservation-form-wrapper">
                        <h3 className="form-title">Make a Reservation</h3>
                        <form className="reservation-form" onSubmit={handleSubmit}>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input type="text" placeholder="Your name" required />
                                </div>
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input type="tel" placeholder="+91 00000 00000" required />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Date</label>
                                    <input type="date" required />
                                </div>
                                <div className="form-group">
                                    <label>Time</label>
                                    <input type="time" required />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Number of Guests</label>
                                    <select required>
                                        <option value="">Select guests</option>
                                        <option value="1">1 Person</option>
                                        <option value="2">2 People</option>
                                        <option value="3">3 People</option>
                                        <option value="4">4 People</option>
                                        <option value="5+">5+ People</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Occasion</label>
                                    <select>
                                        <option value="">Select occasion</option>
                                        <option value="birthday">Birthday</option>
                                        <option value="anniversary">Anniversary</option>
                                        <option value="business">Business Meeting</option>
                                        <option value="casual">Casual Dining</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Special Requests</label>
                                <textarea placeholder="Any dietary requirements or special requests..." rows="3"></textarea>
                            </div>

                            <button type="submit" className="form-btn">Reserve My Table</button>

                        </form>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Reservation;