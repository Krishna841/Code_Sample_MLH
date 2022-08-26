import styles from "./Message.module.scss";
import Demodata from "./Demodata";
import { ReactComponent as Search } from "../../../../assets/search.svg";
import { ReactComponent as Filter } from "../../../../assets/filter.svg";
import { ReactComponent as Personal } from "../../../../assets/common-profile-pic.svg";
import { ReactComponent as NewMsg } from "../../../../assets/newmsg.svg";
import { useState, useEffect, useContext } from "react";
import { OPTIONS } from "./constants";
import Details from "./components/details/Details";
import AuthContext from "../../../../contexts/AuthContext";
import axios from "axios";
import NewMessageModal from "../../../../Components/NewMessageModal/NewMessageModal";
import Skeleton from "../../../../Components/Skeleton/Skeleton";
const Message = () => {
  const { authState } = useContext(AuthContext);
  const [currTypeOfMessage, SetCurrTypeOfMessage] = useState("all");
  const [searchlist, SetSearchList] = useState([]);
  const [activeMessageData, SetActivemessageData] = useState(null);
  const [messagelist, SetMessageList] = useState([]);
  const [modal, setModal] = useState(false);
  const [userDetails, SetUserDetails] = useState({});
  const [loading, SetLoading] = useState(true);
  const [localloading, SetLocalLoading] = useState(true);
  const [query, setQuery] = useState("");

  const fetchMsgList = async () => {
    var config = {
      method: "get",
      url: `${process.env.REACT_APP_SERVER_URL}/user/sms`,
      headers: {
        Authorization: `Bearer ${authState.token}`,
        "Content-Type": "application/json",
      },
    };

    axios(config)
      .then(function (response) {
        if (response?.data?.sms?.length > 0) {
          SetMessageList(response?.data?.sms);
          SetSearchList(response?.data?.sms);
          SetActivemessageData(response?.data?.sms[0]);
          SetLocalLoading(false);
        } else {
          SetActivemessageData(null);
          SetLocalLoading(false);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    var config = {
      method: "get",
      url: `${process.env.REACT_APP_SERVER_URL}/user`,
      headers: {
        Authorization: `Bearer ${authState.token}`,
        "Content-Type": "application/json",
      },
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        SetUserDetails(response?.data?.user);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    modal === false && fetchMsgList();
  }, [modal]);

  function tConvert(time) {
    const date = new Date(time);
    let ftime = date.toLocaleTimeString();
    const strTime = `${
      ftime.length === 10 ? ftime.slice(0, 4) : ftime.slice(0, 5)
    } ${ftime.length === 10 ? ftime.slice(8, 10) : ftime.slice(9, 11)}   `;

    return strTime;
  }

  function dConvert(date) {
    let d = new Date();
    let e = new Date(date);
    if (d.getDate() === e.getDate()) {
      return "Today";
    } else if (d.getDate() - 1 === e.getDate()) {
      return "Yesterday";
    } else {
      return e.getDate() + "/" + e.getMonth() + "/" + e.getFullYear();
    }
    // return dateString;
  }

  return (
    <div className={styles.messages}>
      <div className={styles.messages_calldetails}>
        {loading ? (
          <Skeleton className={styles.skeleton} />
        ) : (
          <>
            <div className={styles.messages_calldetails_title}>Message</div>

            <div className={styles.messages_calldetails_search_and_filter}>
              <div className={styles.messages_calldetails_search}>
                <div className={styles.messages_calldetails_search_icon}>
                  <Search />
                </div>
                <input
                  onChange={(event) => {
                    SetMessageList(
                      searchlist.filter((message) => {
                        if (event.target.value === "") {
                          return message;
                        } else if (
                          message?.customer_number?.includes(event.target.value)
                        ) {
                          return message;
                        }
                      })
                    );
                    setQuery(event.target.value);
                  }}
                  className={styles.calldetails_search_input}
                  value={query}
                />
              </div>
              <div
                className={styles.messages_calldetails_newmsg}
                onClick={() => {
                  setModal(!modal);
                }}
              >
                <NewMsg /> Send new message{" "}
              </div>
            </div>
            <div className={styles.messages_calldetails_options}>
              {OPTIONS.map((option, index) => (
                <div
                  key={option.name}
                  className={`${styles.option} ${
                    option.value === currTypeOfMessage && styles.active
                  }`}
                  // onClick={() => {
                  //   onclickHandler(option);
                  // }}
                >
                  <div className={styles.option_name}>{option?.name}</div>
                </div>
              ))}
            </div>
            <div className={styles.messages_calldetails_list}>
              {messagelist.length > 0 ? (
                messagelist?.map((message) => (
                  <div
                    key={message?.id}
                    className={`${styles.message} ${
                      activeMessageData === message && styles.message_active
                    }`}
                    onClick={() => {
                      SetActivemessageData(message);
                    }}
                  >
                    <div className={styles.message_col1}>
                      <div className={styles.message_col1_icon}>
                        {/* {message.profilepicture} */}
                        <Personal />
                      </div>
                    </div>
                    <div className={styles.message_col2}>
                      <div className={styles.message_col2_number}>
                        {message?.first_name === null
                          ? message?.customer_number
                          : message?.first_name + " " + message?.last_name}
                      </div>
                      <span className={styles.message_col2_message}>
                        {message?.message}
                      </span>
                    </div>
                    <div className={styles.message_col3}>
                      <div className={styles.message_col3_timestamp}>
                        <span className={styles.message_col3_timestamp_time}>
                          {" "}
                          {dConvert(message?.createdAt?.slice(0, 10))},{" "}
                          {tConvert(message?.createdAt)}
                        </span>
                      </div>
                      {message?.status === "unread" && (
                        <div className={styles.message_col3_unread}>
                          {/* {message?.unreadcount} */}
                        </div>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className={styles.no_messages}>No Messages</div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
