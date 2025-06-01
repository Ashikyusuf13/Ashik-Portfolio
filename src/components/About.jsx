import React from "react";

const About = () => (
  <section className="about section" id="about">
    <h2 className="section-title">About</h2>
    <div className="about__container bd-grid">
      <div className="about__img">
        <img src="../assets/photo2.jpg" alt="Ashik" />
      </div>
      <div>
        {/* <h2 className="about__subtitle">I'am Ashik</h2> */}
        <p className="about__text">
          Hi,<span className="about__highlight">I'm Ashik</span> , a final year
          Computer Science student with an interest in full stack web
          development, mainly using the MERN stack (MongoDB, Express.js,
          React.js, Node.js). I am learning these technologies from online
          platforms like YouTube and improving my knowledge step by step. I know
          the basic concepts clearly and consider myself at an intermediate
          level in this field. I am a self-learner, hardworking, and always
          ready to learn new things. I like working on simple ideas to improve
          my skills and become better every day. I can speak Tamil and English.
          My English is at a medium level, but I am trying to improve it by
          practicing regularly
        </p>
      </div>
    </div>
  </section>
);

export default About;
