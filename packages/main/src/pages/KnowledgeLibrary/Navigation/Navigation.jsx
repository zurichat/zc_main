import { Link, useRouteMatch, useLocation } from "react-router-dom";
import classes from "./Navigation.module.css";
import { useState } from "react";
import navData from "./NavData";
import homeLogo from "../assets/home.svg";
import categoriesLogo from "../assets/clipboard-text.svg";
import downLogo from "../assets/down.svg";
import rightLogo from "../assets/right.svg";
import CategoryList from "../Categories/CategoryList";

const Navigation = () => {
  let { path } = useRouteMatch();
  const location = useLocation();
  const curPath = location.pathname.split("/").slice(-1)[0];
  console.log(curPath);
  const [displayCategories, setDisplayCategories] = useState(false);
  const [link, setLink] = useState("home");

  const toggleCategories = e => {
    console.log(e.target.dataset);
    e.target.dataset.cat === "category-list" &&
      setDisplayCategories(prevState => !prevState);
  };

  return (
    <aside className={classes.aside}>
      <div className={classes["navigation-container"]}>
        <p>The Knowledge Library</p>
        <ul className={classes["nav-links"]}>
          <li
            onClick={() => {
              setLink("home");
            }}
          >
            <Link
              to={`${path}`}
              className={
                curPath === "knowledge-library"
                  ? classes["active"]
                  : classes["in-active"]
              }
            >
              <img src={homeLogo} alt="home-logo" />
              <span>Home</span>
            </Link>
          </li>
          <li
            onClick={() => {
              setLink("categories");
            }}
          >
            <Link
              to={`${path}/categories`}
              className={
                curPath === "categories"
                  ? classes["active"]
                  : classes["in-active"]
              }
            >
              <img src={categoriesLogo} alt="categories-logo" />
              <span>Categories</span>
            </Link>
          </li>
        </ul>
        <ul className={classes["categories-list"]}>
          <li
            onClick={toggleCategories}
            data-cat="category-list"
            className={classes.categories}
          >
            Categories
            <img
              src={displayCategories ? downLogo : rightLogo}
              alt="chevron-logo"
              data-cat="category-list"
            />
            {
              <ul
                className={
                  displayCategories ? classes["display"] : classes["hide"]
                }
              >
                {navData.map((item, i) => (
                  <CategoryList key={i} item={item} />
                ))}
              </ul>
            }
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Navigation;
