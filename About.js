import React from "react";
import "./About.css";
// import "./logo512.png"
import logo from './smile.png'

export default function About() {
    return (
      <div className ="row">
      <div className ="column-left">
      <div className ="about">
          <div className="about-intro">
            <h1 className="about-intro">
              Hello!
              <br className="about-intro" /> Nice to meet you.
            </h1>
            <p className="about-intro">
              I am a designer and developer with a focus on commerce platforms. I am interested in creating intuitive & accessible digital shopping experiences. 
            </p>
          </div>
          </div>
          </div>
          <div className ="column-right">
      
          <div className ="photo">
     
          <img src={logo} className="photo-img" alt="logo" />

        </div>
        </div>
        </div>
        
    );
  }