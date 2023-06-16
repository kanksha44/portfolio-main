import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiFastapi,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://github.com/Abhi-lab2/mytheresa.com/raw/ScreenShots/Homepage.png?raw=true"
                    alt="Netflix clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Inspired by Netflix</h2>
                <p>
                  Play Your Favourite Songs, Find New Music, and See What
                  Friends Are Listening to. Listen to Your Favourite Artists,
                  Songs and Albums for Free. Listen on Several Devices. Listen
                  Songs with Lyrics.
                </p>
                <div>
                  {/* <SiNodedotjs /> */}
                  {/* <SiExpress /> */}
                  {/* <SiMongodb /> */}
                  <SiHtml5 />
                  <DiCss3 />
                  <FaReact />
                  <SiFastapi />
                  <SiTailwindcss />
                </div>
                <div>
                  <a
                    href="https://netflix-clone-kanksha.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/kanksha44/netflix"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src="../" alt="NetFlix Clone" />
                </div>
              </div>
              <div className="project_information">
                <h2>Meesho Clone</h2>
                <p>
                  Meesho is a social commerce platform that undertakes retail
                  distribution, enabling small retail merchants to connect and
                  sell their products effectively via social media channels.
                </p>
                <div>
                  <SiNodedotjs />
                  {/* <SiExpress /> */}
                  <SiMongodb />
                  <FaReact />
                  <SiHtml5 />
                  <DiCss3 />
                  <SiMaterialui />
                </div>
                <div>
                  <a
                    href="https://meesho-clone-website.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Abhi-lab2/meesho-cloned"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
