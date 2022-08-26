import { Link } from "react-router-dom";
import Home from "../../Components/Home/Home";
import { React, useState } from "react";
import photo from "../../assets/images/profile.svg";
import styles from "./Profile.module.scss";

const Profile = () => {
  const [profile, setProfile] = useState(false);
  const Logout = () => {
    localStorage.setItem["token"] = null;
  };

  return (
    <div className={styles.profile}>
      <img
        src={photo}
        height={45}
        width={45}
        onClick={() => {
          setProfile((prevProfile) => !prevProfile);
        }}
      />
      {profile ? (
        <div className="profile_dropdown">
          <l>
            <li>Change Password</li>
            <li id="one" onClick={Logout}>
              <Link to="/" element={<Home />}>
                Log Out
              </Link>
            </li>
          </l>
        </div>
      ) : null}
    </div>
  );
};

export default Profile;
