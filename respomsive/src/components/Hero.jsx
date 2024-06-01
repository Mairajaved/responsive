import React from "react";
import "../styles/Hero.css";
import InputWrapper from "./InputWrapper";
import Animation from '../components/Animation'

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero">
       <div className="content">
       <h1>Software <br/> Consulting and Development</h1>
          <p>
            Since 1989. For millions of users. We transform businesses with
            powerful and adaptable digital solutions that satisfy the needs of
            today and unlock the opportunities of tomorrow.
          </p>
          <InputWrapper />
          </div>

       
        <div className="animacont">
          <Animation />
        </div>
        </div>
      </div>
  );
}

export default Hero;
