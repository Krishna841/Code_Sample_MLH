import "./Sidebar.scss";
import { React } from "react";
import logout from "../../assets/images/logout.svg";
import software from "../../assets/images/software.svg";
import hardware from "../../assets/images/hardware.svg";
import dashboard from "../../assets/images/dashboard.svg";
import { NavLink } from "react-router-dom";
import Dashoboard from "../../Components/Dashboard/Dashboard";
import Home from "../../Components/Home/Home";
import Software from "../../Components/Software/Software";
import Hardware from "../../Components/Hardware/Hardware";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_dashboard">
        {" "}
        <NavLink to="/Dashboard" element={<Dashoboard />}>
          <img src={dashboard} alt="dashboard icon" height={30} width={30} />
        </NavLink>
      </div>
      <div className="sidebar_redirects">
        <div className="sidebar_redirects_software">
          <NavLink to="/Software" element={<Software />}>
            <img src={software} alt="software icon" height={30} width={30} />
          </NavLink>
        </div>
        <div className="sidebar_redirects_hardware">
          <NavLink to="/Hardware" element={<Hardware />}>
            <img src={hardware} alt="hardware icon" height={30} width={30} />
          </NavLink>
        </div>
      </div>
      <div className="sidebar_wrapper">
        <div className="sidebar_wrapper_logout">
          <NavLink to="/" element={<Home />}>
            {(localStorage.setItem["token"] = null)}
            <img src={logout} alt="logout icon" height={30} width={30} />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
