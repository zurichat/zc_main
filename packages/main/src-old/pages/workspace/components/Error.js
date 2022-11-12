import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../../component-assets/zurilogoandtitle.svg";
import { useTranslation } from "react-i18next";

const WorkspaceError = ({ error }) => {
  const errorMessage = error.toString();
  const { t } = useTranslation();

  if (errorMessage.match(/401/)) {
    return (
      <ErrorPage>
        <div className="LogoDiv">
          <Link to="/">
            <img src={Logo} alt="Zuri Logo" />
          </Link>
        </div>

        <div>
          <h1>{t("workspace.space.errno")}</h1>
          <p>
            {t("workspace.space.errmsg")}{" "}
            <Link to="/login">{t("workspace.space.errlink")}</Link>
          </p>
        </div>
      </ErrorPage>
    );
  } else {
    return (
      <ErrorPage>
        <div className="LogoDiv">
          <Link to="/">
            <img src={Logo} alt="Zuri Logo" />
          </Link>
        </div>

        <div>
          <h1>{t("workspace.space.err_no")}</h1>
          <p>
            {t("workspace.space.err_msg")}{" "}
            <Link to="/">{t("workspace.space.err_link")}</Link>
          </p>
        </div>
      </ErrorPage>
    );
  }
};

const ErrorPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  height: 100vh;
  width: 100vw;
  text-align: center;
  & * {
    font-size: 18px;
  }

  div {
    margin: 2rem;
    &:not([class^="LogoDiv"]) {
      display: flex;
      flex-direction: column;
      align-items: center;
      a {
        font: inherit;
        border: none;
        transition: all 0.1s ease-in-out;
        ${"" /* padding-inline: 0.5rem; */}

        &:hover {
          color: white;
          background-color: var(--primary-color);
        }
      }
    }
    h1 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1.2rem;
    }
  }
`;

export default WorkspaceError;
