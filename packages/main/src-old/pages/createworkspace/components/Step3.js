import styled from "styled-components";
import { Footer, FooterLink } from "./UserOrganization";
import { Button } from "./WorkspaceHome";
import LinkIcon from "../assets/link.svg";
import Oval from "../assets/Oval.svg";
import { Link, useRouteMatch } from "react-router-dom";
import Header from "../../../components/Header";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const Step3 = () => {
  let match = useRouteMatch();
  const input = (
    <Input type="text" placeholder="Ex:adimchisylvester@yahoo.com" />
  );
  const [inputs, setInputs] = useState([input]);
  const [user, setUser] = useState(null);
  const [projectname, setProjectname] = useState(
    localStorage.getItem("input") || "alpha"
  );
  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (user) {
      setUser(user);
    }
  }, []);

  const addInput = () => setInputs([...inputs, input]);

  return (
    <>
      <Header />
      <Wrapper>
        <Helmet>
          <title>Teammates - Zuri Chat</title>
        </Helmet>
        <TopSpanWrapper>
          <TopSpans>
            {user ? <SignedInAs>Signed in as {user.email}</SignedInAs> : null}
            <Change>Change</Change>
          </TopSpans>
        </TopSpanWrapper>
        <MainSection>
          <Step>Step 3 of 3</Step>
          <Heading>
            Who do you email most about <br />
            <span>{`${projectname}`}</span>?
          </Heading>
          <Marketing>
            Give Zuri Chat a spin and add a few coworkers you talk with
            regularly.
          </Marketing>
          <InputSection>
            {inputs.map((input, index) => (
              <Input key={index} />
            ))}
            <InputLinkSection>
              <AddLinkWrapper>
                <Plus onClick={addInput}>+</Plus>
                <img src={Oval} alt="" />
                <Another onClick={addInput}>Add Another</Another>
              </AddLinkWrapper>

              <SharableLink>
                <img src={LinkIcon} alt="" />
                <a
                  style={{ color: "#00B87C", cursor: "pointer" }}
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `https://zuri.chat/invite?organization=${projectname}`
                    );
                    alert(`link has been copied`);
                  }}
                >
                  Get a sharable link
                </a>
                <span> instead</span>
              </SharableLink>
            </InputLinkSection>
          </InputSection>
          <ButtonSection>
            <Button style={{ color: "white" }}>
              <StyledLink to={`${match.url}/launch`}>Add Teammates</StyledLink>
            </Button>
            <Skip to={`${match.url}/launch`}>Skip this Step</Skip>
          </ButtonSection>
        </MainSection>
        <InviteFooter>
          <FooterLink>Privacy</FooterLink>
          <FooterLink>Terms</FooterLink>
          <FooterLink>Help Centre</FooterLink>
          <FooterLink>Contact Us</FooterLink>
        </InviteFooter>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  --color: #333333;
  --color-secondary: #00b87c;

  --font-family: "Lato", sans-serif;
  padding-right: 61px;
  padding-top: 39.5px;
  padding-left: 283px;
  @media (max-width: 35rem) {
    padding-right: 24px;
    padding-left: 24px;
  }
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 18px;
  font-weight: 500;
  &:hover {
    color: white;
  }
`;
const TopSpanWrapper = styled.div`
  display: flex;
  margin-bottom: 61px;
`;
const SignedInAs = styled.span`
  font-weight: 400;
  font-family: var(--font-family);
  color: var(--color);
  font-size: 1rem;
  margin-right: 8px;
  @media (max-width: 35rem) {
    font-size: ${12 / 16}rem;
  }
`;
const Change = styled(SignedInAs)`
  font-weight: 600;
  color: var(--color-secondary);
  margin-right: revert;
`;
const TopSpans = styled.div`
  margin-left: auto;
  gap: 8px;
`;
const MainSection = styled.section`
  padding-bottom: 262.5px;
  padding-bottom: 232px;
`;
const Marketing = styled.p`
  font-weight: 600;
  font-size: ${18 / 16}rem;
  font-family: var(--font-family);
  color: #808080;
  margin-bottom: 26px;
  line-height: 1.5;
  @media (max-width: 35rem) {
    font-size: 1rem;
  }
`;
const Step = styled.span`
  font-weight: 600;
  font-size: ${18 / 16}rem;
  font-family: var(--font-family);
  color: #808080;
  @media (max-width: 35rem) {
    font-size: 1rem;
  }
`;
const Skip = styled(Link)`
  font-weight: 600;
  font-size: ${18 / 16}rem;
  font-family: var(--font-family);
  color: #808080;
  cursor: pointer;
  &:hover {
    color: #b0b0b0;
  }

  @media (max-width: 35rem) {
    font-size: 1rem;
    margin-top: 10px;
  }
`;
export const Heading = styled.h1`
  font-size: 48px;
  margin-bottom: 24px;
  line-height: 54px;
  color: var(--color);
  margin-top: 26px;
  & > span {
    color: var(--color-secondary);
  }
  @media (max-width: 35rem) {
    font-size: 28px;
    font-weight: 700;
    width: fit-content;
    line-height: 33.36px;
    & > br {
      display: none;
    }
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

  padding-bottom: 65px;
  @media (max-width: 35rem) {
    width: 100%;
    justify-content: space-between;

    padding-bottom: 83px;
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
  display: flex;
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
const ButtonSection = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  & > span {
    margin: 0;
  }
  @media (max-width: 35rem) {
    & > button {
      padding: revert;
      padding-left: 13px;
    }
    gap: 21px;
  }
`;
const InviteFooter = styled(Footer)`
  padding-bottom: 77px;
  justify-content: center;
  @media (max-width: 35rem) {
    padding-bottom: 31px;
  }
`;

export default Step3;
