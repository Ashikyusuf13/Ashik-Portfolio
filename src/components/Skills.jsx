import React from "react";
import tailwindlogo from "../assets/tailwindlogo.png";

const skills = [
  { icon: "bx bxl-html5", name: "HTML5" },
  { icon: "bx bxl-css3", name: "CSS3" },
  { icon: "bx bxl-javascript", name: "JavaScript" },
  { icon: "bx bxl-react", name: "React" },
  { icon: "bx bxl-nodejs", name: "Node.js" },
  { svg: "express", name: "Express.js" },
  { svg: "mongodb", name: "MongoDB" },
  { img: tailwindlogo, name: "Tailwind CSS" },
  { icon: "bx bxl-git", name: "Git" },
  { icon: "bx bxl-github", name: "GitHub" },
];

const svgIcons = {
  express: (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text x="0" y="35" fontSize="32" fontFamily="monospace" fill="#38BDF8">
        Ex
      </text>
    </svg>
  ),
  mongodb: (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 6C24 6 14 18 14 28C14 36 24 42 24 42C24 42 34 36 34 28C34 18 24 6 24 6Z"
        fill="#38BDF8"
      />
      <path d="M24 42V10" stroke="#222" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  tailwind: (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 24c2-6 6-10 12-10s10 4 12 10c-2 6-6 10-12 10s-10-4-12-10z"
        fill="#38BDF8"
      />
      <path
        d="M18 28c1-3 3-5 6-5s5 2 6 5c-1 3-3 5-6 5s-5-2-6-5z"
        fill="#0EA5E9"
      />
    </svg>
  ),
};

const Skills = () => (
  <section className="skills section" id="skills">
    <h2 className="section-title">Skills</h2>
    <div className="skills__container bd-grid">
      <div>
        <h2 className="skills__subtitle">My Tech Stack</h2>
        <p className="skills__text">
          As a fresher, I am passionate about learning and building with modern
          web technologies. Here are the tools and frameworks I am most
          comfortable with:
        </p>
        <div
          className="skills__icons-row"
          style={{
            display: "flex",
            gap: "2.5rem",
            marginTop: "2rem",
            flexWrap: "wrap",
          }}
        >
          {skills.map((skill) => (
            <div
              key={skill.name}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {skill.icon ? (
                <i
                  className={`${skill.icon} skills__icon`}
                  style={{
                    fontSize: "3.5rem",
                    color: "#007bff",
                    filter: "drop-shadow(0 2px 8px #007bff33)",
                  }}
                ></i>
              ) : skill.img ? (
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 56,
                    height: 56,
                  }}
                >
                  <img
                    src={skill.img}
                    alt={skill.name}
                    style={{ width: 48, height: 48, objectFit: "contain" }}
                  />
                </span>
              ) : (
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 56,
                    height: 56,
                  }}
                >
                  {svgIcons[skill.svg]}
                </span>
              )}
              <span
                style={{
                  marginTop: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "1px",
                  color: "#222",
                  fontSize: "1.1rem",
                }}
              >
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
