import React from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BASE_API_URL } from "@zuri/utilities";
import { useTranslation } from "react-i18next";

import { UserOrganisationsListing } from "../../../components";

import ContinueArrow from "./assets/ContinueArrow.svg";

export default function Index() {
  const user = JSON.parse(sessionStorage.getItem("user")) || null;
  const [organizations, setOrganizations] = React.useState([]);
  const [isActive, setIsactive] = React.useState(false);

  const { t } = useTranslation();

  async function fetchData() {
    const result = await axios.get(
      `${BASE_API_URL}/users/${user.email}/organizations`,
      { headers: { Authorization: `Bearer ${user.token}` } }
    );
    const { data } = result.data;
    setOrganizations(data);
    setIsactive(!isActive);
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
            user === true ? { paddingBottom: "0" } : { paddingBottom: "25px" }
          }
        >
          <TextSection>
            <Heading>{t("create_workspace_one")}</Heading>
            <Text>{t("create_workspace_two")}</Text>
            <Link
              to={{
                pathname: `${isActive ? `/create-workspace/step-1` : "#"}`,
                state: organizations
              }}
              data-cy="create_new_workspace_action_element"
            >
              <Button style={{ minWidth: "259px" }} disabled={!isActive}>
                {t("create_workspace_six")}
                <img src={ContinueArrow} alt="" />
              </Button>
            </Link>

            <CheckboxSide>
              <input
                type="checkbox"
                defaultChecked={true}
                data-cy="create_workspace_subscribe_to_newsletter_checkbox"
              />
              <p>{t("create_workspace_three")}</p>
            </CheckboxSide>
            <FadedText>{t("create_workspace_four")}</FadedText>
          </TextSection>
        </TopSection>
      </Wrapper>
      {user ? (
        <div>
          <div style={{ textAlign: "center" }}>
            <p>{t("create_workspace_seven")}</p>
            <h3 style={{ textAlign: "center" }}>
              {t("create_workspace_five")}
            </h3>
          </div>
          <UserOrganisationsListing user={user} organizations={organizations} />
        </div>
      ) : null}
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  padding: 5rem 0 0 0;
`;

const TopSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  place-items: center;
  padding-top: 40px;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column-reverse;
    grid-template-columns: 1fr;
    padding-top: 55px;
    padding-left: 24px;
    padding-right: 24px;
    align-items: center;
  }
`;
const Heading = styled.h1`
  margin: 0;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 56px;
  margin-bottom: 14px;
  color: #333333;
  line-height: 56px;
  text-align: center;

  @media (max-width: 35rem) {
    font-size: 35px;
    line-height: 33.6px;
    width: 250px;
  }
`;

const Text = styled.p`
  margin: 0;
  max-width: 650px;
  font-weight: 400;
  font-family: "Lato", sans-serif;
  font-size: ${18 / 16}rem;
  line-height: 26.91px;
  color: #333333;
  margin-bottom: 29px;
  text-align: center;
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
  text-align: center;
`;

const ImageSection = styled.div`
  @media (max-width: 35rem) {
    margin-bottom: 41px;
    & > img {
      width: 100%;
    }
  }
`;
const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
