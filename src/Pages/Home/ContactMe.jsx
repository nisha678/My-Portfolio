import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

export default function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nemlith",
        "template_uk5cqyd",
        form.current,
        "MPgTE1HcufcEgzEAt "
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          Please fill out the form to know more about us!
        </p>
      </div>
      <form
        className="contact--form--container"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="container">
          <label htmlFor="your-name" className="contact--label">
            <span className="text-md">Your Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="your-name"
              id="your-name"
              required
            />
          </label>

          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="your_email"
              id="email"
              required
            />
          </label>
        </div>

        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            placeholder="Type your message..."
          />
        </label>

        <div>
          <button
            type="submit"
            value="send"
            className="btn btn-primary contact--form--btn"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
