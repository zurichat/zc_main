import React, { useState } from "react";
import styles from "../styles/AuthenticationTab.module.css";
import { getCurrentWorkspace } from "../../Utils/Common";
import toast, { Toaster } from "react-hot-toast";
import { authAxios } from "../../Utils/Api";

const Session = () => {
  const currentWorkspace = getCurrentWorkspace();
  // console.log('currentworkspace', currentWorkspace)
  const [value, setvalue] = useState(1);

  const handleChange = e => {
    setvalue(e.target.value);
    // console.log(e.target.value)
  };

  const setSessonDuration = e => {
    e.preventDefault();

    authAxios
      .patch(
        `/organizations/${currentWorkspace}/auth`,
        JSON.stringify({
          sessionduration: value
        })
      )
      .then(res => {
        // console.log(res.data)
        toast.success(res.data.message, {
          position: "top-center"
        });
      })
      .catch(err => {
        console.error(err);
        toast.error("Oops, something went wrong check and try again", {
          position: "center"
        });
      });
  };

  return (
    <div className={styles.passwordsection}>
      <form className="row d-flex flex-column">
        <div className="col-md-5 mt-2">
          <select
            className="form-select"
            required
            disabled
            onChange={e => handleChange(e)}
          >
            <option defaultValue value={1}>
              Allow infinite sessions
            </option>
          </select>
        </div>
        <div className="col-md-4 mb-3 mt-2">
          <button className="btn" onClick={e => setSessonDuration(e)}>
            See Paid Plans
          </button>
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default Session;
