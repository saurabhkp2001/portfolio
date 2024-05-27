import React from 'react';
import "./about.css";
import AboutImg from "../../assets/image2.jpg";
import CV from "../../assets/SaurabhResume1.pdf";
import Info from "./Info";

const About = () => {
  return (
    <section  className='about section' id="about">
    <h2 className='section_title'>About Me</h2>
    <span className='section_subtitle'>My introduction</span>

    <div className='about_container container grid'>
        <img src={AboutImg} alt="" className='about_img' />
        
        <div className='about_data'>
            <Info />

            <p className='about_description'>Frontend developer, Competetive programmer, I have a year of experience in React js development.</p>

            <a download="" href={CV} className='button button--flex'>Download CV</a>
        </div>
    </div>
    </section>
  )
}

export default About