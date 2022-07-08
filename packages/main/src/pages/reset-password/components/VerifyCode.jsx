import { useState } from "react";
import { useHistory } from "react-router-dom";
import { BASE_API_URL } from "@zuri/utilities";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import CodeInput from "../../../components/email-verification-modal/CodeInput";
import styled from "styled-components";
import axios from "axios";
import Button from "./Button";
import { useTranslation } from "react-i18next";
import { CheckCircleIcon, Icon } from "@chakra-ui/icons";
import { AiFillCloseCircle } from "react-icons/ai";
import "@reach/dialog/styles.css";

export default function VerifyResetCode({ label, closeDialog }) {
  const [success, setsuccess] = useState(false);
  const [error, setError] = useState(false);
  const [code, setCode] = useState("");
  const history = useHistory();

  const handleSubmit = async code => {
    try {
      const res = await axios.post(
        `${BASE_API_URL}/account/verify-reset-password`,
        {
          code
        }
      );
      setsuccess(true);
      setError(false);
      setCode(code);
      console.log(res.data);
    } catch (err) {
      setsuccess(true);
      setError(true);
      console.error(err);
    }
  };

  const handleClick = () => {
    if (!error) {
      history.push(`/change-password?code=${code}`);
    } else {
      closeDialog();
    }
    // history.push(`/reset-password`)
  };

  const { t } = useTranslation();

  return (
    <Overlay>
      <Content aria-label="reset-verification-code-modal">
        {!success ? (
          <div data-cy="verification_code_modal">
            <h2
              style={{
                textAlign: "center",
                color: "#00b87c",
                fontSize: "30px"
              }}
            >
              {label}
            </h2>
            <CodeInput
              length={6}
              onComplete={code => {
                handleSubmit(code);
              }}
            />
          </div>
        ) : (
          <Successdiv style={{ textAlign: "center" }}>
            {!error ? (
              <div
                className="text-success"
                data-cy="verification_code_success_modal"
              >
                <CheckCircleIcon w={50} h={50} color="green.500" />
                <h2>{t("auth.verifyCodeOnPasswordReset.success.headline")}</h2>
                <p>
                  {t("auth.verifyCodeOnPasswordReset.success.post_headline")}
                </p>
              </div>
            ) : (
              <div className="text-danger">
                <Icon as={AiFillCloseCircle} w={120} h={120} color="red.500" />
                {/* <h2>{t("auth.verifyCodeOnPasswordReset.error.headline")}</h2> */}
                <h3>
                  {t("auth.verifyCodeOnPasswordReset.error.post_headline")}
                </h3>
              </div>
            )}
            <Button
              onClick={handleClick}
              variant="secondary"
              data-cy="verification_code_modal_continue_button"
            >
              {t("auth.verifyCodeOnPasswordReset.success.continueButton")}
            </Button>
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
  padding: 3rem 2rem;
`;
const Content = styled(DialogContent)`
  position: relative;
  background: white;
  width: 100%;
  height: 80%;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  flex-direction: column;
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
