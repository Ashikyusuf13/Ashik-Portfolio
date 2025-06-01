import React from "react";

const Showmore = () => (
  <section className="work section">
    <h2 className="section-title">Projects</h2>
    <div className="work__container bd-grid">
      <div className="project1">
        <a
          href="https://mern-auth-sigma-ashen.vercel.app/"
          className="work__img"
        >
          <img src="../assets/MERN-Auth.png" alt="User Auth" />
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
          <img src="../assets/ecormerse_webpage.jpg" />
        </a>
        <div className="project2__text">
          <h3 className="project2__title">ShirtZone</h3>
          <p className="project2__description">
            It is a responsive and fully functional eCommerce website focused on
            shirt collections. Developed using HTML, CSS, and JavaScript, it
            features a clean UI, seamless navigation, and essential pages for a
            complete shopping experience.
          </p>
          <a href="https://shirtzone.netlify.app/" className="project_btn">
            View Web Page
          </a>
        </div>
      </div>

      <div className="project3">
        <a href="https://scanspark.netlify.app/" className="work__img">
          <img src="../assets/qrcode_webpage.jpg" alt="Work 3" />
        </a>
        <div className="project3__text">
          <h3 className="project3__title">QR Code Generator</h3>
          <p className="project3__description">
            It is a lightweight, responsive QR Code Generator web app built with
            HTML, CSS, JavaScript, and React. It lets users quickly generate QR
            codes from any input or URL in real time, featuring a clean UI
            designed for speed and simplicity.
          </p>
          <a href="https://scanspark.netlify.app/" className="project_btn">
            View Web Page
          </a>
        </div>
      </div>

      <div className="project4">
        <a href="https://globarate.netlify.app/" className="currency_webpage">
          <img src="../assets/currency_webpage.jpg" alt="currency_webpage" />
        </a>
        <div className="project5__text">
          <h3 className="project5__title">Currency Converter</h3>
          <p className="project5__description">
            It is a responsive and functional currency converter web application
            built using HTML, CSS, JavaScript and React. It allows users to
            convert between global currencies in real-time through a clean,
            user-friendly interface, ensuring quick, accurate, and hassle-free
            conversions
          </p>
          <a href="https://globarate.netlify.app/" className="project_btn">
            View Project
          </a>
        </div>
      </div>

      <div className="project5">
        <a href="https://atmosense.netlify.app/" className="work__img">
          <img src="../assets/weater_webpage.jpg" alt="weater_webpage" />
        </a>
        <div className="project6__text">
          <h3 className="project6__title">Weather Moniter</h3>
          <p className="project6__description">
            It is a responsive weather monitoring web application developed with
            HTML, CSS, JavaScript and React. It provides real-time weather
            updates with a clean, intuitive interface, delivering accurate
            temperature, humidity, and atmospheric conditions for any location
            worldwide.
          </p>
          <a href="https://atmosense.netlify.app/" className="project_btn">
            View Project
          </a>
        </div>
      </div>

      <div className="project6">
        <a href="https://fitmeter.netlify.app/" className="work__img">
          <img src="../assets/passgen_webpage.jpg" alt="Bmi_webpage" />
        </a>
        <div className="project6__text">
          <h3 className="project6__title">Password Generator</h3>
          <p className="project6__description">
            It ZeroGuess is a responsive password generator web application
            developed using HTML, CSS, JavaScript and React. It enables users to
            create strong, random passwords instantly through a clean,
            user-friendly interface, enhancing online security with ease and
            efficiency.
          </p>
          <a href="https://fitmeter.netlify.app/" className="project_btn">
            View Project
          </a>
        </div>
      </div>

      <div className="project6">
        <a href="https://fitmeter.netlify.app/" className="work__img">
          <img src="../assets/Bmi_webpage.jpg" alt="Bmi_webpage" />
        </a>
        <div className="project6__text">
          <h3 className="project6__title">BMI Moniter</h3>
          <p className="project6__description">
            It is a responsive BMI calculator web application built using HTML,
            CSS, JavaScript, and React. It offers an intuitive interface for
            users to quickly calculate their Body Mass Index with accurate,
            real-time results.
          </p>
          <a href="https://fitmeter.netlify.app/" className="project_btn">
            View Project
          </a>
        </div>
      </div>

      <div className="project6">
        <a href="https://wise-path.netlify.app/" className="work__img">
          <img src="../assets/advise_webpage.jpg" alt="advise" />
        </a>
        <div className="project4__text">
          <h3 className="project4__title">Advise API</h3>
          <p className="project4__description">
            It is a responsive advice-based web application developed using
            HTML, CSS, JavaScript and React. It provides users with random
            pieces of helpful guidance or motivation through a clean and minimal
            interface, designed for simplicity, positivity, and ease of use
          </p>
          <a href="https://wise-path.netlify.app/" className="project_btn">
            View Project
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Showmore;
