import React from "react";
import profile from "../../assets/shravan4.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./home.css";

export default function Home() {
  return (
    <section className="home section">
      {/* <img src={profile} alt="" className="home__img" /> */}
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Shravan </span> A Full Stack Web Developer.
          </h1>
          <p className="home__description">
            I'm an Enthusiast for learning new Web Technologies and also a
            passionate about learning AI tools and Technologies .I'm proficient in certain Web Frameworks
            like React.js ,Express.js and languages like JavaScript ,JSE and TypeScript .
          </p>

          <Link to="/about" className="button">
            More about Me{" "}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
      <div className="color__block"></div>
    </section>
  );
}
