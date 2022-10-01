import React from "react";
import styled from "styled-components";
import Logo from "../component-assets/zurilogoandtitle.svg";

class GeneralErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorPage>
          <div className="LogoDiv">
            <a href="/">
              <img src={Logo} alt="Zuri Logo" />
            </a>
          </div>

          <div>
            <h1>Something went wrong.</h1>
            <p>
              Go back to <a href="/">Zuri.chat</a>
            </p>
          </div>
        </ErrorPage>
      );
    }

    return this.props.children;
  }
}

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

export default GeneralErrorBoundary;
