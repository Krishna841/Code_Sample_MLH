import "./FormHardware.scss";
import React, { useState } from "react";
import axios from "axios";

const FormModal = () => {
  const submitHandler = (event) => {
    event.preventDefault();
    let hardWareData = new FormData();
    hardWareData.append("product_name", title);
    hardWareData.append("company_name", company);
    hardWareData.append("vendor_name", vendor);
    hardWareData.append("vendor_contact", contact);
    hardWareData.append("serial_number", serial);
    hardWareData.append("amount", amount);
    hardWareData.append("warranty_expiration_date", warranty);
    hardWareData.append("warranty_period", period);
    hardWareData.append("purchase_date", purchase);
    hardWareData.append("note", note);

    axios
      .post("https://152d-49-36-224-5.ngrok.io/hardwares/", hardWareData)
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
  const [purchase, setPurchase] = useState();
  const [warranty, setWarranty] = useState();
  const [period, setPeriod] = useState();
  const [note, setNote] = useState();
  const [vendor, setVendor] = useState();
  const [contact, setContact] = useState();
  const [serial, setSerial] = useState();
  const handleCompany = (e) => {
    setCompany(e.target.value);
  };
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };
  const handlePeriod = (e) => {
    setPeriod(e.target.value);
  };
  const handlePurchase = (e) => {
    setPurchase(e.target.value);
  };
  const handleWarranty = (e) => {
    setWarranty(e.target.value);
  };
  const handleNote = (e) => {
    setNote(e.target.value);
  };
  const handleVendor = (e) => {
    setVendor(e.target.value);
  };
  const handleContact = (e) => {
    setContact(e.target.value);
  };
  const handleSerial = (e) => {
    setSerial(e.target.value);
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  return (
    <div className="formModal">
      <div className="formModal_box">
        <form onSubmit={submitHandler}>
          <div className="formModal_box_title">
            <input type="text" id="title" onChange={handleTitle} />
          </div>
          <div className="formModal_box_one">
            <div className="formModal_box_one_company">
              <label>Company</label>
              <input type="text" id="bg_one" onChange={handleCompany} />
            </div>
            <div className="formModal_box_one_serial">
              <label>Serial Number</label>
              <input type="text" id="bg_one" onChange={handleSerial} />
            </div>
          </div>
          <div className="formModal_box_two">
            <div className="formModal_box_two_vendor">
              <label>Vendor</label>
              <input type="text" id="bg_one" onChange={handleVendor} />
            </div>
            <div className="formModal_box_two_contact">
              <label>Contact</label>
              <input type="text" id="bg_one" onChange={handleContact} />
            </div>
          </div>
          <div className="formModal_box_three">
            <div className="formModal_box_three_warranty">
              <label>Warranty Period(Months)</label>
              <input type="text" id="bg_one" onChange={handlePeriod} />
            </div>
            <div className="formModal_box_three_amount">
              <label>Amount(₹)</label>
              <input type="text" id="bg_one" onChange={handleAmount} />
            </div>
          </div>
          <div className="formModal_box_dates">
            <div className="formModal_box_dates_one">
              <label>Purchase Date</label>
              <input type="date" id="bg_one" onChange={handlePurchase} />
            </div>
            <div className="formModal_box_dates_two">
              <label>Expiration Date</label>
              <input type="date" id="bg_one" onChange={handleWarranty} />
            </div>
          </div>
          <div className="formModal_box_four">
            <div className="formModal_box_four_upload">
              <label>Upload</label>
              <div className="formModal_box_four_upload_option">
                <select placeholder="Choose">
                  <option>Invoice</option>
                  <option>File</option>
                </select>
              </div>
            </div>
            <div className="formModal_box_four_status">
              <label>Note</label>
              <textarea
                type="text"
                id="bg_two"
                width="200"
                onChange={handleNote}
              />
            </div>
          </div>
          <div className="formModal_box_submits">
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

export default FormModal;
