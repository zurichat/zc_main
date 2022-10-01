import "bootstrap/dist/css/bootstrap.min.css";
import classes from "../styles/changeWoekspaceName.module.css";
import logo from "../assets/default.svg";
function App() {
  return (
    <div className="app bg-light pb-5">
      <div className="container py-5 d-flex">
        <img src={logo} alt="" />
        <h2 className="px-3" styles={{ fontWeight: "700" }}>
          Change Workspace Name
        </h2>
      </div>

      <div className="container bg-white mb-5 px-5 rounded">
        <div className="row">
          <div className="col-sm-6">
            <h2 className="my-3" styles={{ fontWeight: "700" }}>
              Workspace Name
            </h2>
            <p className="mb-5">
              Your workspace name is displayed in mrnus and headings. It will
              usually be (or include) the name of your company.
            </p>

            <h2 styles={{ fontWeight: "700" }}>Workspace URL</h2>
            <p className="mb-5">
              You can change your workspace’s URL (web address), but out of
              courtesy to your fellow Zurichat users, please don’t do this often
              :)
            </p>

            <p className={classes.Note}>
              Note: If you change your workspace’s URL, Zurichat will
              automatically redirect from the old to the new address. However,
              you should still make sure everyone in your workspace knows about
              the change because the old name will be placed back into the pool
              and could be used by some other workspace in the future.
            </p>
          </div>

          <div className="col-sm-6">
            <form action="" method="post" className="pt-5">
              <input
                type="text"
                placeholder="HNGI8"
                className="w-100 mt-4 mb-5 p-2"
              />
              <div>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="HNG"
                  className={classes.Half}
                />
                <span className="px-2">.zuri.chat</span>{" "}
              </div>
              <p className="py-3">
                Your workspace URL can only contain lowercase letters, numbers
                and dashes (and must start with a letter or number).
              </p>
              <button type="submit" className={classes.Button}>
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
