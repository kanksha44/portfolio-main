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
  SiRedux,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
import netflicproj from "../../assets/netflicproj.png";
import kanbanproj from "../../assets/kanbanproj.png";
import movieproject from "../../assets/movieproject.png";
import twitterproj from "../../assets/twitterproj.png";
import googledocproj from "../../assets/googledocproj.png";
import purrfect from "../../assets/purrfect.png";

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
                  <img src={netflicproj} alt="Netflix clone" />
                </div>
              </div>
              <div className="project_information">
                <h2>Inspired by Netflix</h2>
                <p>
                  I have made famouse OTT platform where Im fetching data from
                  api's and also provided logout and login functionality using
                  backend.
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <SiJavascript />
                  <DiCss3 />
                  <FaReact />
                </div>
                <div>
                  <a
                    href="https://netflix-web-kanksha.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/kanksha44/netflix.git"
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
                  <img src={kanbanproj} alt="Kanban board" />
                </div>
              </div>
              <div className="project_information">
                <h2>Kanban Board</h2>
                <p>
                  Kanban board is ispired by trello task manager, where you can
                  assigned and note the task with timeline, with drag and drop
                  withing list to list.
                </p>
                <div>
                  <SiJavascript />
                  <FaReact />
                  <SiHtml5 />
                  <DiCss3 />
                  <SiMaterialui />
                </div>
                <div>
                  <a
                    href="https://kanban-board-project2.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/kanksha44/kanban-board-project-2.git"
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
                  <img src={twitterproj} alt="Twitter Clone" />
                </div>
              </div>
              <div className="project_information">
                <h2>Twitter Clone</h2>
                <p>
                  Made twitter clone with searchbar functionality and fetched
                  data by database. Login and logout functionality and managing
                  state with redux.
                </p>
                <div>
                  <FaReact />
                  <SiJavascript />
                  <DiCss3 />
                  <SiMaterialui />
                  <SiRedux />
                </div>
                <div>
                  <a
                    href="https://twitter-lite-clone1.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/kanksha44/twitter-clone.git"
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
                  <img src={googledocproj} alt="Google Docs Clone" />
                </div>
              </div>
              <div className="project_information">
                <h2>Google Doc Clone</h2>
                <p>
                  Made google doc clone with editing functionality, you can
                  write on page and you can use toolbar to bold the text, etc
                </p>
                <div>
                  <FaReact />
                  <SiJavascript />

                  <DiCss3 />
                  <SiMaterialui />
                </div>
                <div>
                  <a
                    href="https://google-doc-clone-kanksha.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/kanksha44/googledocs.git"
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
                  <img src={movieproject} alt="Movie app" />
                </div>
              </div>
              <div className="project_information">
                <h2>Movie Project</h2>
                <p>
                  Movie app where you make a movie favaourite and then you can
                  see the selected movies in favaourite movie option.
                </p>
                <div>
                  <FaReact />
                  <SiRedux />
                  <DiCss3 />
                  <SiJavascript />
                  <SiMaterialui />
                </div>
                <div>
                  <a
                    href="https://movie-app-kanksha.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/kanksha44/movie-app-redux-thunk.git"
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
                  <img src={purrfect} alt="petcare" />
                </div>
              </div>
              <div className="project_information">
                <h2>Responsive Purr-fect</h2>
                <p>
                  Innovative and self-created responsive cat care website
                  featuring add-to-cart functionality, protective routing.
                </p>
                <div>
                  <SiHtml5 />
                  <DiCss3 />
                  <SiJavascript />
                  <SiMongodb />
                  <SiNodedotjs />
                  <SiExpress />
                </div>
                <div>
                  <a
                    href="https://purr-fect-catcare.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/kanksha44/Purr-fect"
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
