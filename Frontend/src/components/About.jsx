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
            <p>The only thing we serious about is food </p>
          </div>
          <p className="mid">
            "At [Mehta's Restaurant], we bring you a rich culinary journey
            inspired by authentic recipes. Our chefs curate every dish with love
            and precision to offer you a dining experience like no other."
          </p>
          <Link to={"/"}>
            Explore Menu{""}
            <span>
              <HiOutlineArrowCircleRight />
            </span>
          </Link>
        </div>
        <div className="banner">
          <HiOutlineArrowCircleRight />
          <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
