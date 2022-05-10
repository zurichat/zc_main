import React from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { BASE_API_URL } from "@zuri/utilities";

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
      `${BASE_API_URL}/users/${user.email}/organizations`,
      { headers: { Authorization: `Bearer ${user.token}` } }
    );
    const { data } = result.data;
    setOrganizations(data);
    sessionStorage.setItem("organisations", JSON.stringify(data));
  }

  React.useEffect(() => {
    if (user && !Array.isArray(organizations)) {
      fetchData();
    }
  }, []);
  const history = useHistory();

  return (
    <>
      {/* <TopNavigationBar /> */}

      <div style={{ paddingTop: "5em" }} />

      <h2 style={{ textAlign: "center" }}>Choose A Workspace</h2>
      <p
        style={{
          textAlign: "center",
          fontWeight: "300",
          fontSize: "${18 / 17}rem"
        }}
      >
        Looking to create a workspace instead?{" "}
        <span
          style={{ color: "#00b87c", fontWeight: "450", cursor: "pointer" }}
          onClick={() => history.push("/create-workspace")}
        >
          Create a new workspace
        </span>
      </p>
      {organizations && organizations.length > 0 ? (
        <UserOrganisationsListing user={user} organizations={organizations} />
      ) : (
        <GeneralLoading />
      )}

      {/* <Footer /> */}
    </>
  );
}
