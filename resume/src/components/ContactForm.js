import React from "react";

const ContactForm = () => {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Message:
          <textarea name="message"></textarea>
        </label>
        <button type="submit" className="btn">Send</button>
      </form>
    </section>
  );
};

export default ContactForm;
