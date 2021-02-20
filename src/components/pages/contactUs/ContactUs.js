import React from "react";
import "./contactUs.css";

function ContactUs() {
  return (
    <div className="main">
      <div className="content">
        <div className="contactTitle">
          <h1>
            Say <span>Hello!</span>
          </h1>
          <h2>
            We re always here for <span>you!</span>
          </h2>
        </div>
        <div className="contactForm">
          <form action="#">
            <input className="formEl" type="text" placeholder="Your name" />
            <input className="formEl" type="email" placeholder="Your email" />
            <textarea
              className="formEl area"
              name="message"
              cols={30}
              rows={5}
              placeholder="Message"
              defaultValue={""}
            />
            <input
              className="formEl btn"
              type="submit"
              defaultValue="send message"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
