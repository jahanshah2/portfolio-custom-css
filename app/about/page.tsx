import Image from "next/image";
import React from "react";
import { FaHtml5, FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";

export default function about() {
  return (
    <div className="about-main">
      <div className="heading-image">
        <h1>About</h1>
        <h3>Get to know me!</h3>
        <div className="about-image">
          <div className="about-image-1">
            <Image
              className=" rounded"
              src={"/about-pic.jpg"}
              alt=""
              height={1000}
              width={1000}
            />
          </div>
        </div>
        <div className="about-content-main">
          <div className="about-content-top">
            <p>
              I'm a passionate junior frontend web developer with a solid
              foundation in HTML, CSS, and JavaScript. Currently, I am expanding
              my skillset by mastering Next.js while pursuing a course in
              artificial intelligence. My goal is to build innovative and
              efficient solutions, combining my growing technical expertise with
              a creative approach to problem-solving.
            </p>
          </div>
          <div className="about-content-main-bottom">
            <div className="about-content">
              <p>
                I am a dedicated junior frontend web developer with a year of
                experience in an artificial intelligence course.
              </p>
            </div>
            <div className="about-content">
              <p>
                I have a strong command of HTML, CSS, and JavaScript, and I am
                currently diving deeper into advanced frameworks like Next.js.
              </p>
            </div>
          </div>

          <div className="about-content-bottom-2">
            <p>
              My journey in AI and web development reflects my passion for
              learning and my commitment to building responsive and dynamic web
              applications.
            </p>
          </div>
        </div>
        <div className="skill-section">
          <div className="skills-heading">
            <p>Skills</p>
          </div>
          <div className="skills">
            <div className="skills-names">
              <div className="skills-main-box-1">
                <div className="skill-box">
                  <p>HTML</p>
                  <div className="skill-icon">
                    <FaHtml5 />
                  </div>
                </div>
                <div className="skill-box">
                  <p>CSS</p>
                  <div className="skill-icon">
                    <FaCss3 />
                  </div>
                </div>
                <div className="skill-box">
                  <p>Javascript</p>
                  <div className="skill-icon">
                    <IoLogoJavascript />
                  </div>
                </div>
              </div>
              <div className="skills-main-box-2">
                <div className="skill-box">
                  <p>Next.js</p>
                  <div className="skill-icon">
                    <RiNextjsFill />
                  </div>
                </div>
                <div className="skill-box">
                  <p>Tailwind</p>
                  <div className="skill-icon">
                    <RiTailwindCssFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
