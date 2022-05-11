import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Logo from "../../component-assets/zurilogoandtitle.svg";

const index = () => {
  const [noControl, setnoControl] = useState(true);

  useEffect(() => {
    setnoControl(
      document.querySelectorAll(
        `[id*='zuri/zuri-plugin'],[id*='zuri/topbar'],[id*='zuri/sidebar']`
      ).length < 0
    );
  }, []);

  return noControl ? (
    <></>
  ) : (
    <ErrorPage>
      <div className="LogoDiv">
        <Helmet>
          <title>Error 404 !</title>
        </Helmet>
        <Link to="/">
          <img src={Logo} alt="Zuri Logo" />
        </Link>
      </div>

      <div>
        <h1>404</h1>
        <p>
          Oops something is missing!! Go to <Link to="/">zuri.chat</Link>
        </p>
      </div>
    </ErrorPage>
  );
};

export default index;

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
