import "./FormSoftware.scss";
import { useState, React } from "react";
import axios from "axios";

const FormSoftware = () => {
  const submitHandler = (event) => {
    event.preventDefault();
    let softWareData = new FormData();
    softWareData.append("product_name", title);
    softWareData.append("company_name", company);
    softWareData.append("website_username", userName);
    softWareData.append("website_password", passWord);
    softWareData.append("website_url", website);
    softWareData.append("amount", amount);
    softWareData.append("warranty_expiration_date", expiry);
    softWareData.append("license_key", license);
    softWareData.append("purchase_date", purchase);
    softWareData.append("status", status);

    axios
      .post("https://152d-49-36-224-5.ngrok.io/softwares/", softWareData)
      .then((response) => {
        console.log(response);

        alert("Added");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [title, setTitle] = useState();
  const [company, setCompany] = useState();
  const [amount, setAmount] = useState();
  const [license, setLicense] = useState();
  const [expiry, setExpiry] = useState();
  const [purchase, setPurchase] = useState();
  const [status, setStatus] = useState();
  const [userName, setUserName] = useState();
  const [passWord, setPassWord] = useState();
  const [website, setWebsite] = useState();
  const handleCompany = (e) => {
    setCompany(e.target.value);
  };
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };
  const handlePurchase = (e) => {
    setPurchase(e.target.value);
  };
  const handleLicense = (e) => {
    setLicense(e.target.value);
  };
  const handleExpiry = (e) => {
    setExpiry(e.target.value);
  };
  const handleStatus = (e) => {
    setStatus(e.target.value);
  };
  const handleUser = (e) => {
    setUserName(e.target.value);
  };
  const handlePass = (e) => {
    setPassWord(e.target.value);
  };
  const handleWebsite = (e) => {
    setWebsite(e.target.value);
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className="formSoftware">
      <div className="formSoftware_box">
        <form onSubmit={submitHandler}>
          <div className="formSoftware_box_title">
            <input type="text" id="title" onChange={handleTitle} />
          </div>
          <div className="formSoftware_box_one">
            <div className="formSoftware_box_one_company">
              <label>Company</label>
              <input type="text" id="bg_one" onChange={handleCompany} />
            </div>
            <div className="formSoftware_box_one_serial">
              <label>Website</label>
              <input type="text" id="bg_one" onChange={handleWebsite} />
            </div>
          </div>
          <div className="formSoftware_box_two">
            <div className="formSoftware_box_two_vendor">
              <label>Username</label>
              <input type="text" id="bg_one" onChange={handleUser} />
            </div>
            <div className="formSoftware_box_two_contact">
              <label>Password</label>
              <input type="text" id="bg_one" onChange={handlePass} />
            </div>
          </div>
          <div className="formSoftware_box_three">
            <div className="formSoftware_box_three_warranty">
              <label>License</label>
              <input type="text" id="bg_one" onChange={handleLicense} />
            </div>
            <div className="formSoftware_box_three_amount">
              <label>Amount(₹)</label>
              <input type="text" id="bg_one" onChange={handleAmount} />
            </div>
          </div>
          <div className="formSoftware_box_dates">
            <div className="formSoftware_box_dates_one">
              <label>Purchase Date</label>
              <input type="date" id="bg_one" onChange={handlePurchase} />
            </div>
            <div className="formSoftware_box_dates_two">
              <label>Expiration Date</label>
              <input type="date" id="bg_one" onChange={handleExpiry} />
            </div>
          </div>
          <div className="formSoftware_box_four">
            <div className="formSoftware_box_four_upload">
              <label>Upload</label>
              <div className="formSoftware_box_four_upload_option">
                <select placeholder="Choose">
                  <option>Invoice</option>
                  <option>File</option>
                </select>
              </div>
            </div>
            <div className="formSoftware_box_four_status">
              <label>Status</label>
              <input type="text" id="bg_one" onChange={handleStatus} />
            </div>
          </div>
          <div className="formSoftware_box_submits">
            <button className="button"> Reset</button>
            <button className="button button1" type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormSoftware;
