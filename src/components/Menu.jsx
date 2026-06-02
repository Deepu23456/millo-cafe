import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Menu.css";

gsap.registerPlugin(ScrollTrigger);

const menuData = {
    "Hot Drinks": [
        { name: "Espresso", desc: "Strong & bold single shot", price: "₹120", img: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&auto=format&fit=crop" },
        { name: "Cappuccino", desc: "Espresso with steamed milk foam", price: "₹180", img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&auto=format&fit=crop" },
        { name: "Masala Chai", desc: "Spiced Indian tea with ginger", price: "₹100", img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&auto=format&fit=crop" },
        { name: "Flat White", desc: "Smooth espresso with velvety milk", price: "₹200", img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&auto=format&fit=crop" },
    ],
    "Cold Drinks": [
        { name: "Iced Latte", desc: "Chilled espresso with cold milk", price: "₹220", img: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=400&auto=format&fit=crop" },
        { name: "Cold Brew", desc: "Slow steeped for 12 hours", price: "₹240", img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&auto=format&fit=crop" },
        { name: "Mango Smoothie", desc: "Fresh mango blended with yogurt", price: "₹180", img: "https://images.unsplash.com/photo-1546173159-315724a31696?w=400&auto=format&fit=crop" },
        { name: "Lemonade", desc: "Fresh squeezed with mint", price: "₹140", img: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&auto=format&fit=crop" },
    ],
    "Breakfast": [
        { name: "Avocado Toast", desc: "Sourdough with smashed avocado & eggs", price: "₹280", img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&auto=format&fit=crop"},
        { name: "Pancake Stack", desc: "Fluffy pancakes with maple syrup", price: "₹260", img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&auto=format&fit=crop" },
        { name: "Egg Benedict", desc: "Poached eggs on English muffin", price: "₹320", img: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=400&auto=format&fit=crop" },
        { name: "Granola Bowl", desc: "Oats, berries, honey & yogurt", price: "₹220", img: "https://images.unsplash.com/photo-1495214783159-3503fd1b572d?w=400&auto=format&fit=crop" },
    ],
    "Mains": [
        { name: "Grilled Sandwich", desc: "Cheese, veggies & herb butter", price: "₹240", img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&auto=format&fit=crop" },
        { name: "Pasta Alfredo", desc: "Creamy white sauce pasta", price: "₹320", img: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=400&auto=format&fit=crop" },
        { name: "Veggie Burger", desc: "Crispy patty with fresh toppings", price: "₹280", img: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400&auto=format&fit=crop" },
        { name: "Caesar Salad", desc: "Romaine, croutons & Caesar dressing", price: "₹260", img: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&auto=format&fit=crop" },
    ],
    "Desserts": [
        { name: "Chocolate Lava Cake", desc: "Warm cake with molten center", price: "₹280", img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop" },
        { name: "Cheesecake", desc: "Classic NY style with berry compote", price: "₹260", img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&auto=format&fit=crop" },
        { name: "Tiramisu", desc: "Italian coffee flavored dessert", price: "₹300", img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&auto=format&fit=crop" },
        { name: "Brownie", desc: "Fudgy chocolate brownie with ice cream", price: "₹220", img: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=400&auto=format&fit=crop" },
    ],
};

const categories = Object.keys(menuData);
const icons = {
    "Hot Drinks": "☕",
    "Cold Drinks": "🧋",
    "Breakfast": "🍳",
    "Mains": "🥗",
    "Desserts": "🍰",
};

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState("Hot Drinks");
    const sectionRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(".menu-header",
            { opacity: 0, y: 40 },
            {
                opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
                scrollTrigger: { trigger: ".menu-header", start: "top 85%" }
            }
        );
    }, []);

    useEffect(() => {
        gsap.fromTo(".menu-card",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power3.out" }
        );
    }, [activeCategory]);

    return (
        <section className="menu" id="menu" ref={sectionRef}>
            <div className="menu-container">

                {/* Header */}
                <div className="menu-header">
                    <p className="menu-tag">What We Serve</p>
                    <h2 className="menu-title">Our <span>Menu</span></h2>
                    <p className="menu-subtitle">
                        Made fresh daily with locally sourced ingredients and a whole lot of love.
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="menu-tabs">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`menu-tab ${activeCategory === cat ? "active" : ""}`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {icons[cat]} {cat}
                        </button>
                    ))}
                </div>

                {/* Menu Cards */}
                <div className="menu-grid">
                    {menuData[activeCategory].map((item, index) => (
                        <div className="menu-card" key={index}>
                            <div className="menu-card-img">
                                <img src={item.img} alt={item.name} />
                            </div>
                            <div className="menu-card-body">
                                <div className="menu-card-top">
                                    <h3 className="menu-card-name">{item.name}</h3>
                                    <span className="menu-card-price">{item.price}</span>
                                </div>
                                <p className="menu-card-desc">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Menu;