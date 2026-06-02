import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Testimonials.css";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
    {
        name: "Priya Sharma",
        role: "Food Blogger",
        review: "Millo Café is hands down the best café I've visited in the city. The ambiance is cozy, the coffee is perfect and the staff is super warm. I keep coming back every weekend!",
        rating: 5,
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop",
    },
    {
        name: "Rahul Mehta",
        role: "Software Engineer",
        review: "I work remotely and Millo is my go-to spot. Great WiFi, amazing cold brew and the pancakes are absolutely divine. The vibe here just makes you productive!",
        rating: 5,
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop",
    },
    {
        name: "Ananya Verma",
        role: "Interior Designer",
        review: "As someone who appreciates aesthetics, Millo completely won me over. The interiors are stunning, the food presentation is beautiful and everything just tastes amazing.",
        rating: 5,
        img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop",
    },
    {
        name: "Arjun Kapoor",
        role: "College Student",
        review: "Affordable, delicious and such a chill place to hang out with friends. The chocolate lava cake is an absolute must try. Millo never disappoints!",
        rating: 5,
        img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop",
    },
    {
        name: "Sneha Patel",
        role: "Yoga Instructor",
        review: "I love how Millo sources fresh local ingredients. The granola bowl and smoothies are my morning ritual now. Such a healthy and happy place to start your day!",
        rating: 5,
        img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop",
    },
    {
        name: "Vikram Singh",
        role: "Photographer",
        review: "Every corner of Millo is so photogenic! The natural light, the décor and of course the food — everything is a treat for the eyes and the taste buds.",
        rating: 5,
        img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&auto=format&fit=crop",
    },
];

const Testimonials = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".testimonials-header",
                { opacity: 0, y: 40 },
                {
                    opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
                    scrollTrigger: { trigger: ".testimonials-header", start: "top 85%" }
                }
            );

            gsap.fromTo(".testimonial-card",
                { opacity: 0, y: 40 },
                {
                    opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power3.out",
                    scrollTrigger: { trigger: ".testimonials-grid", start: "top 85%" }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="testimonials" id="testimonials" ref={sectionRef}>
            <div className="testimonials-container">

                {/* Header */}
                <div className="testimonials-header">
                    <p className="testimonials-tag">What People Say</p>
                    <h2 className="testimonials-title">Loved By Our <span>Guests</span></h2>
                    <p className="testimonials-subtitle">
                        Don't just take our word for it — here's what our happy guests have to say.
                    </p>
                </div>

                {/* Grid */}
                <div className="testimonials-grid">
                    {testimonials.map((item, index) => (
                        <div className="testimonial-card" key={index}>

                            {/* Stars */}
                            <div className="testimonial-stars">
                                {"★".repeat(item.rating)}
                            </div>

                            {/* Review */}
                            <p className="testimonial-review">"{item.review}"</p>

                            {/* Author */}
                            <div className="testimonial-author">
                                <img src={item.img} alt={item.name} className="testimonial-img" />
                                <div className="testimonial-info">
                                    <h4 className="testimonial-name">{item.name}</h4>
                                    <span className="testimonial-role">{item.role}</span>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Testimonials;