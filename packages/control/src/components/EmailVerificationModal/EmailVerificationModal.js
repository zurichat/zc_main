import React from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import styles from "./EmailVerificationModal.module.css";

import CodeInput from "./CodeInput";
import EmailVerificationOkayIcon from "./assets/EmailVerificationOkayIcon.svg";
import EmailVerificationPaperPlane from "./assets/EmailVerificationPaperPlane.svg";

export default function EmailVerificationModal({ email }) {
  const [success, setsuccess] = React.useState(false);
  const [errorMsg, seterrorMsg] = React.useState(false);

  const handleSubmit = async code => {
    await axios
      .post(`https://api.zuri.chat/account/verify-account`, { code })
      .then(res => {
        if (res.status === 200) {
          setsuccess(true);
        } else {
          setsuccess(false);
          seterrorMsg(res);
        }
      })
      .catch(err => {
        seterrorMsg(err.response.data.message);
        setsuccess(false);
      });
  };

  const goHome = () => {
    window.location.href = "/create-workspace";
  };

  return (
    <Overlay>
      <Content>
        {!success ? (
          <div className={styles.main}>
            <img
              src={EmailVerificationPaperPlane}
              alt="paper plane"
              className={styles.img}
            />
            <h4>Check your email for your code !</h4>
            <p className={styles.enterCode}>
              Enter the 6-digit code sent to you at{" "}
              <a href={`mailto:${email}`} className={styles.email}>
                {email}
              </a>
              . This code expires shortly so be quick
            </p>
            <div>{errorMsg}</div>
            <div>
              <CodeInput
                length={6}
                onComplete={code => {
                  handleSubmit(code);
                }}
              />
            </div>

            <div style={{ marginBlock: "2rem" }}>
              <p style={{ textAlign: "center" }}>Code expired?</p>
              <Link to="/home" className={styles.request} disabled>
                Click here to request a new code!
              </Link>
            </div>

            <p>
              Already have an Account? <br />
              <Link to="/login" className={styles.request}>
                Use Password to sign in
              </Link>
            </p>
          </div>
        ) : (
          <Successdiv style={{ textAlign: "center" }}>
            <img
              src={EmailVerificationOkayIcon}
              alt="logo"
              className={styles.img}
            />
            <h2>Email Verification Succesful!</h2>
            <p>Click on the Button to continue</p>
            <PrimaryButton
              onClick={() => {
                goHome();
              }}
            >
              Continue
            </PrimaryButton>
          </Successdiv>
        )}
      </Content>
    </Overlay>
  );
}

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsl(220deg 5% 40% / 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 3rem 10rem;
`;
const Content = styled(DialogContent)`
  position: relative;
  background: white;
  width: 100%;
  height: 100%;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  flex-direction: column;
`;
const ButtonBase = styled.button`
  font-size: ${18 / 16}rem;
  margin: 1rem;
  padding: 12px 18px;

  border: 1px solid var(--primary-color);
  border-radius: 2px;
  font-family: "Lato", sans-serif;
  text-align: center;
  font-weight: 400;
  transition: filter 600ms;
  &:disabled {
    opacity: 50%;
  }
  &:hover {
    box-shadow: 5px 4px 20px 0px #c4c4c44d;
    transition: filter 250ms;
    filter: brightness(110%);
  }
`;
const PrimaryButton = styled(ButtonBase)`
  background-color: var(--primary-color);
  color: white;
  ${"" /* &:hover {box-shadow: 5px 4px 20px 0px #C0C4C94D;} */}
`;
const Successdiv = styled.div`
  & > h2,
  & > p {
    color: #242424;
  }
  & > h2 {
    font-style: bold;
    font-weight: 700;
    font-size: 25px;
    line-height: 48px;
    line-height: 160%;
  }
  & > p {
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 26px;
    line-height: 103%;
  }
`;
