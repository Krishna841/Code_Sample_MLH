import { React } from "react";
import Sidebar from "../../Containers/Sidebar/Sidebar";
import Header from "../../Containers/Header/Header";
import "./Software.scss";
import Item from "../../Containers/Item/Item";
//import { useState } from "react";
//import axios from "axios";
//import { useEffect } from "react";
import Profile from "../../Containers/Profile/Profile";
import data from "../../Containers/info";

const Software = () => {
  // const [software, setSoftware] = useState();

  // useEffect(() => {
  //   const getSoftware = (event) => {
  //     // event.preventDefault();
  //     axios
  //       .get("https://ed26-104-28-222-177.eu.ngrok.io/softwares")
  //       .then((response) => {
  //         console.log(response.data);
  //         setSoftware(response);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };
  //   getSoftware();
  // }, []);

  return (
    <div className="software">
      <div className="software_side">
        <Sidebar />
      </div>
      <div className="software_main">
        <div className="software_main_title">
          <div className="software_main_title_text">Software</div>
          <div className="software_main_title_profile">
            <Profile />
          </div>
        </div>
        <div className="software_main_box">
          <div className="software_main_box_header">
            <Header />
          </div>

          <div className="software_main_box_heading">
            <div className="software_main_box_heading_name">NAME</div>
            <div className="software_main_box_heading_company">COMPANY</div>
            <div className="software_main_box_heading_website">WEBSITE</div>
            <div className="software_main_box_heading_date">DATE</div>
            <div className="software_main_box_heading_status">STATUS</div>
          </div>

          <div className="software_main_box_list">
            {data?.map((item) => (
              <Item
                product_name={item.product_name}
                company_name={item.company_name}
                website_url={item.website_url}
                expiration_date={item.expiration_date}
                invoice={item.invoice}
                license_key={item.license_key}
                status={item.status}
                website_password={item.website_username}
                website_username={item.website_password}
                renew_date={item.renew_date}
                purchase_date={item.purchase_date}
                file={item.file}
                amount={item.amount}
                key={item.id}
                id={item.id}
              />
            ))}

            {/* <Item data={data[0]} />
            <Item data={data[1]} />
            <Item data={data[2]} />  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Software;
