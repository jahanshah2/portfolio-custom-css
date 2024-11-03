import { Button } from "@/components/ui/button";
import React from "react";
import { MdPermIdentity } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";

export default function contact() {
  return (
    <>
      <div className="contact-top-text">
        <h1>Contact Us</h1>
        <p>Please fill this form in a decent manner</p>
      </div>
      <div className="flex justify-center">
        <form action="" className="form">
          <div className="name-input">
            <input
              type="text"
              placeholder="First Name"
              className="input-field"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="input-field"
            />
            <MdPermIdentity className="input-icon" />
          </div>
          <div className="email-input">
            <input
              type="email"
              placeholder="Email"
              className="input-field-email"
            />
            <MdOutlineEmail className="input-icon" />
          </div>
          <div className="phone-input ">
            <input
              type="number"
              placeholder="Phone"
              className="input-field-phone"
            />
            <MdOutlinePhone className="input-icon" />
          </div>
          <div className="submit-button">
            <Button variant={"default"}>Submit</Button>
          </div>
        </form>
      </div>
    </>
  );
}
