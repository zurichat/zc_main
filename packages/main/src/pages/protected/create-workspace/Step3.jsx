import React, { useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { BASE_CLIENT_URL } from "@zuri/utilities";

import styles from "./Steps.module.css";
import AddAnotherIcon from "./assets/AddAnotherIcon.svg";
import LinkIcon from "./assets/LinkIcon.svg";
import { AiOutlineClose } from "react-icons/ai";
import { sendInviteAPI } from "../../../utils/new-invite.utils";
import { useTranslation } from "react-i18next";

export default function Index({ createWorkspaceData, setCreateWorkspaceData }) {
  const history = useHistory();
  const user = JSON.parse(sessionStorage.getItem("user")) || null;

  const short_id = localStorage.getItem("currentWorkspaceShort") || null;
  const organizationID = localStorage.getItem("currentWorkspace") || null;

  const { t } = useTranslation();

  if (!createWorkspaceData.workspaceName) history.push("/create-workspace");
  if (!createWorkspaceData.workspaceDefaultChannelName)
    history.push("/create-workspace/step-2");

  const [values, setValues] = useState([""]);
  const [alert, setAlert] = useState(false);

  const addEmailInput = () => {
    setValues([...values, ""]);
    console.log(values);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setCreateWorkspaceData({
      ...createWorkspaceData,
      values
    });
    console.log(values);
    sendInviteAPI(values)
      .then(resInvite => {
        console.log(resInvite);
      })
      .catch(err => {
        console.error(err);
      });

    history.push(`/workspace/${short_id}`);
  };

  const handleDelete = index => {
    const lists = values;
    setValues(lists.filter((_value, idx) => idx !== index));
  };

  const handleCopy = async () => {
    await window.navigator.clipboard.writeText(
      `${BASE_CLIENT_URL}/workspace/${organizationID}`
    );
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 2300);
  };

  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.email}>
          {user ? (
            <span>
              {t("create_workspace_eight")} {user.email}
            </span>
          ) : null}
        </div>

        {alert && (
          <Alert>
            <h6>{t("create_workspace_twenty_six")}:</h6>
            {`${BASE_CLIENT_URL}/workspace/${organizationID}`}
          </Alert>
        )}
        <div className={styles.centerWrapper}>
          <h4> {t("create_workspace_nineteen")}</h4>
          <h1>
            {t("create_workspace_twenty")}{" "}
            <span
              style={{ color: "var(--primary-color)" }}
            >{`${createWorkspaceData.workspaceName}`}</span>
            ?
          </h1>
          <h4>{t("create_workspace_twenty_one")}.</h4>
          <form onSubmit={handleSubmit}>
            {/* <InputSection> */}
            {values?.map((k, index) => (
              // <Input  />
              <div key={index} className="d-flex">
                <Input
                  type="email"
                  placeholder="adimchisylvester@yahoo.com"
                  value={k}
                  onChange={e => {
                    const valos = values;
                    // console.log(e.target.value)
                    valos[index] = e.target.value;
                    setValues([...valos]);
                  }}
                />
                <AiOutlineClose
                  className=" ml-2  mt-3 text-center"
                  onClick={() => handleDelete(index)}
                />
              </div>
            ))}
            <InputLinkSection>
              <AddLinkWrapper>
                <Plus onClick={addEmailInput}>+</Plus>
                <img src={AddAnotherIcon} alt="" />
                <Another onClick={addEmailInput}>
                  {t("create_workspace_twenty_two")}
                </Another>
              </AddLinkWrapper>

              <SharableLink>
                <img src={LinkIcon} alt="" />
                <span
                  style={{ color: "#00B87C", cursor: "pointer" }}
                  onClick={handleCopy}
                >
                  &nbsp;&nbsp;{t("create_workspace_twenty_three")}
                </span>
                <span>{t("create_workspace_twenty_four")} </span>
              </SharableLink>
            </InputLinkSection>
            {/* </InputSection> */}

            {/* <div className={styles.buttonContainer}> */}
            {/* <Link to="/create-workspace/step-2">
              {" "}
              <button style={{ backgroundColor: "#f40101", color: "white" }}>
                Go Back
              </button>
            </Link> */}
            <button
              type="submit"
              style={{
                backgroundColor: "#00b87c",
                color: "white",
                width: "100%",
                textAlign: "center"
              }}
              data-cy="create_workspace_continue_action_element"
            >
              {t("create_workspace_twenty_five")}
            </button>
            {/* </div> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 18px;
  font-weight: 500;
  &:hover {
    color: white;
  }
`;

export const Input = styled.input`
  width: 100%;
  display: block;
  border: 1px solid #808080;
  border-radius: 3px;
  padding: 20px 16px;
  margin-bottom: 24px;

  // &::placeholder {
  //   font-weight: 500;
  //   font-size: ${24 / 16}rem;
  //   color: #c4c4c4;
  //   font-family: "Lato", sans-serif;
  // }
  @media (max-width: 35rem) {
    width: 100%;
    // &::placeholder {
    //   font-size: 1rem;
    // }
  }
`;
export const InputSection = styled.div`
  width: 713px;
  margin-top: 26px;
  @media (max-width: 35rem) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100% - 24px);
  }
`;
const InputLinkSection = styled.div`
  display: flex;

  @media (max-width: 35rem) {
    width: 100%;
    justify-content: space-between;
  }
`;
const AddLinkWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 0;
  @media (max-width: 35rem) {
    margin-left: -10px;
  }
`;
const Plus = styled.a`
  font-weight: 600;
  color: var(--color);
  position: relative;
  left: 13px;
  bottom: 1px;
  cursor: pointer;
`;
const Another = styled.a`
  margin-bottom: revert;
  color: #333333;
  margin-left: 9.67px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    color: #909090;
  }
  @media (max-width: 35rem) {
    font-size: ${14 / 16}rem;
    margin-left: 7.5px;
  }
`;
const SharableLink = styled.div`
  margin-left: auto;
  display: inline-block;
  align-items: center;
  gap: 5.54px;
  & > a,
  & > span {
    color: #00b87c;
    font-weight: 600;
    font-size: ${18 / 16}rem;
  }
  & > span {
    color: var(--color);
  }
  @media (max-width: 35rem) {
    & > a,
    & > span {
      font-size: ${14 / 16}rem;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 13px;
  border: none;
  padding: 16px 24px;
  background: #00b87c;
  font-weight: 600;
  color: white;
  font-size: ${18 / 16}rem;
  font-family: "Lato", sans-serif;
  border-radius: 3px;
  transition: filter 600ms;
  cursor: pointer;
  &:hover {
    filter: brightness(110%);
    transition: filter 250ms;
  }
  & > img {
    margin-top: 3px;
  }
  @media (max-width: 35rem) {
    font-size: 1rem;
  }
`;

export const Alert = styled.div`
  font-size: 0.7rem;
  position: fixed;
  top: 13%;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.6rem;
  border-radius: 0.5rem;
  background: #fff;
  box-shadow: 19px 19px 37px #c5c5c5, -19px -19px 37px #fbfbfb;
  z-index: 99999;
`;
