import React from "react";
import { Helmet } from "react-helmet";
import AdminSettings from "../index";
import AnalyticsTab from "./components/AnalyticsTab";

const index = () => {
  return (
    <AdminSettings>
      <div>
        <Helmet>
          <title>Analytics - Zuri Chat</title>
        </Helmet>
        <AnalyticsTab />
      </div>
    </AdminSettings>
  );
};

export default index;
