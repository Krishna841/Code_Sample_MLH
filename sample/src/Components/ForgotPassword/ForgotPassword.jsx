import React, { useState } from "react";
import "./ForgotPassword.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Home from "../Home/Home";

const ForgotPassword = ({ setShowModal }) => {
  const [email, setEmail] = useState("");
  const handleMail = (event) => {
    setEmail(event.target.value);
  };

  const backdropBlur = {
    visible: {
      backdropFilter: "blur(5px)",
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
    },
    hidden: { backdropFilter: "blur(0px)" },
  };

  return (
    <motion.div variants={backdropBlur} className="forgotpassword">
      <div className="forgotpassword_wrapper">
        <div className="forgotpassword_wrapper_box">
          <div className="forgotpassword_wrapper_box_text">
            Please enter your email below
          </div>
          <div className="forgotpassword_wrapper_box_email">
            <input placeholder="email" type="email" onChange={handleMail} />
          </div>
          <div className="forgotpassword_wrapper_box_buttons">
            <div className="forgotpassword_wrapper_box_buttons_cancel">
              <button
                className="button"
                onClick={() => {
                  setShowModal(false);
                  var bodyElement = document.getElementsByTagName("BODY")[0];
                  bodyElement.style.overflow = "unset";
                }}
              >
                Cancel
              </button>
            </div>
            <div className="forgotpassword_wrapper_box_buttons_code">
              <button
                onClick={() => {
                  console.log(email);

                  // <-------SHOW TOAST ------> //

                  setShowModal(false);
                  var bodyElement = document.getElementsByTagName("BODY")[0];
                  bodyElement.style.overflow = "unset";
                }}
                className="button button2"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ForgotPassword;
