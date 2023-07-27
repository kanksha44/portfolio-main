import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import TwitterIcon from "@material-ui/icons/Twitter";
import DescriptionIcon from "@material-ui/icons/Description";
// import PublicIcon from "@material-ui/icons/Public";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
// import Button from "@mui/material/Button";
export const About = () => {
  return (
    <>
      <div className="about center about-box">
        <h1 data-aos="fade-right" className="mobileHead">
          Hello, I am <span className="about__name">Aakanksha Gaikwad</span>
        </h1>
        <Type sx={{ colour: "#80CBC4 !important" }} />
        <p className="about__desc" data-aos="fade-right">
          {/* Passionate and creative Front-End Developer. Attired with a variety of tools & technologies and keen to
          learn new one. */}
          {/* Passionate and imaginative Front-End Developer equipped with a diverse
          range of tools and technologies, constantly seeking opportunities to
          expand knowledge and learn new ones. */}
          Passionate and adaptive Front-End Developer, constantly learning new
          tools & technologies.
        </p>
        <div className="about__contact center">
          <a
            href="https://github.com/kanksha44"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:kanksha44@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+(91)7678027610"
            target="_blank"
            rel="noreferrer"
            aria-label="phone"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/aakanksha-gaikwad/"
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
        </div>

        <button
          className="btnResume"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/14Ahvs1nRnulauBkc-XsUIeHltdUojXHZ/view?usp=drive_link"
            );
          }}
        >
          Resume
        </button>
      </div>
      <Introduction />
      <Timeline />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};
