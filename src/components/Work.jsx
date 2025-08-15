import React from "react";
import mernAuth from "../assets/MERN-Auth.png";
import ecommerce from "../assets/ecormerse_webpage.jpg";
import ademy from "../assets/Ademy.png";

import { Link } from "react-router-dom";
import "../style/viewproj.css";

const Project = () => (
  <section className="work section" id="Project">
    <h2 className="section-title">Project</h2>
    <div className="work__container bd-grid">
      <div className="project1">
        <a
          href="https://mern-auth-sigma-ashen.vercel.app/"
          className="work__img"
        >
          <img src={mernAuth} alt="User Auth" />
        </a>
        <div className="project1__text">
          <h3 className="project1__title">COMPLETE MERN AUTH</h3>
          <p className="project1__description">
            A full-featured MERN stack authentication system with user
            registration, login, email verification, forgot/change/reset
            password via OTP, and welcome email support. Implements JWT for
            session management and bcrypt for password hashing. Built with
            MongoDB, Express.js, React, and Node.js, ensuring secure access
            control and a responsive user experience.
          </p>
          <a
            href="https://mern-auth-sigma-ashen.vercel.app/"
            className="project_btn"
          >
            View Project
          </a>
        </div>
      </div>

      <div className="project2">
        <a href="https://shirtzone.netlify.app/" className="work__img">
          <img src={ecommerce} alt="ShirtZone" />
        </a>
        <div className="project2__text">
          <h3 className="project2__title">ShirtZone</h3>
          <p className="project2__description">
            It is a responsive and fully functional eCommerce website focused on
            shirt collections. Developed using HTML, CSS, and JavaScript, it
            features a clean UI, seamless navigation, and essential pages for a
            complete shopping experience.
          </p>
          <br />
          <a href="https://shirtzone.netlify.app/" className="project_btn">
            View Project
          </a>
        </div>
      </div>

      <div className="project1">
        <a href="https://ay-ademy.vercel.app" className="work__img">
          <img src={ademy} alt="Ademy" />
        </a>
        <div className="project1__text">
          <h3 className="project1__title">Complete LMS Platform</h3>
          <p className="project1__description">
            An LLM-powered learning management platform (LMS) currently in
            development. Features real-time Stripe payment integration for
            secure course purchases and Clerk authentication for user
            management. Designed to support course creation, enrollment, and
            progress tracking with a modern MERN stack architecture. (On Going)
          </p>
          <a href="https://ay-ademy.vercel.app" className="project_btn">
            View Project
          </a>
        </div>
      </div>
      <div className="showmore_btn">
        <Link
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          to="/showmore"
          className="button"
        >
          Show More
        </Link>
      </div>
    </div>
  </section>
);

export default Project;
