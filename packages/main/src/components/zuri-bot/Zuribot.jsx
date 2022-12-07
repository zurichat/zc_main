import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import Loader from "react-loader-spinner";

import styles from "../styles/zuribot.module.css";
import { authAxios } from "../../Utils/Api";

import { getToken, getCurrentWorkspace, getUser } from "../../Utils/Common";

// icons
import { AiOutlinePlus, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { BsPersonBoundingBox } from "react-icons/bs";
import { FiCheck } from "react-icons/fi";
import { CardContext } from "../../../../context/CardContext";

// let //Zuribotdata =
//   [
//     {
//       "whensomeonesays":"",
//       "slackresponds":"",
//       "lasteditedby": null
//     }
//   ]

const Zuribot = () => {
  const [loading, setLoading] = React.useState(false);

  // state management for modal and Modal POST request
  const [modal, setModal] = React.useState(false);
  const [userSays, setUserSays] = React.useState();
  const [zuribotSays, setZuribotSays] = React.useState();
  const id = getCurrentWorkspace();
  const user = getUser();

  // clicking on the modal cancel button
  const cancel = () => {
    setModal(!modal);
    setUserSays("");
    setZuribotSays("");
  };

  // clicking on the modal submit button
  const submit = () => {
    if (!userSays || !zuribotSays) {
      alert("textbox cannot be empty");
    } else {
      try {
        setLoading(true);
        authAxios.patch(`/organizations/${id}/slackbotresponses`, {
          whensomeonesays: userSays,
          slackresponds: zuribotSays
        });
        setModal(!modal);
        {
          alert(`Zuribot will now look out for the word, ${userSays}`);
        }
        setLoading(false);
      } catch (error) {
        throw Error(alert(error));
      }
      setUserSays("");
      setZuribotSays("");
    }
  };

  // getting all the responses from the database
  // const retrieve = async () => {
  //   try {
  //     const zuribotData = await authAxios.get(
  //       `/organizations/${id}/slackbotresponses`
  //     )
  //     alert(zuribotData.data)
  //     return zuribotData.data
  //   } catch (error) {
  //     throw Error(alert(error))
  //   }
  // }
  const [input, setInput] = useState("");
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    authAxios.get(`https://api.zuri.chat/organizations/${id}`).then(
      result => {
        setLoading(true);
        setItems(result.data.customize.slackbot);
      },

      error => {
        setLoading(true);
        setError(error);
      }
    );
  }, []);

  const capitalize = search => {
    return search.slice(0, 1).toUpperCase() + search.slice(1);
  };

  return (
    <div>
      {/* modal */}
      <div className={modal ? styles.modalActive : styles.modal}>
        <div onClick={() => setModal(!modal)} className={styles.overlay} />
        <div className={styles.modalContainer}>
          <div className={styles.modalHeader}>
            <h3 className={styles.modalHeading}>Add Zuribot Response</h3>
            <AiOutlineClose
              className={styles.mainIcons}
              onClick={() => setModal(!modal)}
            />
          </div>
          <h3 className={styles.modalSubHead}>When someone says</h3>
          <div className={styles.modalGenContainer}>
            <div className={styles.modalLogo}>
              <BsPersonBoundingBox className={styles.modalImage} />
            </div>

            <div className={styles.textareaAndText}>
              <textarea
                name=""
                id=""
                cols="25"
                rows="2"
                value={userSays}
                onChange={e => setUserSays(e.target.value)}
              ></textarea>
              <h3 className={styles.normalText}>
                Enter a phrase a phrase someone might type
              </h3>
            </div>
          </div>

          <h3 className={styles.modalSubHead}>Zuribot says</h3>
          <div className={styles.modalGenContainer}>
            <div className={styles.modalLogo}>
              <BsPersonBoundingBox className={styles.modalImage} />
            </div>

            <div className={styles.textareaAndText}>
              <textarea
                name=""
                id=""
                cols="25"
                rows="2"
                value={zuribotSays}
                onChange={e => setZuribotSays(e.target.value)}
              ></textarea>
              <h3 className={styles.normalText}>
                Enter what zuribot response should be
              </h3>
            </div>
          </div>

          <div className={styles.buttonWrapper}>
            <button onClick={cancel} className={styles.secondaryBtn}>
              Cancel
            </button>
            <button
              onClick={submit}
              className={styles.primaryBtn}
              disabled={loading}
            >
              {loading ? "Wait" : "Save"}
            </button>
          </div>
        </div>
      </div>
      {/* modal ends here */}
      <div>
        <h3 className={styles.intro}>
          Zuribot can automatically respond to messages that members of your
          workspace send in channels.{" "}
        </h3>
        <h3>
          <a href="" className="link">
            Get inspired
          </a>{" "}
          with a few ideas. Right now,{" "}
          <strong>only admins can edit Slackbot responses.</strong>
          You can change this in{" "}
          <a href="" className="link">
            Admin Settings
          </a>
          .
        </h3>
      </div>

      <div className={styles.searchContainer}>
        {/* search box with icon */}
        <div className={styles.searchItself}>
          <AiOutlineSearch className={styles.mainIcons} />

          <input
            type="search"
            className={styles.search}
            name=""
            id=""
            placeholder="Search custom responses"
            value={input}
            onChange={e => setInput(e.target.value)}
          />
        </div>
        <button
          className={styles.addNewResponseButton}
          onClick={() => {
            setModal(!modal);
          }}
        >
          {/* icon */}
          <AiOutlinePlus className={styles.mainIcons} />
          Add New Response
        </button>
      </div>
      <table>
        <tr className={styles.head}>
          <th>When someone says</th>
          <th>Zuribot responds</th>
          <th>Last edited by</th>
        </tr>
        {items
          .filter(inputs => inputs.whensomeonesays.includes(capitalize(input)))
          .map((result, i) => (
            <tr key={i} className={styles.head}>
              <td>{result.whensomeonesays}</td>
              <td>{result.slackresponds}</td>
              <td>{user}</td>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default Zuribot;
