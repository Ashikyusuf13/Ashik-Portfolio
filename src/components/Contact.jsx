import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    // Check if the form is valid
    if (!formRef.current.checkValidity()) {
      alert("Please fill in all required fields.");
      setLoading(false);
      return;
    }
    emailjs
      .sendForm(
        "service_nhdvl4t", // Your EmailJS service ID
        "template_nbpndlu", // Your EmailJS template ID
        formRef.current,
        {
          publicKey: "hCWBQmA-3_ApSKcGn", // Your EmailJS public key
        }
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset();
          setLoading(false);
        },
        (error) => {
          alert("Failed to send message.");
          console.log("FAILED...", error.text);
          setLoading(false);
        }
      );
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Contact</h2>
      <div className="contact__container bd-grid">
        <form className="contact__form" ref={formRef} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            className="contact__input"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="User_Email"
            className="contact__input"
            required
          />

          <textarea
            name="message"
            cols="0"
            rows="10"
            className="contact__input"
            placeholder="Message"
            required
          ></textarea>

          {loading && (
            <p
              style={{
                marginTop: "1rem",
                color: "#007bff",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Please wait...
            </p>
          )}
          <button
            type="submit"
            className="contact__button button"
            disabled={loading}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
