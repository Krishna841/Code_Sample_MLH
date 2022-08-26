import "./Home.scss";
//import logo from "../../assets/images/logo.svg";
//import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import { React, useState } from "react";
import axios from "axios";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faWarehouse } from "@fortawesome/free-solid-svg-icons";
import Modal from "../Modal/Modal";

axios.defaults.withCredentials = true;
axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("token");

const Home = () => {
  const navigate = useNavigate();

  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);

  const [enteredUser, setUser] = useState("");
  const handleUser = (event) => {
    setUser(event.target.value);
  };
  const [enteredPass, setPass] = useState("");
  const handlePass = (event) => {
    setPass(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log("Clicked");
    let userData = new FormData();
    userData.append("username", enteredUser);
    userData.append("password", enteredPass);
    userData.append("csrfmiddlewaretoken", "{{csrf_token}}");
    var config = {
      method: "post",
      url: `https://6a94-104-28-209-157.in.ngrok.io/login/`,
      // headers: {
      //   mode: "no-cors",
      //   //  "Access-Control-Allow-Origin": "http://localhost:3000",
      //   //"Access-Control-Allow-Credentials": "true",
      //   //Authorization: `Bearer ${authState.token}`,
      //   "Content-Type": "multipart/form-data",
      // },
      data: userData,
    };

    axios(config)
      .then(function (response) {
        // console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { duration: 2 },
    },
    exit: {
      x: "-100vw",
      transition: {
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <Modal
        showModal={showForgotPasswordModal}
        setShowModal={setShowForgotPasswordModal}
      >
        <ForgotPassword setShowModal={setShowForgotPasswordModal} />
      </Modal>
      <motion.div
        className="home"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {/* <div className="home_empty"></div> */}
        <div className="home_title">
          {/* <FontAwesomeIcon
            style={{
              fontSize: "1.5em",
              alignSelf: "center",
              marginRight: "0.3em",
              // color: '#7868e6',
            }}
            icon={faWarehouse} */}

          <div className="home_title_one">Cellar</div>
          {/* <div className="home_title_two">
          <div className="home_title_two_text">Welcome back</div>
          <div className="home_title_two_sign">!</div>
        </div> */}
        </div>

        <div className="home_login">
          <div className="home_login_text">
            <form onSubmit={submitHandler}>
              <div className="home_login_text_title">Login</div>
              <div className="home_login_text_input">
                <div className="home_login_text_input_username">
                  <input
                    type="text"
                    value={enteredUser}
                    placeholder="username"
                    onChange={handleUser}
                  />
                </div>
                <div className="home_login_text_input_password">
                  <input
                    type="password"
                    value={enteredPass}
                    placeholder="password"
                    onChange={handlePass}
                  />
                </div>
              </div>
              <div className="home_login_text_buttons">
                <div className="home_login_text_buttons_logbutton">
                  <button type="submit">Login</button>
                </div>
                <div className="home_login_text_buttons_forgotpassword">
                  <a
                    onClick={() => {
                      var bodyElement =
                        document.getElementsByTagName("BODY")[0];
                      bodyElement.style.overflow = "hidden";
                      setShowForgotPasswordModal(true);
                    }}
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      cursor: "pointer",
                    }}
                  >
                    forgot password?
                  </a>
                </div>
              </div>
            </form>
          </div>

          <div className="home_login_logo">
            <img
              src="https://i.imgur.com/jVIeGib.png)"
              alt="main logo"
              width={600}
              height={450}
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
