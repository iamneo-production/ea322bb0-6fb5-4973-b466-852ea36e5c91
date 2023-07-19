

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../Styles/Contact.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const form = useRef();
  const [message, setMessage] = useState("");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true); // State to disable the submit button initially

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kqz4i7m",
        "template_3q77lxh",
        form.current,
        "b1MK9G5ZQdkcyuVAt"
      )
       .then(
               (result) => {
                 console.log(result.text);
                 setMessage("Message send Successfully"); // Set the success message
                 form.current.reset(); // Reset the form fields
              },
              setTimeout(() => {
                   setMessage("");
                 }, 10000),
               (error) => {
                 console.log(error.text);
                 setMessage("Error sending message"); // Set the error message
               }
            );
  };

  const handleInputChange = () => {
    const isFormValid = form.current.checkValidity();
    setIsSubmitDisabled(!isFormValid);
  };

  return (
    <>
      <Navbar />
      <div className="page">
        <h1>Contact Us</h1>
        <p>Have a question, need assistance? We're just a message away!</p>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input
            type="text"
            name="user_name"
            required
            onChange={handleInputChange}
          />
          <br />
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            required
            onChange={handleInputChange}
          />
          <br />
          <label>Message</label>
          <textarea name="message" required onChange={handleInputChange} />
          <br />
          <input
            type="submit"
            value="Send"
            disabled={isSubmitDisabled} // Disable the submit button when the form is invalid
          />
        </form>
        <p>{message}</p>
      </div>
      {!isHomePage && <Footer />}
    </>
  );
};

export default Contact;

