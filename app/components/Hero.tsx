import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="hero-main">
        <div className="image-frame">
          <div className="image">
            <Image src={"/my-pic.png"} alt="" height={0} width={200}></Image>
          </div>
        </div>
        <p className="intro">Hello, I'm</p>
        <h1 className="name">Jahan Shah</h1>
        <h1 className="work">Web Developer</h1>
        <div className="button space-x-2">
          <Link href={"about"}>
            <Button className="button-1 buttons" variant="outline">
              About Me
              <IoMdArrowDropright />
            </Button>
          </Link>
          <Button className="button-2 buttons" variant="outline">
            Projects
          </Button>
        </div>
        <div className="social-links space-x-2">
          <div className="social">
            <Link
              href={"https://www.facebook.com/jani.shah.794"}
              target="_blank"
            >
              <FaFacebook />
            </Link>
          </div>
          <div className="social">
            <Link
              href={"https://www.linkedin.com/in/shah-jahan-51b5ba2b5/"}
              target="_blank"
            >
              <FaLinkedin />
            </Link>
          </div>
          <div className="social">
            <Link
              href={"https://www.instagram.com/jahanshah831/?hl=en"}
              target="_blank"
            >
              <FaSquareInstagram />
            </Link>
          </div>
          <div className="social">
            <Link href={"https://github.com/jahanshah2 "} target="_blank">
              <FaGithubSquare />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
