import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/deleteWorkspace.module.css';
import del from "../assets/delete.svg";

const Delete = () => {
  const mainName = "HNGi8";

  return (
    <div className=" bg-light main">
      <div className="container py-4">
        <h1> You are deleting {mainName} </h1>{" "}
      </div>
      <div className="container">
        <div className="d-flex bg-white pb-3 pt-2 rounded mb-4 notice">
          <div className="px-2">
            <img src={del} alt="" />
          </div>
          <div className="px-3">
            <h4>Important Note!</h4>
            <p className="">
              If you just want to change your workspace’s name or URL, you can
              do that from <span>your Settings page.</span> You also might want
              to <span>export your data</span> before deleting your workspace.{" "}
            </p>
          </div>{" "}
        </div>{" "}
        <div className="d-flex  bg-white pb-3 pt-2 rounded mb-4 notice">
          <div className="px-2 pt-3">
            <img src={del} alt="" />
          </div>
          <div className="px-3">
            <h4>Planning to re-use this URL</h4>
            <p>
              Workspace URLs can take some time to become available after
              deletion. If you intend to create a new workspace using{" "}
              <span style={{color:"red"}}>HNGi8-workspace</span>,{" "}
              <span>consider changing the current workspace URL</span> before
              deletion.{" "}
            </p>
          </div>
        </div>
        <div className="row bg-white py-5 px-5">
          <form action="post">
            <h3 className="pb-3">Confirm Deletion</h3>
            <div className="d-flex mb-4">
              <input
                type="checkbox"
                name="check"
                id=""
                              className=""
                              style={{
                                  height: '25px',
                                  width:'25px'
                              }}
              />
              <p className="pt-1 px-2">
                {" "}
                I understand that all of my workspace’s messages and files will
                be deleted.
              </p>
            </div>
            <div>
              <label htmlFor="password" className="fs-5 pb-2">Zurichat Password</label>
              <input type="password" name="" id="" className="d-block py-3 px-5" />
            </div>

                      <p
                          className="py-2"
                          style={{
                 color: '#616061'
            }}>
              This is the password used when you set up Zurichat — not your SSO
              password.{" "}
              <span>Need to create or reset your Zurichat password?</span>
            </p>
            <div>
              <button type="submit" className=" border-0 py-3 px-3  submit">
                Yes, delete my workspace
              </button>
              <button type="reset" className="bg-white px-4 py-3 mx-3 cancel">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Delete;