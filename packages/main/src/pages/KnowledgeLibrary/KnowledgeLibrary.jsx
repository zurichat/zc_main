import { Footer, TopNavigationBar } from "../../components";
import Navigation from "./Navigation/Navigation";
import classes from "./KnowledgeLibrary.module.css";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Home from "./Home/Home";
import Categories from "./Categories/Categories";

function KnowledgeLibrary() {
  let { path } = useRouteMatch();

  return (
    <div className={classes.container}>
      <TopNavigationBar />
      <div className={classes["container-body"]}>
        <Navigation />
        <main className={classes.main}>
          <h2>Welcome to Zuri chat Knowledge library</h2>
          <p className={classes["head-p"]}>
            Find useful company information in one place
          </p>
          <Switch>
            <Route path={`${path}`} component={Home} exact />
            <Route path={`${path}/categories`} component={Categories} exact />
          </Switch>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default KnowledgeLibrary;
