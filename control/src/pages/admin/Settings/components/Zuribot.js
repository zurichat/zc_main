import React from "react"
import toast, { Toaster } from "react-hot-toast"
import Loader from "react-loader-spinner"

import styles from "../styles/zuribot.module.css"
import { authAxios } from "../../Utils/Api"

import { getToken, getCurrentWorkspace } from "../../Utils/Common"

// icons
import { AiOutlinePlus, AiOutlineSearch, AiOutlineClose } from "react-icons/ai"
import { BsPersonBoundingBox } from "react-icons/bs"
import { FiCheck } from "react-icons/fi"
import { CardContext } from "../../../../context/CardContext"

const Zuribot = () => {
  const [loading, setLoading] = React.useState(false)

  // state management for modal and Modal POST request
  const [modal, setModal] = React.useState(false)
  const [userSays, setUserSays] = React.useState()
  const [zuribotSays, setZuribotSays] = React.useState()
  const id = getCurrentWorkspace()

  // clicking on the modal cancel button
  const cancel = () => {
    setModal(!modal)
    setUserSays("")
    setZuribotSays("")
  }

  // clicking on the modal submit button
  const submit = () => {
    if (!userSays || !zuribotSays) {
      alert("textbox cannot be empty")
    } else {
      try {
        authAxios.post(`/organizations/${id}/slackbotresponses`, {
          whensomeonesays: userSays,
          slackresponds: zuribotSays
        })
        setModal(!modal)
        {
          alert(`Zuribot will now look out for the word, ${userSays}`)
        }
      } catch (error) {
        throw Error(alert(error))
      }
      setUserSays("")
      setZuribotSays("")
    }
  }

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
                rows="3"
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
                rows="3"
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
            <button onClick={submit} className={styles.primaryBtn}>
              Save
            </button>
          </div>
        </div>
      </div>
      {/* modal ends here */}
      <div>
        <h3 className={styles.intro}>
          Zuribot can automatically respond to messages that members of your
          workspace send in channels.{" "}
          <a href="" className="link">
            Get Inspired
          </a>{" "}
          with a few ideas. Right now,{" "}
          <b>only admins can edit Zuribot responses.</b> You can change this in{" "}
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
          />
        </div>
        <button
          className={styles.addNewResponseButton}
          onClick={() => {
            setModal(!modal)
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
        <tr>
          <td>Bitch</td>
          <td>We don't say that here</td>
          <td>@mark</td>
        </tr>
        <tr>
          <td>Asshole</td>
          <td>We don't say that here</td>
          <td>@Naza</td>
        </tr>
      </table>
    </div>
  )
}

export default Zuribot
