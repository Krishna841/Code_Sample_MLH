import "./SoftwareDetailsModal.scss";
import "../../Containers/info";
import axios from "axios";
import { useState } from "react";

const SoftwareDetailsModal = ({
  product_name,
  website_url,
  company_name,
  expiration_date,
  invoice,
  license_key,
  status,
  website_password,
  website_username,
  renew_date,
  purchase_date,
  file,
  amount,
  id,
}) => {
  const [updateItem, setUpdateItem] = useState(false);
  const ConfirmDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      // console.log(key);
      axios
        .delete(`https://152d-49-36-224-5.ngrok.io/softwares/?id=${id}`)
        .then((response) => {
          console.log("Deleted", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  const [title, setTitle] = useState(product_name);
  const [companyName, setCompanyName] = useState(company_name);
  const [updateAmount, setUpdateAmount] = useState(amount);
  const [license, setLicense] = useState(license_key);
  const [expiry, setExpiry] = useState(expiration_date);
  const [purchaseDate, setPurchaseDate] = useState(purchase_date);
  const [updateFile, setUpdateFile] = useState(file);
  const [userName, setUserName] = useState(website_username);
  const [passWord, setPassWord] = useState(website_password);
  const [website, setWebsite] = useState(website_url);
  const [updateInvoice, setUpdateInvoice] = useState(invoice);

  const updateData = (key) => {
    let softWareData = new FormData();
    softWareData.append("product_name", title);
    softWareData.append("company_name", companyName);
    softWareData.append("website_username", userName);
    softWareData.append("website_password", passWord);
    softWareData.append("license_key", license);
    softWareData.append("amount", updateAmount);
    softWareData.append("warranty_expiration_date", expiry);
    softWareData.append("website_url", website);
    softWareData.append("purchase_date", purchaseDate);
    softWareData.append("file", updateFile);
    softWareData.append("invoice", updateInvoice);

    axios
      .post(
        `https://152d-49-36-224-5.ngrok.io/softwares/?id=${id}`,
        softWareData
      )
      .then((response) => {
        console.log(response);

        alert("Updated");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleFiles = (e) => {
    const fileList = e.target.files;
    //setUpdateFile(fileList);
    console.log(fileList);
  };
  return (
    <div
      className={`softwareModal ${updateItem ? "formModal" : "softwareModal"}`}
    >
      {updateItem ? (
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      ) : (
        <div className="softwareModal_title">{product_name}</div>
      )}
      <div className="softwareModal_one">
        <div className="softwareModal_one_company">
          <label>Company</label>
          {updateItem ? (
            <input
              type="text"
              id="bg_one"
              value={companyName}
              onChange={(e) => {
                setCompanyName(e.target.value);
              }}
            />
          ) : (
            <div className="softwareModal_one_company_text">{company_name}</div>
          )}
        </div>
        <div className="softwareModal_one_website">
          <label>Website</label>
          {updateItem ? (
            <input
              type="text"
              id="bg_one"
              value={website}
              onChange={(e) => {
                setWebsite(e.target.value);
              }}
            />
          ) : (
            <div className="softwareModal_one_website_text">{website_url}</div>
          )}
        </div>
      </div>
      <div className="softwareModal_two">
        <div className="softwareModal_two_username">
          <label>Username</label>
          {updateItem ? (
            <input
              type="text"
              id="bg_one"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          ) : (
            <div className="softwareModal_two_username_text">
              {website_username}
            </div>
          )}
        </div>
        <div className="softwareModal_two_password">
          <label>Password</label>
          {updateItem ? (
            <input
              id="bg_one"
              type="text"
              value={passWord}
              onChange={(e) => {
                setPassWord(e.target.value);
              }}
            />
          ) : (
            <div className="softwareModal_two_password_text">
              {website_password}
            </div>
          )}
        </div>
      </div>
      <div className="softwareModal_three">
        <div className="softwareModal_three_license">
          <label>License No</label>{" "}
          {updateItem ? (
            <input
              type="text"
              id="bg_one"
              value={license}
              onChange={(e) => {
                setLicense(e.target.value);
              }}
            />
          ) : (
            <div className="softwareModal_three_license_text">
              {license_key}
            </div>
          )}
        </div>
        <div className="softwareModal_three_amount">
          <label>Amount($)</label>
          {updateItem ? (
            <input
              type="text"
              id="bg_one"
              value={updateAmount}
              onChange={(e) => {
                setUpdateAmount(e.target.value);
              }}
            />
          ) : (
            <div className="softwareModal_three_amount_text">{amount}</div>
          )}
        </div>
      </div>
      <div className="softwareModal_dates">
        <div className="softwareModal_dates_one">
          <label>Purchase Date</label>
          {updateItem ? (
            <input
              type="date"
              id="bg_one"
              onChange={(e) => {
                setPurchaseDate(e.target.value);
              }}
            />
          ) : (
            <div className="softwareModal_dates_one_purchase">
              {purchase_date}
            </div>
          )}
        </div>
        <div className="softwareModal_dates_two">
          <label>Expiration Date</label>
          {updateItem ? (
            <input
              type="date"
              id="bg_one"
              onChange={(e) => {
                setExpiry(e.target.value);
              }}
            />
          ) : (
            <div className="softwareModal_dates_two_expiration">
              {expiration_date}
            </div>
          )}
        </div>
      </div>
      <div className="softwareModal_four">
        <div className="softwareModal_four_upload">
          <label>Upload</label>
          <div className="softwareModal_four_upload_option">
            {updateItem ? (
              <input
                type="file"
                multiple="true"
                name="files[]"
                placeholder="Invoice"
                onChange={(e) => {
                  handleFiles(e);
                }}
              />
            ) : (
              "Invoice"
            )}

            {/* <option>
                {updateItem ? (
                  <input
                    type="file"
                    multiple
                    value={""}
                    placeholder="File"
                    onChange={(e) => {
                      setUpdateFile(e.target.files);
                    }}
                  />
                ) : (
                  "File"
                )}
              </option> */}
          </div>
        </div>
        {/* <div className="softwareModal_four_status">
          <label>Status</label>
          {updateItem ? (
            <input
              type="text"
              id="bg_one"
              value={updateStatus}
              onChange={(e) => {
                setUpdateStatus(e.target.value);
              }}
            />
          ) : (
            <div className="softwareModal_four_status_text">
              {status[0] === -1 && status[1] === -1
                ? "Expired"
                : status[0] === 1 && status[1] === -1
                ? "Active"
                : status[1] + " days"}
            </div>
          )}{" "}
        </div> */}
      </div>
      <div className="softwareModal_submits">
        <button
          className="button"
          onClick={() => {
            ConfirmDelete(id);
          }}
        >
          Delete
        </button>
        {updateItem ? (
          <button
            className="button button1"
            onClick={() => {
              updateData(id);
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

export default SoftwareDetailsModal;
