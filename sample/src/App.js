import "./App.css";
import Home from "./Components/Home/Home";
import {
  BrowserRouter,
  Route,
  Routes,
  Switch,
  useLocation,
  Navigate,
} from "react-router-dom";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import Dashboard from "./Components/Dashboard/Dashboard";
import Hardware from "./Components/Hardware/Hardware";
import Software from "./Components/Software/Software";
import FormSoftware from "./Containers/FormModal/FormSoftware";
//import { AnimatePresence } from "framer-motion";
import axios from "axios";
import { useState, React } from "react";

// axios.defaults.withCredentials = true;
// axios.defaults.headers.common["Authorization"] =
//   "Bearer " + localStorage.getItem("token");

function App() {
  // const location = useLocation();

  const [auth, setAuth] = useState(false);

  // Routes Animation Variant
  const containerVariants = {
    hidden: {
      x: "100vw",
    },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
      },
    },
    exit: {
      x: "-100vw",
      transition: {
        ease: "easeInOut",
      },
    },
  };

  // function checkUser() {
  //   if (localStorage.getItem('token')) {
  //     // return true;
  //     let userData = new FormData();
  //     axios
  //       .post('https://d3cc-49-36-224-5.ngrok.io/login', userData)
  //       .then(() => {
  //         setAuth(true);
  //       })
  //       .catch(() => {
  //         // toast.error('Session expired! Please login again.', {
  //         //   position: 'top-center',
  //         //   autoClose: '3000',
  //         //   transition: Flip,
  //         // });
  //         console.log('naughty naughty');
  //         setAuth(false);
  //       });
  //   } else {
  //     // toast.error('Session expired! Please login again.', {
  //     //   position: 'top-center',
  //     //   autoClose: '3000',
  //     //   transition: Flip,
  //     // });
  //     console.log('naughty naughty');
  //     setAuth(false);
  //   }
  // }

  return (
    <BrowserRouter>
      <Routes>
        <>
          <Route path="/" element={<Home />} />
          {/* {auth === true && ( */}
          <Route
            path={"/dashboard"}
            element={
              // checkUser() === true ? (
              <Dashboard containerVariants={containerVariants} />
              // ) : (
              // <Navigate to={{ pathname: '/' }} />
              // )
            }
          />
          <Route
            path={"/hardware"}
            element={
              // checkUser() === true ? (
              <Hardware containerVariants={containerVariants} />
              // ) : (
              // <Navigate to={{ pathname: '/' }} />
              // )
            }
          />
          <Route
            path={"/software"}
            element={
              // checkUser() === true ? (
              <Software containerVariants={containerVariants} />
              // ) : (
              // <Navigate to={{ pathname: '/' }} />
              // )
            }
          />
        </>
        {/* )} */}
        <Route
          path="/formsoftware"
          element={<FormSoftware containerVariants={containerVariants} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
