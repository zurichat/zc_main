import styled from "styled-components";

export const SignoutStyleWrapper = styled.section`
  background: #fff;
  height: 100vh;
  width: 100wv;
  display: flex;
  align-items: center;
  flex-direction: column;

  .logo {
    padding-top: 3rem;
    padding-bottom: 4rem;

    img {
      height: 45px;
    }
  }

  .content-wrapper {
    width: 600px;
    display: inherit;
    flex-direction: column;
    justify-content: inherit;
    align-items: inherit;
    padding-top: 2rem;
    padding-bottom: 0.5rem;
    background: #f6f6f6;
    border: 1px solid #e5e5e5;
    box-sizing: border-box;
    border-radius: 4px;

    @media (max-width: 700px) {
      width: auto;
      margin: 0 1rem;
      padding-left: 1rem;
      padding-right: 1rem;
      padding-top: 2rem;
      text-align: center;
    }

    .org-name {
      font-family: Lato;
      font-weight: 700;
      font-style: normal;
      font-size: 24px;
      line-height: 36.4px;
    }

    p.login {
      font-family: Lato;
      font-style: normal;
      font-weight: bold;
      font-size: 13px;
      line-height: 130%;
      text-align: center;
      color: #242424;

      a.link {
        color: steelblue;
        margin: 0 0.4rem;
      }
    }
    button.push {
      margin-top: 2rem;
      margin-bottom: 1rem;
      background: #00b87c;
      border-radius: 4px;
      padding: 12px 18px;
      text-align: center;
      outline: none;
      border: none;
      color: #fff;
      &:hover {
        background: #156349;
      }
    }
  }
`;
export const signoutMessage = styled.p`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 130%;
`;
