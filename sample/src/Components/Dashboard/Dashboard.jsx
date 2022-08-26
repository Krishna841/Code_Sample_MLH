import Sidebar from "../../Containers/Sidebar/Sidebar";
import "./Dashboard.scss";
import React from "react";
import { motion } from "framer-motion";
import TextScroller from "../TextScroller/TextScroller";

const Dashboard = ({ containerVariants }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="dashboard">
        <div className="dashboard_side">
          <Sidebar />
        </div>
        <div className="dashboard_main">
          <div className="dashobard_main_carousel">
            <div className="dashobard_main_carousel_text">
              <TextScroller text="This is a carousel" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
