import Image from "next/image";
import React from "react";
import { LuMenu } from "react-icons/lu";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="nav-main">
      <div className="nav">
        <div className="nav-logo">
          <Image
            className="nav-logo"
            src={"/nav-logo.png"}
            alt=""
            height={0}
            width={1000}
          />
          <span>CODER</span>
        </div>
        <div className="nav-links">
          <Link className="hover:text-gray-500 " href={"/"}>
            Home
          </Link>
          <Link
            className="hover:text-gray-500 "
            href={"about"}
          >
            About
          </Link>
          <Link
            className="hover:text-gray-500 "
            href={"contact"}
          >
            Contact
          </Link>
          <Link className="hover:text-gray-500" href={"/"}>
            Projects
          </Link>
        </div>
        <Sheet>
          <SheetTrigger className="hamburger">
            <LuMenu />
          </SheetTrigger>
          <SheetContent className="flex flex-col bg-customColor bg-gray-200">
            <Link className="hover:text-gray-500 hover:text-[17px]" href={"/"}>
              Home
            </Link>
            <Link
              className="hover:text-gray-500 hover:text-[17px]"
              href={"about"}
            >
              About
            </Link>
            <Link
              className="hover:text-gray-500 hover:text-[17px]"
              href={"contact"}
            >
              Contact
            </Link>
            <Link className="hover:text-gray-500 hover:text-[17px]" href={"/"}>
              Projects
            </Link>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
