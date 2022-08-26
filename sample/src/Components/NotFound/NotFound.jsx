import "./NotFound.scss";
import { React } from react;
import notfound from "../../assets/images/pagenotfound.svg";
import home from "../../assets/images/home.svg";
import icon from "../../assets/images/error.svg";

const NotFound = () => {
  return (
    <div className="notfound">
      <div className="notfound_title">
        <div className="notfound_title_img">
          <img src={notfound} alt="error logo" width={500} height={500} />
        </div>
        <div className="notfound_title_text">
          <div className="notfound_title_text_txt">ERROR</div>
          <div className="notfound_title_text_icon">
            <img src={icon} alt="error icon" />
          </div>
        </div>
      </div>
      <div className="notfound_text">This page does not exist</div>
      <div className="notfound_redirect">
        <div className="notfound_redirect_text">Go Home</div>
        <div className="notfound_redirect_logo">
          <img src={home} alt="go" height={40} width={40} />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
