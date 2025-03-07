import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowCircleRight } from "react-icons/hi";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p className="tagline">"Serving Happiness, One Plate at a Time!" 🍽️😊</p>
          </div>
          <p className="mid">
            <strong>Welcome to Mehta's Restaurant! 🍕✨</strong>  
            Where <strong>every bite tells a story</strong>, and every meal is made with ❤️.  
            From <strong>sizzling spices 🌶️</strong> to <strong>heartwarming flavors 🍲</strong>,  
            we bring you dishes crafted with <strong>passion and tradition</strong>.  
            Join us for an <strong>unforgettable culinary experience! 🍷🔥</strong>
          </p>
          <Link to={"/"} className="menu-link">
            Explore Menu <span><HiOutlineArrowCircleRight /></span>
          </Link>
        </div>
        <div className="banner">
          <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
