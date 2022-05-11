import { Link } from "react-router-dom";
import styles from "../../component-styles/ResetPassword.module.css";
import styled from "styled-components";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import okayimage from "../signup/email-verify/assets/okayimage.svg";
import Button from "../../components/Button";
import "../../i18n";
import { useTranslation } from "react-i18next";

function passwordSuccesful() {
  const { t } = useTranslation();
  return (
    <Overlay>
      <Content>
        <Passdiv style={{ textAlign: "center" }}>
          <img src={okayimage} alt="zurichat logo" className={styles.img} />
          <h2>{t("auth.passwordResetSuccess.headline")}</h2>
          <p>{t("auth.passwordResetSuccess.post_headline")}</p>
          <Link to="/login">
            <Button>{t("auth.passwordResetSuccess.button")}</Button>
          </Link>
        </Passdiv>
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
  padding: 3rem 1rem;
`;
const Content = styled(DialogContent)`
  position: relative;
  background: white;
  //   width: 100%;
  height: 80%;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  flex-direction: column;
`;
const Passdiv = styled.div`
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

export default passwordSuccesful;
