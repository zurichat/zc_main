import Categories from "../Categories/Categories";
import classes from "./Home.module.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className={classes.container}>
      <p className={classes.p}>Most Read</p>
      <div className={classes["links"]}>
        <Link to="/about" className={classes["link-1"]}>
          About Zuri Chat
        </Link>
        <Link to="/faqs" className={classes["link-2"]}>
          FAQs
        </Link>
        <Link to="/team" className={classes["link-3"]}>
          The Team
        </Link>
      </div>
      <Categories className={classes["middle"]} />
    </div>
  );
}

export default Home;
