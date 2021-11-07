import { useState, useEffect } from "react";
import axios from "axios";
import { FaCheck } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";
import styles from "../styles/ConfirmDeactivation.module.css";
import SettingsNav from "./SettingsNav";
import { getToken, getUser, removeUserSession } from "../Utils/Common";

const ConfirmDeactivation = () => {
  const [deactivate, setDeactivate] = useState(false);
  const history = useHistory();
  // const [id, setId] = useState(null)
  // const [org, setOrg] = useState(null)
  const user = getUser();
  const token = getToken();

  useEffect(() => {
    if (token) {
      const getUser = async () => {
        try {
          const res = await axios.get(
            `https://api.zuri.chat/users/${user.id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
                Accept: "application/json",
                "Content-Type": "application/json"
              }
            }
          );
          // console.log(res.data)
          // setId(res.data.data._id)
          // setOrg(res.data.data.Organizations[0])
        } catch (error) {
          console.error(error);
        }
      };
      getUser();
    }
  }, [token, user.id]);

  // THE SECTION OF THE DELETE FUNCTION
  const handleDelete = async () => {
    if (token) {
      try {
        const res = await axios.delete(
          `https://api.zuri.chat/users/${user.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
              "Content-Type": "application/json"
            }
          }
        );
        // console.log(res)

        removeUserSession();
        history.push("/account-deactivated");
      } catch (err) {
        console.error(err);
      }
    }
  };

  // THE SECTION OF THE DELETE FUNCTION
  // const handleDelete = async (id, org) => {
  //   if (token) {
  //     try {
  //       const res = await axios.delete(
  //         `https://api.zuri.chat/organizations/${org}/members/${id}`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //             Accept: 'application/json',
  //             'Content-Type': 'application/json'
  //           }
  //         }
  //       )
  //       console.log(res)

  //       removeUserSession()
  //       history.push('/account-deactivated')
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }
  // }

  return (
    <>
      <SettingsNav />
      <div className={styles.deactivationSection}>
        <h2 className={styles.confirmationHeader}>Deactivate Account</h2>
        <div className={styles.confirmationBox}>
          <p>Are you really sure you want to deactivate your account ?</p>
          <div className={styles.confirmationQuestion}>
            {deactivate ? (
              <span
                className={styles.checkBoxActive}
                onClick={() => {
                  setDeactivate(!deactivate);
                }}
              >
                <FaCheck />
              </span>
            ) : (
              <span
                className={styles.checkBoxInactive}
                onClick={() => {
                  setDeactivate(!deactivate);
                }}
              ></span>
            )}
            <span>Yes, I want to deactivate my account</span>
          </div>

          <div className={styles.buttonContainer}>
            <button
              className={deactivate ? styles.danger1 : styles.danger2}
              onClick={() => handleDelete()}
              disabled={!deactivate ? true : false}
            >
              Deactivate my Account
            </button>

            <Link to="/settings" className={styles.cancel}>
              Cancel
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default ConfirmDeactivation;
