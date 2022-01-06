import React from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BASE_URL } from "@zuri/utilities";

import { UserOrganisationsListing } from "../../../components";

import ContinueArrow from "./assets/ContinueArrow.svg";
import CreateWorkspaceSideImage from "./assets/CreateWorkspaceSideImage.png";

export default function Index() {
  const user = JSON.parse(sessionStorage.getItem("user")) || null;
  const [organizations, setOrganizations] = React.useState([]);

  async function fetchData() {
    const result = await axios.get(
      `${BASE_URL}/users/${user.email}/organizations`,
      { headers: { Authorization: `Bearer ${user.token}` } }
    );
    const { data } = result.data;
    setOrganizations(data);
  }

  React.useEffect(() => {
    if (user) {
      fetchData();
    }
  }, []);

  return (
    <>
      <Wrapper>
        <TopSection
          style={
            user === true ? { paddingBottom: "0" } : { paddingBottom: "50px" }
          }
        >
          <TextSection>
            <Heading>Create a new workspace</Heading>
            <Text>
              Zuri Chat gives your team a home — a place where they can talk and
              work together. To create a new workspace, click the button below
            </Text>
            <Link to={`/create-workspace/step-1`}>
              <Button style={{ minWidth: "259px" }}>
                Create a new workspace
                <img src={ContinueArrow} alt="" />
              </Button>
            </Link>

            <CheckboxSide>
              <input type="checkbox" defaultChecked={true} />
              <p>It's okay to receive emails from Zuri Chat</p>
            </CheckboxSide>
            <FadedText>
              By continuing, you’re agreeing to our Customer Terms of Service,
              Privacy Policy, and Cookie Policy.
            </FadedText>
          </TextSection>
          <ImageSection>
            <img src={CreateWorkspaceSideImage} alt="" />
          </ImageSection>
        </TopSection>
      </Wrapper>
      {user ? (
        <div>
          <div style={{ textAlign: "center" }}>
            <p>Or</p>
            <h3>Open a Workspace</h3>
          </div>
          <UserOrganisationsListing user={user} organizations={organizations} />
        </div>
      ) : null}
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
`;

const TopSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 132px;
  padding-left: 55px;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column-reverse;
    grid-template-columns: 1fr;
    padding-top: 105px;
    padding-left: 24px;
    padding-right: 24px;
    align-items: center;
  }
`;
const Heading = styled.h1`
  margin: 0;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 48px;
  width: 320px;
  margin-bottom: 14px;
  color: #333333;
  line-height: 56px;

  @media (max-width: 35rem) {
    font-size: 28px;
    line-height: 33.6px;
    width: 191px;
  }
`;

const Text = styled.p`
  margin: 0;
  max-width: 510px;
  font-weight: 400;
  font-family: "Lato", sans-serif;
  font-size: ${18 / 16}rem;
  line-height: 26.91px;
  color: #333333;
  margin-bottom: 29px;
  @media (max-width: 35rem) {
    font-size: 1rem;
    line-height: 23.92px;
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
const CheckboxSide = styled.div`
  display: flex;
  margin-top: 33px;
  align-items: center;
  gap: 9.83px;
  & > input {
    margin: 0;
  }
  & > p {
    margin: 0;
    font-size: ${14 / 16}rem;
    color: #333333;
    font-weight: 400;
    font-family: "Lato", sans-serif;
  }
`;
const FadedText = styled.p`
  color: hsla(0, 0%, 20%, 0.51);
  font-weight: 500;
  font-family: "Lato", sans-serif;
  font-size: ${13 / 16}rem;
  max-width: 325px;
  line-height: 18.78px;
  margin-top: 9px;
`;

const ImageSection = styled.div`
  @media (max-width: 35rem) {
    margin-bottom: 41px;
    & > img {
      width: 100%;
    }
  }
`;
const TextSection = styled.div``;
