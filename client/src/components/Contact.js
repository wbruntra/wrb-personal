import React from "react";
import Footer from "./Footer";

function Contact({ changing }) {
  return (
    <div className={`wrapper ${changing ? "slide-out-left" : ""}`}>
      <section>
        <h3>Contact Me</h3>
        <p>
          Use this form to send me a message, or just go ahead and email me at{" "}
          <a class="email" href="mailto:w.bruntrager@gmail.com">
            w.bruntrager@gmail.com
          </a>
        </p>

        <div id="contact-area">
          <form method="post" action="/form">
            <label for="Name">Name</label>
            <input type="text" name="name" id="Name" />

            <label for="Email">Email</label>
            <input type="text" name="email" id="Email" />

            <label for="Telephone">Phone</label>
            <input type="text" name="phone" id="Telephone" />

            <label for="Message">Message</label>
            <br />
            <textarea name="content" rows="20" cols="20" id="Message" />

            <input
              type="submit"
              name="submit"
              value="Send"
              class="submit-button"
            />
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Contact;
