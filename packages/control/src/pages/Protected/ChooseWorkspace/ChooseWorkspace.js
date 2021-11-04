import React from "react";
import axios from "axios";

import {
  TopNavigationBar,
  UserOrganisationsListing,
  GeneralLoading,
  Footer
} from "../../../components";

export default function Index() {
  const user = JSON.parse(sessionStorage.getItem("user")) || null;
  const [organizations, setOrganizations] = React.useState([]);

  async function fetchData() {
    const result = await axios.get(
      `https://api.zuri.chat/users/${user.email}/organizations`,
      { headers: { Authorization: `Bearer ${user.token}` } }
    );
    const { data } = result.data;
    setOrganizations(data);
  }

  React.useEffect(() => {
    if (user) {
      fetchData();
    }
  }, []);

  return (
    <>
      {/* <TopNavigationBar /> */}

      <div style={{ paddingTop: "5em" }} />

      <h2 style={{ textAlign: "center" }}>Choose A Workspace</h2>

      {organizations && organizations.length > 0 ? (
        <UserOrganisationsListing user={user} organizations={organizations} />
      ) : (
        <GeneralLoading />
      )}

      {/* <Footer /> */}
    </>
  );
}
