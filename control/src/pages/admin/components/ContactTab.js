import React, { useState } from "react"
import styles from "../styles/adminContactTab.module.css"
import { RiUserFill } from "react-icons/ri"
import { BiPlus } from "react-icons/bi"
import { GetUserInfo } from "@zuri/control"
import axios from "axios"

const ContactTab = () => {
  const [isAddingBilling, setIsAddingBilling] = useState(false)
  const [workSpace, setWorkSpace] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const work = localStorage.getItem("currentWorkspace")
  if (!work) {
    return <p>Error getting creator's email</p>
  }

  const getCreator = async () => {
    const getInfo = await GetUserInfo()
    const { token } = getInfo
    await axios
      .get(`https://api.zuri.chat/organizations/${work}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        setWorkSpace(response.data)
        setIsLoading(false)
      })
      .catch(error => {})
  }

  getCreator()

  if (isLoading) {
    return <p>loading...</p>
  }

  const { data } = workSpace

  const handleSubmit = e => {
    e.preventDefault()
    //do more stuffs
    setIsAddingBilling(false)
  }

  return (
    <div>
      <p>
        Billing emails will be sent to <strong>{data.creator_email}</strong>
      </p>
      <p>
        You may add additional billing contacts (for example, your accounting
        department). All billing-related emails will be sent to this list of
        contacts
      </p>
      <hr />
      <div className={styles.admin_billing_owners_space}>
        <div className={styles.owner_informations}>
          <div className={styles.owner_information_img_container}>
            <RiUserFill className={styles.icon} />
          </div>
          <div className={styles.owner_information_details}>
            <p>
              You, <strong>{data.creator_email}</strong>
              <br />
              <span>
                <strong>Primary Owner</strong>
              </span>
            </p>
          </div>
        </div>
        <div className={styles.owner_email_information}>
          <input type="checkbox" checked disabled />
          <p>
            Send billing emails to you at <strong>{data.creator_email}</strong>
          </p>
        </div>
      </div>
      <hr />
      <div className={styles.add_new_billing_container}>
        {isAddingBilling ? (
          <form onSubmit={e => handleSubmit(e)} className={styles.forms_input}>
            <div className={styles.inputCon}>
              <label htmlFor="fromTeam">
                Add a billing contact from your team:
              </label>
              <input type="text" placeholder="choose an option" />
            </div>
            <div className={styles.inputCon}>
              <label htmlFor="fromTeam">Or by email address:</label>
              <input type="text" placeholder="name@example.com" />
            </div>
            <div className={styles.inputCon}>
              <label style={{ opacity: "0" }} htmlFor="">
                align
              </label>
              <button type="submit" className={styles.billing_contact}>
                Add Billing
              </button>
            </div>
          </form>
        ) : (
          <div className={styles.billingbuttonwrapper}>
            <button onClick={() => setIsAddingBilling(true)}>
              <BiPlus />
              <span>Add a new billing contact</span>
            </button>
            <small>
              Additional billing contacts will be copied on all billing emails.
            </small>
          </div>
        )}
      </div>
    </div>
  )
}

export default ContactTab
