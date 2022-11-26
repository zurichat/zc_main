import { useState } from "react";
import classes from "./CategoryList.module.css";
import rightLogo from "../assets/right.svg";
import downLogo from "../assets/down.svg";

const CategoryList = ({ item }) => {
  const [displaySubCategory, setDisplaySubCategory] = useState("");

  const toggleSubCategories = e => {
    console.log(displaySubCategory);
    if (displaySubCategory === e.target.dataset.sub) {
      setDisplaySubCategory("");
      console.log("now");
      return;
    }
    if (e.target.dataset.sub === "sub-item") {
      return;
    }
    setDisplaySubCategory(e.target.dataset.sub);
  };

  return (
    <li
      data-sub={item.title}
      onClick={toggleSubCategories}
      className={classes["category"]}
    >
      <img
        src={displaySubCategory ? downLogo : rightLogo}
        alt="chevron-logo"
        data-sub={item.title}
      />
      {item.title}
      <ul
        className={
          displaySubCategory === item.title ? classes["display"] : classes.hide
        }
      >
        {item.subtitles?.map((listItem, i) => (
          <li key={i} data-sub="sub-item">
            {listItem}
          </li>
        ))}
      </ul>
    </li>
  );
};

export default CategoryList;
