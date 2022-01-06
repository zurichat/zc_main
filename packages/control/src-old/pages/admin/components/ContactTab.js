import React, { useState, useEffect } from "react";
import { BASE_URL } from "@zuri/utilities";
import styles from "../styles/adminContactTab.module.css";
import { RiUserFill } from "react-icons/ri";
import { BiPlus } from "react-icons/bi";
import axios from "axios";
import { AiOutlineClose } from "react-icons/ai";
import { getCurrentWorkspace, getToken } from "../Utils/Common";

const ContactTab = () => {
  const [isAddingBilling, setIsAddingBilling] = useState(false);
  const [workSpace, setWorkSpace] = useState(null);
  const [isLoaded, setIsloaded] = useState(false);
  const [values, setValues] = useState({
    contacts: null,
    to_default_email: true
  });
  const [emailAddress, setEmailAddress] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isResponse, setisResponse] = useState(false);

  const work = localStorage.getItem("currentWorkspace");
  if (!work) {
    return <p>Error getting creator's email</p>;
  }

  useEffect(() => {
    let controller = new AbortController();
    const token = getToken();
    (async () => {
      await axios
        .get(`${BASE_URL}/organizations/${work}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(response => {
          setWorkSpace(response.data);
        })
        .catch(error => {});
    })();
    return () => controller?.abort();
  }, []);

  useEffect(() => {
    if (isLoaded) {
      const billing = workSpace.data.billing.billing_contact;
      if (billing.contacts === null) {
        setValues({ ...billing, contacts: [] });
      } else {
        setValues({ ...billing });
      }
    }
    setIsloaded(true);
  }, [workSpace]);

  if (!workSpace) {
    return <p>loading...</p>;
  }

  if (values.contacts === null) {
    return <p>loading...</p>;
  }

  const { data } = workSpace;

  const handleAdd = emailAddress => {
    if (values.contacts) {
      setValues({
        ...values,
        contacts: [...values.contacts, { email: emailAddress }]
      });
    } else {
      setValues({
        ...values,
        contacts: [{ email: emailAddress }]
      });
    }
  };

  const saveChange = async () => {
    setisResponse(true);
    const token = getToken();
    await axios
      .patch(
        `${BASE_URL}/organizations/${workSpace.data._id}/billing/contact`,
        {
          data: values
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      .then(response => {
        setisResponse(false);
      })
      .catch(error => {
        setisResponse(false);
      });
  };
  const handleCheck = () => {
    setValues({ ...values, to_default_email: !values.to_default_email });
  };

  const removeArray = add => {
    const a = values.contacts;
    const gett = a.filter(el => el.email !== add);

    if (gett.length < 1) {
      setValues({ to_default_email: true, contacts: [...gett] });
    } else {
      setValues({ ...values, contacts: [...gett] });
    }
  };

  return (
    <div>
      <p>
        Billing emails will be sent to{" "}
        <strong>
          {values.to_default_email && (
            <small>
              {data.creator_email}
              {values.contacts.length > 0 && ", "}
            </small>
          )}
          {values?.contacts.length > 0 && (
            <>
              {values.contacts.map((emai, index) => {
                const { email } = emai;
                return (
                  <small key={index}>
                    {email}
                    {index === values.contacts.length - 1 ? "." : ", "}
                  </small>
                );
              })}
            </>
          )}
        </strong>
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
          <input
            disabled={values.contacts.length < 1}
            type="checkbox"
            checked={values.to_default_email}
            onChange={() => handleCheck()}
          />
          <p>
            Send billing emails to you at <strong>{data.creator_email}</strong>
          </p>
        </div>
      </div>
      <hr />
      <div>
        {values.contacts.length > 0 &&
          values.contacts.map((emailVal, index) => {
            return (
              <div key={index}>
                <div className={styles.admin_billing_owners_space_mapping}>
                  <div className={styles.owner_informations}>
                    <div className={styles.owner_information_img_container}>
                      <RiUserFill className={styles.icon} />
                    </div>
                    <div className={styles.owner_information_details}>
                      <p>
                        You, <strong>{emailVal.email}</strong>
                        <br />
                        <span>
                          <strong>Member</strong>
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-end">
                    <button
                      onClick={() => removeArray(emailVal.email)}
                      style={{ fontSize: "1.2rem" }}
                      className=" bg-transparent  "
                    >
                      <AiOutlineClose />
                    </button>
                  </div>
                </div>
                <hr />
              </div>
            );
          })}
      </div>
      <div className={styles.add_new_billing_container}>
        {isAddingBilling ? (
          <form
            onSubmit={e => e.preventDefault()}
            className={styles.forms_input}
          >
            <div className={styles.inputCon}>
              <label htmlFor="fromTeam">Email address:</label>
              <input
                readOnly={isResponse}
                style={{ width: "250px" }}
                value={emailAddress}
                onChange={e => {
                  setEmailAddress(e.target.value);
                  setIsEmailValid(false);
                }}
                type="email"
                required
                placeholder="name@example.com"
              />
              {isEmailValid && (
                <small style={{ color: "red" }}>Email Required</small>
              )}
            </div>
            <div className={styles.button_container}>
              <div className={styles.inputCon}>
                <label style={{ opacity: "0" }} htmlFor="">
                  align
                </label>
                <button
                  disabled={isResponse}
                  onClick={() => {
                    if (emailAddress !== "") {
                      handleAdd(emailAddress);
                      setEmailAddress("");
                    } else {
                      setIsEmailValid(true);
                    }
                  }}
                  type="button"
                  className={styles.billing_contact}
                >
                  Add Billing
                </button>
              </div>
              <div className={styles.inputCon}>
                <label style={{ opacity: "0" }} htmlFor="">
                  align
                </label>
                <button
                  onClick={() => saveChange()}
                  className={styles.billing_contact}
                >
                  {isResponse ? "loading.." : "  Save changes"}
                </button>
              </div>
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
  );
};

export default ContactTab;
