import navData from "../Navigation/NavData";
import classes from "./Categories.module.css";
import { Link } from "react-router-dom";

function Categories(props) {
  return (
    <div className={classes["container"]}>
      <p className={`${classes["header-p"]} ${props.className}`}>Categories</p>
      {navData.map((item, i) => (
        <div className={classes["item-box"]} key={i}>
          <p className={classes["title"]}>{item.title}</p>
          <div className={classes["links-box"]}>
            {item.subtitles.map((sub, i) => (
              <Link key={i} to={sub.toLowerCase()}>
                {sub}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Categories;
