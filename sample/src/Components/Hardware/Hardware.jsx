import "./Hardware.scss";
import Sidebar from "../../Containers/Sidebar/Sidebar";
import Profile from "../../Containers/Profile/Profile";
import Header from "../../Containers/Header/Header";
import axios from "axios";
import { React, useState } from "react";
import { useEffect } from "react";
import dummy from "../../Containers/demo.js";
import HardwareItem from "../../Containers/HardwareItem/HardwareItem";

const Hardware = () => {
  const [hardware, setHardware] = useState();
  useEffect(() => {
    getHardware();
  }, []);

  const getHardware = () => {
    axios
      .get("https://ed26-104-28-222-177.eu.ngrok.io/hardwares")
      .then((response) => {
        console.log(response.data);
        setHardware(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hardware">
      <div className="hardware_side">
        <Sidebar />
      </div>
      <div className="hardware_main">
        <div className="hardware_main_title">
          <div className="hardware_main_title_text">Hardware</div>
          <div className="hardware_main_title_profile">
            <Profile />
          </div>
        </div>
        <div className="hardware_main_box">
          <div className="hardware_main_box_header">
            <Header type="a" />
          </div>
          <div className="hardware_main_box_heading">
            <div className="hardware_main_box_heading_name">NAME</div>
            <div className="hardware_main_box_heading_company">COMPANY</div>
            <div className="hardware_main_box_heading_vendor">VENDOR</div>
            <div className="hardware_main_box_heading_serial">SERIAL NO.</div>
            <div className="hardware_main_box_heading_warranty">
              WARRANTY DATE
            </div>
          </div>
          <div className="hardware_main_box_list">
            {/* {hardware?.data.map((one) => (
              <HardwareItem
                product_name={one.product_name}
                company_name={one.company_name}
                vendor_name={one.vendor_name}
                serial_no={one.serial_number}
                warranty_date={one.warranty_expiration_date}
                status={one.status}
              />
            ))} */}
            {dummy?.map((one) => (
              <HardwareItem
                product_name={one.product_name}
                company_name={one.company_name}
                vendor_name={one.vendor_name}
                // serial_number={one.serial_no}
                warranty_date={one.warranty_date}
                serial_number={one.serial_number}
                // warranty_expiration_date={one.warranty_expiration_date}
                status={one.status}
                // vendor_contact={one.vendor_contact}
                // amount={one.amount}
                // invoice={one.invoice}
                // note={one.note}
                // warranty_period={one.warranty_period}
                // purchase_date={one.purchase_date}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hardware;
