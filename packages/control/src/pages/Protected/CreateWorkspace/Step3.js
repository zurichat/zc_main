import React from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";

import styles from "./Steps.module.css";
import AddAnotherIcon from "./assets/AddAnotherIcon.svg";
import LinkIcon from "./assets/LinkIcon.svg";

export default function Index({ createWorkspaceData, setCreateWorkspaceData }) {
  const history = useHistory();
  const user = JSON.parse(sessionStorage.getItem("user")) || null;

  if (!createWorkspaceData.workspaceName) history.push("/create-workspace");
  if (!createWorkspaceData.workspaceDefaultChannelName)
    history.push("/create-workspace/step-2");

  const [coworkersEmail, setCoworkersEmail] = React.useState(
    createWorkspaceData.coworkersEmail
  );

  const input = (
    <Input type="text" placeholder="Ex:adimchisylvester@yahoo.com" />
  );
  const [inputs, setInputs] = React.useState([input]);
  const addEmailInput = () => setInputs([...inputs, input]);

  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.email}>
          {user ? <span>Signed in as {user.email}</span> : null}
        </div>

        <div className={styles.centerWrapper}>
          <h4> Step 3 of 3</h4>
          <h1>
            Who do you email most about{" "}
            <span
              style={{ color: "var(--primary-color)" }}
            >{`${createWorkspaceData.workspaceName}`}</span>
            ?
          </h1>
          <h4>
            Give Zuri Chat a spin and add a few coworkers you talk with
            regularly.
          </h4>
          <InputSection>
            {inputs.map((input, index) => (
              <Input key={index} />
            ))}
            <InputLinkSection>
              <AddLinkWrapper>
                <Plus onClick={addEmailInput}>+</Plus>
                <img src={AddAnotherIcon} alt="" />
                <Another onClick={addEmailInput}>Add Another</Another>
              </AddLinkWrapper>

              <SharableLink>
                <img src={LinkIcon} alt="" />
                <Link
                  style={{ color: "#00B87C", cursor: "pointer" }}
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `https://zuri.chat/invite?organization=${createWorkspaceData.workspaceName}`
                    );
                    alert(`Link has been copied to you clipboard`);
                  }}
                >
                  &nbsp;&nbsp;Get a shareable link
                </Link>
                <span> instead</span>
              </SharableLink>
            </InputLinkSection>
          </InputSection>
          <div className={styles.buttonContainer}>
            <Link to="/create-workspace/step-2">
              {" "}
              <button style={{ backgroundColor: "#f40101", color: "white" }}>
                Go Back
              </button>
            </Link>
            <button
              style={{ backgroundColor: "#00b87c", color: "white" }}
              onClick={() => {
                setCreateWorkspaceData({
                  ...createWorkspaceData,
                  coworkersEmail
                });
                history.push("/create-workspace/launch");
              }}
            >
              Launch Workspace
            </button>
          </div>
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

  &::placeholder {
    font-weight: 500;
    font-size: ${24 / 16}rem;
    color: #c4c4c4;
    font-family: "Lato", sans-serif;
  }
  @media (max-width: 35rem) {
    width: 100%;
    &::placeholder {
      font-size: 1rem;
    }
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
