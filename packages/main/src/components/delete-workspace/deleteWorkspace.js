import { BASE_API_URL } from "@zuri/utilities";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import del from "./assets/delete.svg";
import classes from "./deleteWorkspace.module.css";
const DeleteWorkspace = () => {
  const history = useHistory();
  const orgName = localStorage.getItem("orgName");
  const currentWorkspaceShort = localStorage.getItem("currentWorkspaceShort");
  const currentWorkspace = localStorage.getItem("currentWorkspace");
  const userData = JSON.parse(localStorage.getItem("userData"));
  const token = userData.token;

  const deleteWorkspace = async e => {
    e.preventDefault();
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    };
    const res = await axios.delete(
      `${BASE_API_URL}/organizations/${currentWorkspace}`,
      {
        headers
      }
    );

    if (res.status === 200) {
      localStorage.removeItem(currentWorkspaceShort);
      localStorage.removeItem(orgName);
      localStorage.removeItem(currentWorkspace);
      history.push("/create-workspace");
    }
  };

  return (
    <div className=" bg-light Main" style={{ fontWeight: "700" }}>
      <div className="container py-4">
        <h1> You are deleting {orgName} </h1>{" "}
      </div>
      <div className="container">
        <div className={classes.Notice}>
          <div className="px-2">
            <img src={del} alt="" />
          </div>
          <div className="px-3">
            <h4 style={{ fontWeight: "700" }}>Important Note!</h4>
            <p style={{ fontWeight: "700" }}>
              If you just want to change your workspace’s name or URL, you can
              do that from{" "}
              <Link to="/admin/settings/home">
                <span className={classes.Span}>your Settings page.</span>
              </Link>{" "}
              You also might want to{" "}
              <span className={classes.Span}>export your data</span> before
              deleting your workspace.{" "}
            </p>
          </div>{" "}
        </div>

        <div className={classes.Notice}>
          <div className="px-2 pt-3">
            <img src={del} alt="" />
          </div>
          <div className="px-3">
            <h4 style={{ fontWeight: "700" }}>Planning to re-use this URL</h4>
            <p style={{ fontWeight: "700" }}>
              Workspace URLs can take some time to become available after
              deletion. If you intend to create a new workspace using{" "}
              <span style={{ color: "red" }}>HNGi8-workspace</span>,{" "}
              <span className={classes.Span}>
                consider changing the current workspace URL
              </span>{" "}
              before deletion.{" "}
            </p>
          </div>
        </div>

        <div className="row bg-white py-5 px-5">
          <form onSubmit={deleteWorkspace}>
            <h3 className="pb-3" style={{ fontWeight: "700" }}>
              Confirm Deletion
            </h3>
            <div className="d-flex mb-4">
              <input
                type="checkbox"
                name="check"
                id=""
                className=""
                style={{
                  height: "25px",
                  width: "25px"
                }}
              />
              <p className="pt-1 px-2" style={{ fontWeight: "700" }}>
                {" "}
                I understand that all of my workspace’s messages and files will
                be deleted.
              </p>
            </div>
            <div>
              <label
                htmlFor="password"
                style={{ fontWeight: "700" }}
                className="fs-5 pb-2"
              >
                Zurichat Password
              </label>
              <input
                type="password"
                name=""
                id=""
                className="d-block py-3 px-5"
              />
            </div>

            <p
              className="py-2"
              style={{
                color: "#616061",
                fontWeight: "700"
              }}
            >
              This is the password used when you set up Zurichat — not your SSO
              password.{" "}
              <span className={classes.Span}>
                Need to create or reset your Zurichat password?
              </span>
            </p>
            <div>
              <button
                type="submit"
                className=" border-0 py-3 px-3  submit"
                style={{
                  backgroundColor: " #B0AFB0",
                  color: "#1D1C1D",
                  borderRadius: "5px"
                }}
              >
                Yes, delete my workspace
              </button>
              <button type="reset" className={classes.Cancel}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeleteWorkspace;
