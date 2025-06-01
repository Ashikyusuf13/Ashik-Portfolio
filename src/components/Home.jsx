import React from "react";

const Home = () => (
  <>
    <section className="home bd-grid" id="home">
      <div className="home__data">
        <h1 className="home__title">
          Hi,
          <br />
          I'am <span className="home__title-color">ASHIK YUSUF</span>
          <br /> Web Developer
        </h1>
        <a href="#contact" className="button">
          Contact
        </a>
      </div>
      <div className="home__img-bg">
        <div className="home__img">
          <img
            src="../assets/ashik_photo.png"
            alt="Ashik"
            className="home__blob-img"
          />
        </div>
      </div>
    </section>
    <div className="home__social-row">
      <a
        href="https://www.linkedin.com/in/ashikyusuf13/"
        className="home__social-icon"
      >
        <i className="bx bxl-linkedin"></i>
      </a>

      <a href="https://github.com/Ashikyusuf13" className="home__social-icon">
        <i className="bx bxl-github"></i>
      </a>
    </div>
  </>
);

export default Home;
