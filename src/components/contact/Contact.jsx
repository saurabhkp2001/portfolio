import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cut67zd",
        "template_3409k0o",
        form.current,
        "YguiBYsdWvQDqLQCG"
      )
        e.target.reset()
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section_title">Get in touch</h2>
      <span className="section_subtitle">Contact Me</span>

      <div className="contact_container container grid">
        <div className="contact_content">
          <h3 className="contact_title">Talk to me</h3>

          <div className="contact_info">
            <div className="contact_card">
              <i className="bx bx-mail-send contact_card-icon"></i>

              <h3 className="contact_card-title">Email</h3>
              <span className="contact_card-data">saurabhkp2001@gmail.com</span>

              <a href="https://gmail.com" className="contact_button">
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
              </a>
            </div>

            <div className="contact_card">
              <i className="bx bxl-whatsapp contact_card-icon"></i>

              <h3 className="contact_card-title">Whatsapp</h3>
              <span className="contact_card-data">951982916</span>

              <a href="https://api.whatsapp.com" className="contact_button">
                Write me
                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
              </a>
            </div>

            <div className="contact_card">
              <i className="bx bxl-messenger contact_card-icon"></i>

              <h3 className="contact_card-title">LinkedIn</h3>
              <span className="contact_card-data">Saurabh prajapati</span>

              <a href='https://www.linkedin.com/in/saurabh-kumar-prajapati-18144a221/' className="contact_button">
                Write me
                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact_content">
          <h3 className="contact_title">Give me yur suggestion</h3>

          <form ref={form} onSubmit={sendEmail}
           className="contact_form">
            <div className="contact_form-div">
              <label className="contact_form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact_form-input"
                placeholder="Insert your name"
              />
            </div>

            <div className="contact_form-div">
              <label className="contact_form-tag">Mail</label>
              <input
                type="email"
                name="email"
                className="contact_form-input"
                placeholder="Insert your mail"
              />
            </div>

            <div className="contact_form-div contact_form-area">
              <label className="contact_form-tag">Message</label>
              <textarea
                name="project"
                cols="30"
                rows="10"
                className="contact_form-input"
                placeholder="Write your message"
              ></textarea>
            </div>
            <button className="button button--flex">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
