import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import Button from "./Button";
import { useTranslation } from "react-i18next";
import { CheckCircleIcon, Icon } from "@chakra-ui/icons";
import { AiFillCloseCircle } from "react-icons/ai";

function passwordSuccesful({ error, closeDialog }) {
  const { t } = useTranslation();
  const history = useHistory();
  const handleClick = () => {
    if (!error) {
      history.replace("/login");
    } else {
      closeDialog();
    }
    // history.push(`/reset-password`)
  };

  return (
    <Overlay>
      <Content aria-label="confirm-verification-code-modal">
        <Passdiv style={{ textAlign: "center" }}>
          {!error ? (
            <div
              className="text-success"
              data-cy="change_password_success_modal"
            >
              <CheckCircleIcon w={50} h={50} color="green.500" />
              <h2>{t("auth.verifyCodeOnPasswordReset.success.headline")}</h2>
              <p>
                {t("auth.verifyCodeOnPasswordChange.success.post_headline")}
              </p>
            </div>
          ) : (
            <div className="text-danger">
              <Icon as={AiFillCloseCircle} w={120} h={120} color="red.500" />
              {/* <h2>{t("auth.verifyCodeOnPasswordReset.error.headline")}</h2> */}
              <h4>
                {t("auth.verifyCodeOnPasswordChange.error.post_headline")}
              </h4>
            </div>
          )}

          <Button
            onClick={handleClick}
            variant="secondary"
            data-cy="change_password_modal_continue_button"
          >
            {" "}
            {t("auth.verifyCodeOnPasswordReset.success.continueButton")}
          </Button>
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
  width: 80%;
  height: 60%;
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
