import React from "react";
import SettingsNav from "./components/SettingsNav";
import Tab from "./components/Tab";
import { Helmet } from "react-helmet";

const index = () => {
  return (
    <div>
      <Helmet>
        <title>Settings - Zuri Chat</title>
      </Helmet>
      <SettingsNav />
      <Tab />
    </div>
  );
};

export default index;
