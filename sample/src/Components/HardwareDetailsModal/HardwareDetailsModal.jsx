import axios from "axios";
import { React,useState } from "react";
import "./HardwareDetailsModal.scss";

const HardwareDetailsModal = ({
  key,
  product_name,
  vendor_name,
  vendor_contact,
  amount,
  invoice,
  note,
  company_name,
  serial_number,
  warranty_date,
  warranty_period,
  status,
  purchase_date,
}) => {
  const [companyName, setCompanyName] = useState(company_name);
  const [productName, setproductName] = useState(product_name);
  const [serialNumber, setSerialNumber] = useState(serial_number);
  const [vendorName, setVendorName] = useState(vendor_name);
  const [vendorContact, setVendorContact] = useState(vendor_contact);
  const [updateAmount, setUpdateAmount] = useState(amount);
  const [updateNote, setUpdateNote] = useState(note);
  const [purchaseDate, setPurchaseDate] = useState(purchase_date);
  const [expiryDate, setExpiryDate] = useState(warranty_date);
  const [warrantyPeriod, setWarrantyPeriod] = useState(warranty_period);
  const [showInvoice, setShowInvoice] = useState(invoice);

  const [updateItem, setUpdateItem] = useState(false);
  const ConfirmDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      // console.log(id);
      axios
        .delete(`https://0bef-49-36-224-5.ngrok.io/hardwares/?id=${key}`)
        .then((response) => {
          console.log("Deleted", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const updateData = (id) => {
    let hardWareData = new FormData();
    hardWareData.append("product_name", productName);
    hardWareData.append("company_name", companyName);
    hardWareData.append("vendor_name", vendorName);
    hardWareData.append("vendor_contact", vendorContact);
    hardWareData.append("serial_number", serialNumber);
    hardWareData.append("amount", updateAmount);
    hardWareData.append("warranty_expiration_date", expiryDate);
    hardWareData.append("warranty_period", warrantyPeriod);
    hardWareData.append("purchase_date", purchaseDate);
    hardWareData.append("note", updateNote);

    axios
      .post(
        `https://0bef-49-36-224-5.ngrok.io/hardwares/?id=${id}`,
        hardWareData
      )
      .then((response) => {
        console.log(response);

        alert("Added");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hardwareModal">
      {" "}
      {updateItem ? (
        <input
          type="text"
          id="title"
          value={productName}
          onChange={(e) => {
            setproductName(e.target.value);
          }}
        />
      ) : (
        <div className="hardwareModal_title">{product_name}</div>
      )}
      <div className="hardwareModal_one">
        <div className="hardwareModal_one_company">
          <label>Company</label>

          {updateItem ? (
            <input
              type="text"
              value={companyName}
              id="bg_one"
              onChange={(e) => {
                setCompanyName(e.target.value);
              }}
            />
          ) : (
            <div className="hardwareModal_one_company_text">{company_name}</div>
          )}
        </div>
        <div className="hardwareModal_one_website">
          <label>Serial Number</label>

          {updateItem ? (
            <input
              type="text"
              value={serialNumber}
              id="bg_one"
              onChange={(e) => {
                setSerialNumber(e.target.value);
              }}
            />
          ) : (
            <div className="hardwareModal_one_website_text">
              {serial_number}
            </div>
          )}
        </div>
      </div>
      <div className="hardwareModal_two">
        <div className="hardwareModal_two_username">
          <label>Vendor</label>

          {updateItem ? (
            <input
              type="text"
              value={vendorName}
              id="bg_one"
              onChange={(e) => {
                setVendorName(e.target.value);
              }}
            />
          ) : (
            <div className="hardwareModal_two_username_text">{vendor_name}</div>
          )}
        </div>
        <div className="hardwareModal_two_password">
          <label>Contact</label>

          {updateItem ? (
            <input
              type="text"
              value={vendorContact}
              id="bg_one"
              onChange={(e) => {
                setVendorContact(e.target.value);
              }}
            />
          ) : (
            <div className="hardwareModal_two_password_text">
              {vendor_contact}
            </div>
          )}
        </div>
      </div>
      <div className="hardwareModal_three">
        <div className="hardwareModal_three_license">
          <label>Warranty Period(Months)</label>

          {updateItem ? (
            <input
              type="text"
              value={warrantyPeriod}
              id="bg_one"
              onChange={(e) => {
                setWarrantyPeriod(e.target.value);
              }}
            />
          ) : (
            <div className="hardwareModal_three_license_text">
              {" "}
              {warranty_period}
            </div>
          )}
        </div>
        <div className="hardwareModal_three_amount">
          <label>Amount(₹)</label>
          {updateItem ? (
            <input
              type="number"
              value={updateAmount}
              id="bg_one"
              onChange={(e) => {
                setUpdateAmount(e.target.value);
              }}
            />
          ) : (
            <div className="hardwareModal_three_amount_text">{amount}</div>
          )}
        </div>
      </div>
      <div className="hardwareModal_dates">
        <div className="hardwareModal_dates_one">
          <label>Purchase Date</label>
          {updateItem ? (
            <input
              type="date"
              id="bg_one"
              value={purchaseDate}
              onChange={(e) => {
                setPurchaseDate(e.target.value);
              }}
            />
          ) : (
            <div className="hardwareModal_dates_one_purchase">
              {purchase_date}
            </div>
          )}
        </div>
        <div className="hardwareModal_dates_two">
          <label>Expiration Date</label>
          {updateItem ? (
            <input
              type="date"
              id="bg_one"
              value={expiryDate}
              onChange={(e) => {
                setExpiryDate(e.target.value);
              }}
            />
          ) : (
            <div className="hardwareModal_dates_two_expiration">
              {warranty_date}
            </div>
          )}
        </div>
      </div>
      <div className="softwareModal_four">
        <div className="softwareModal_four_upload">
          <label>Upload</label>
          <div className="softwareModal_four_upload_option">
            <select placeholder="Choose">
              <option>Invoice</option>
              <option>File</option>
            </select>
          </div>
        </div>
        <div className="softwareModal_four_note">
          <label>Note</label>

          {updateItem ? (
            <textarea
              type="text"
              value={updateNote}
              id="bg_two"
              onChange={(e) => {
                setUpdateNote(e.target.value);
              }}
            />
          ) : (
            <div className="softwareModal_four_note_text">{note}</div>
          )}
        </div>
      </div>
      <div className="hardwareModal_submits">
        <button
          className="button button 2"
          onClick={() => {
            ConfirmDelete(key);
          }}
        >
          Delete
        </button>
        {updateItem ? (
          <button
            className="button button1"
            onClick={() => {
              updateData(key);
            }}
          >
            Update
          </button>
        ) : (
          <button
            className="button button1"
            onClick={() => {
              setUpdateItem(true);
            }}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default HardwareDetailsModal;
