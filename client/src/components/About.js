import React from "react";
import WilliamImg from "../img/william.jpg";
import Footer from "./Footer";

function About({ changing }) {
  return (
    <div className={`wrapper ${changing ? "slide-out-left" : ""}`}>
      <section>
        <img src={WilliamImg} alt="William" class="profile-photo" />
        <h3>About</h3>
        <p>Nice to meet you! I'm William, and this is my web page.</p>
        <p>
          I'm a web developer, currently located near Washington, DC, but
          sometimes found in Zaragoza, Spain.
        </p>

        <p>
          These days, I'm looking for new challenges in anything related to the
          web and computers, including front-end work, back-end work, and data
          analysis (my formal training is in Economics).
        </p>

        <p>
          For a few more details, take a look at my
          <a href="https://drive.google.com/file/d/1GDWIvsDiN7IF4ar2hf1cjnKuqgl7yTrC/view?usp=sharing">
            {" "}
            résumé
          </a>{" "}
          or my <a href="https://github.com/wbruntra">GitHub</a> page.
        </p>
      </section>
      <Footer />
    </div>
  );
}

export default About;
