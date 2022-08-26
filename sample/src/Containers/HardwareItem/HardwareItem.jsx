import "./HardwareItem.scss";
import "../demo.js";
import { useState } from "react";
import Modal from "../../Components/Modal/Modal";
import HardwareDetailsModal from "../../Components/HardwareDetailsModal/HardwareDetailsModal";

const HardwareItem = ({
  product_name,
  vendor_name,
  vendor_contact,
  amount,
  invoice,
  note,
  company_name,
  serial_number,
  warranty_expiration_date,
  warranty_period,
  status,
  purchase_date,
}) => {
  // const [showHardwareDetailsModal, setShowHardwareDetailsModal] =
  //   useState(false);
  return (
    // <>
    //   <Modal
    //     showModal={showHardwareDetailsModal}
    //     setShowModal={setShowHardwareDetailsModal}
    //   >
    //     <HardwareDetailsModal
    //       setShowModal={setShowHardwareDetailsModal}
    //       product_name={product_name}
    //       company_name={company_name}
    //       vendor_name={vendor_name}
    //       serial_number={serial_number}
    //       warranty_date={warranty_expiration_date}
    //       status={status}
    //       vendor_contact={vendor_contact}
    //       amount={amount}
    //       invoice={invoice}
    //       note={note}
    //       warranty_period={warranty_period}
    //       purchase_date={purchase_date}
    //     />
    //   </Modal>

    <div className="hardItem">
      <div
        className="hardItem_box"
        // style={{ cursor: "pointer" }}
        // onClick={() => {
        //   setShowHardwareDetailsModal(true);
        // }}
      >
        <div className="hardItem_box_title">{product_name}</div>
        <div className="hardItem_box_company">{company_name}</div>
        <div className="hardItem_box_vendor">{vendor_name} </div>
        <div className="hardItem_box_serial">{serial_number}</div>
        <div
          className={`hardwareItem_box_warranty ${
            status[1] === -1 && status[0] === -1
              ? "bg_exp"
              : status[0] === 1 && status[1] === -1
              ? "bg_active"
              : "bg_days"
          }`}
        >
          {warranty_expiration_date}
        </div>
      </div>
    </div>
    //  </>
  );
};

export default HardwareItem;
