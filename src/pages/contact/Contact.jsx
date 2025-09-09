import React from "react";
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";
// import { FiSend } from "react-icons/fi";

import "./contact.css";


export default function Contact() {
  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In
        <span>Touch</span>
      </h2>

      <div className="contact__container container">
        <div className="contact__data">
          <h3 className="contact__title">Don't be Shy</h3>

          <p className="contact__description">
            Feel free to get in touch with me .I am always open to discussing
            new projects ,creactive ideas or opertunities to be part of your
            visitions .
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />

              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info_desc">Shravankumar200298@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />

              <div>
                <span className="info__title">Call me</span>
                <h4 className="info_desc">+918867343140</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a href="https://www.linkedin.com/in/shravanreddy98/" className="contact__social-link">
              <FaLinkedinIn />
            </a>

            <a href="https://twitter.com/shravanreddy98" className="contact__social-link">
              <FaTwitter />
            </a>

            <a
              href="https://www.youtube.com/channel/UCEdRZL62zce6rlcEeoMbNtg"
              className="contact__social-link"
            >
              <FaYoutube />
            </a>

            <a
              href="https://github.com/ShravanReddy98"
              className="contact__social-link"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* <form className="contact__form" 
        // onSubmit={Action}
        >
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Name"
                className="form__control"
                name="name"
              />
            </div>

            <div className="form__input-div">
              <input
                type="email"
                placeholder="Your Email"
                className="form__control"
                name="email"
              />
            </div>

            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Subject"
                className="form__control"
                name="sub"
              />
            </div>
          </div>

          <div className="form__input-div">
            <textarea
              className="textarea form__control textarea"
              placeholder="Your Message"
              name="desc"
            ></textarea>
          </div>

          <button className="button" type="submit">
            Send Message{" "}
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form> */}
      </div>
    </section>
  );
}


// const Action = ({name,email,sub}) =>{
//   this.preventDefault();
//   console.log(name);
// }