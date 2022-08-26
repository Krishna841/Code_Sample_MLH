import "./Item.scss";
import "../info.js";

const Item = ({
  product_name,
  company_name,
  website_url,
  expiration_date,
  status,
}) => {
  return (
    <div className="item">
      <div className="item_box">
        <div className="item_box_title">{product_name}</div>
        <div className="item_box_company">{company_name}</div>
        <div className="item_box_website">
          <a target="_blank" href={website_url}>
            {website_url}
          </a>
        </div>
        <div className="item_box_date">
          {" "}
          {expiration_date === null ? "No data" : expiration_date}
        </div>
        <div
          className={`item_box_status ${
            status < 0 ? "bg_exp" : status === 0 ? "bg_active" : "bg_days"
          }`}
        >
          {status < 0 ? "Expired" : status === 0 ? "Active" : status + " days"}
        </div>
      </div>
    </div>
  );
};

export default Item;
