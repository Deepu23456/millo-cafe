import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Gallery.css";

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
    { img: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&auto=format&fit=crop", span: "wide", alt: "Cafe Interior" },
    { img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&auto=format&fit=crop", span: "normal", alt: "Coffee Cup" },
    { img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop", span: "normal", alt: "Cafe Ambiance" },
    { img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&auto=format&fit=crop", span: "normal", alt: "Pancakes" },
    { img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=800&auto=format&fit=crop", span: "normal", alt: "Cheesecake" },
    { img: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=800&auto=format&fit=crop", span: "wide", alt: "Cafe Table" },
];

const Gallery = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".gallery-header",
                { opacity: 0, y: 40 },
                {
                    opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
                    scrollTrigger: { trigger: ".gallery-header", start: "top 85%" }
                }
            );

            gsap.fromTo(".gallery-item",
                { opacity: 0, scale: 0.92 },
                {
                    opacity: 1, scale: 1, duration: 0.6, stagger: 0.12, ease: "power3.out",
                    scrollTrigger: { trigger: ".gallery-grid", start: "top 85%" }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="gallery" id="gallery" ref={sectionRef}>
            <div className="gallery-container">

                {/* Header */}
                <div className="gallery-header">
                    <p className="gallery-tag">Our Space & Food</p>
                    <h2 className="gallery-title">A Peek Inside <span>Millo</span></h2>
                    <p className="gallery-subtitle">
                        Every corner of Millo is crafted to make you feel warm, welcome and inspired.
                    </p>
                </div>

                {/* Grid */}
                <div className="gallery-grid">
                    {galleryImages.map((item, index) => (
                        <div
                            className={`gallery-item ${item.span === "wide" ? "wide" : ""}`}
                            key={index}
                        >
                            <img src={item.img} alt={item.alt} />
                            <div className="gallery-overlay">
                                <span>{item.alt}</span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Gallery;