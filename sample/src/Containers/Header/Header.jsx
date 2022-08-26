import styles from "./Header.scss";
import sort from "../../assets/images/dropdown.svg";
import search from "../../assets/images/search.svg";
import filter from "../../assets/images/filter.svg";
import add from "../../assets/images/add.svg";
import FormHardware from "../FormHardware/FormHardware";
import FormSoftware from "../FormModal/FormSoftware";
import { useState } from "react";
import Modal from "../../Components/Modal/Modal";
import dummy from "../demo";
import data from "../info";

const Header = ({ type }) => {
  const [showForm, setShowForm] = useState(false);
  const [query, setQuery] = useState("");
  const [searchList, SetSearchList] = useState([]);

  return (
    <>
      <Modal showModal={showForm} setShowModal={setShowForm}>
        {type === "a" ? (
          <FormHardware
            showFormModal={showForm}
            setShowFormModal={setShowForm}
          />
        ) : (
          <FormSoftware />
        )}
      </Modal>
      <div className="header">
        <div className="header_add">
          <img
            src={add}
            alt="add icon"
            height={30}
            width={30}
            style={{ cursor: "pointer" }}
            onClick={() => {
              setShowForm(true);
            }}
          />
        </div>
        <div className="header_wrapper">
          <div className="header_wrapper_sorting">
            <div className="header_wrapper_sorting_filter">
              <div className="header_wrapper_sorting_filter_logo">
                <img src={filter} alt="filter" height={15} width={15} />
              </div>
              <div className="header_wrapper_sorting_filter_text">Filter</div>
            </div>
            <div className="header_wrapper_sorting_sort">
              <div className="header_wrapper_sorting_sort_text">Sort</div>
              <div className="header_wrapper_sorting_sort_logo">
                <img src={sort} alt="sort" height={10} width={10} />
              </div>
            </div>
          </div>
          <div className="header_wrapper_search">
            <input
              placeholder="Search..."
              className="header_wrapper_search_text"
              onClick={(e) => {
                SetSearchList(
                  dummy.filter((msg) => {
                    if (e.target.value === " ") return msg;
                    else if (msg?.company_name?.includes(e.target.value))
                      // msg?.product_name?.includes(e.target.value) ||
                      // msg?.serial_number(e.target.value)

                      return msg;
                  })
                );
                setQuery(e.target.value);
              }}
              value={query}
            />
            <div className="header_wrapper_search_logo">
              <img src={search} alt="search" height={42} width={42} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
