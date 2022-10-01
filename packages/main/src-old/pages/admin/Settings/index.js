import React from "react";
import { Helmet } from "react-helmet";
import AdminSettings from "..";
import AdminSettingsTab from "./components/AdminSettingsTab";

const index = () => {
  return (
    <AdminSettings>
      <div>
        <Helmet>
          <title>Settings - Zuri Chat</title>
        </Helmet>
        <AdminSettingsTab />
      </div>
    </AdminSettings>
  );
};

export default index;
