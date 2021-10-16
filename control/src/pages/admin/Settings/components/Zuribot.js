import React, {useState, useEffect} from "react"
import toast, { Toaster } from "react-hot-toast"
import Loader from "react-loader-spinner"

import styles from "../styles/zuribot.module.css"
import { authAxios } from "../../Utils/Api"

import { getUser, getCurrentWorkspace } from "../../Utils/Common"

// icons
import { AiOutlinePlus, AiOutlineSearch, AiOutlineClose } from "react-icons/ai"
import { BsPersonBoundingBox } from "react-icons/bs"
import { FiCheck } from "react-icons/fi"
import { CardContext } from "../../../../context/CardContext"


// let //Zuribotdata = 
//   [
//     {
//       "whensomeonesays":"",
//       "slackresponds":"",
//       "lasteditedby": null
//     }
//   ]



const Zuribot = () => {
  const [loading, setLoading] = React.useState(false)
  const [modal, setModal] = React.useState(false)
  const [input, setInput] = useState("")
  const [error, setError] = useState(null);
  const [items, setItems] = useState([])

  useEffect(() => {
    authAxios.get("https://api.zuri.chat/organizations/%7Bid%7D/slackbotresponses")
      .then(res => res.json())
      .then(
        (result) => {
          setLoading(true);
          setItems(result.data)
        },
        
        (error) => {
          setLoading(true);
          setError(error);
        }
      )
  }, [])

  const capitalize = (search)=> {

    return search.slice(0,1).toUpperCase() + search.slice(1)
  }

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
              <textarea name="" id="" cols="25" rows="4"></textarea>
              <h3 className={styles.normalText}>
                Seperate multiple input phrases with commas. ie. hi, hello
              </h3>
            </div>
          </div>

          <h3 className={styles.modalSubHead}>Zuribot says</h3>
          <div className={styles.modalGenContainer}>
            <div className={styles.modalLogo}>
              <BsPersonBoundingBox className={styles.modalImage} />
            </div>

            <div className={styles.textareaAndText}>
              <textarea name="" id="" cols="25" rows="4"></textarea>
              <h3 className={styles.normalText}>
                Seperate multiple input phrases with commas. ie. hi, hello
              </h3>
            </div>
          </div>

          <div className={styles.buttonWrapper}>
            <button
              onClick={() => setModal(!modal)}
              className={styles.secondaryBtn}
            >
              Cancel
            </button>
            <button
              // onClick={handlePlan}
              className={styles.primaryBtn}
            >
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
        </h3>
        <h3>
          <a href="" className="link">Get inspired</a> with a few ideas. 
          Right now, <strong>only admins can edit Slackbot responses.</strong>
          You can change this in <a href="" className="link">Admin Settings</a>.
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
            value= {input}
            onChange= {(e)=> setInput(e.target.value)}
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
        {items.filter((inputs)=> inputs.whensomeonesays.includes(capitalize(input))).map((result, i)=>(
            <tr key ={i} className={styles.head}>
            <td>{result.whensomeonesays}</td>
            <td>{result.slackresponds}</td>
            <td>{result.lasteditedby}</td>
          </tr>
        ))
        } 
        
        
      </table>
    </div>
  )
}

export default Zuribot
