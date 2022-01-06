import React from "react";
import axios from "axios";
import { BASE_URL } from "@zuri/utilities";

import {
  TopNavigationBar,
  UserOrganisationsListing,
  GeneralLoading,
  Footer
} from "../../../components";

export default function Index() {
  const user = JSON.parse(sessionStorage.getItem("user")) || null;
  const [organizations, setOrganizations] = React.useState(
    JSON.parse(sessionStorage.getItem("organisations"))
  );

  async function fetchData() {
    const result = await axios.get(
      `${BASE_URL}/users/${user.email}/organizations`,
      { headers: { Authorization: `Bearer ${user.token}` } }
    );
    const { data } = result.data;
    setOrganizations(data);
  }

  React.useEffect(() => {
    if (user && !Array.isArray(organizations)) {
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
