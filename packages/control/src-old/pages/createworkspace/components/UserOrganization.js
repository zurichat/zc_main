import styled from "styled-components";
import RightArrow from "../assets/right-arrow.png";
import ZuriLogo from "../assets/zuri.png";
const UserOrganization = ({ organizations, user }) => {
  return (
    <BottomSection>
      <SelectWorkSpace>
        <p style={{ paddingLeft: "10px" }}>
          Workspaces for{" "}
          <strong style={{ fontWeight: "700" }}>{user.email}</strong>
        </p>

        {organizations.map(organization => (
          <OrganizationWrapper key={organization.id}>
            <Image src={ZuriLogo} alt="" />
            <Organization>
              <Logo_Members>
                <OrganizationName>{organization.name}</OrganizationName>
                <Members>
                  {organization.no_of_members === 1
                    ? organization.no_of_members + " member"
                    : organization.no_of_members + " members"}
                </Members>
              </Logo_Members>
            </Organization>
            <Arrow href="https://zuri.chat/home">
              <img src={RightArrow} />
            </Arrow>
          </OrganizationWrapper>
        ))}
      </SelectWorkSpace>
      <TryDifferentWrapper>
        <TextBottom>Not seeing your workspace?</TextBottom>
        <SecondText>Try a different email</SecondText>
      </TryDifferentWrapper>

      <Footer>
        <FooterLink>Privacy</FooterLink>
        <FooterLink>Terms</FooterLink>
        <FooterLink>Help Centre</FooterLink>
        <FooterLink>Contact Us</FooterLink>
      </Footer>
    </BottomSection>
  );
};

const BottomSection = styled.section`
  padding-top: 133px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 35rem) {
    padding-top: 101px;
    padding-left: 24px;
    padding-right: 24px;
  }
`;
const Or = styled.span`
  font-weight: 600;
  font-family: "Lato", sans-serif;
  font-size: ${18 / 16}rem;
  color: #333333;
  margin-bottom: 14px;
`;
const Header2 = styled.h2`
  color: #333333;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: ${24 / 16}rem;
  margin-bottom: 42px;
`;
const SelectWorkSpace = styled.ul`
  width: 538px;
  border: 1px solid hsla(0, 0%, 20%, 0.51);
  padding-top: 16px;
  margin-bottom: 28px;

  & > p {
    font-size: ${18 / 16}rem;
    font-weight: 400;
    color: #333333;
    font-family: "Lato", sans-serif;
    margin-bottom: 16px;
    padding-right: 10px;
    text-align: center;
  }
  @media (max-width: 35rem) {
    width: 100%;
  }
`;
const Image = styled.img`
  width: 48px;
  height: 48px;
  object-fit: cover;
`;
const OrganizationWrapper = styled.li`
  border-top: 1px solid hsla(0, 0%, 20%, 0.51);
  padding-top: 21px;
  padding-bottom: 21px;
  padding-left: 10px;
  padding-right: 36px;
  display: flex;
  gap: 19px;
`;
const OrganizationName = styled.span`
  font-weight: 600;
  font-size: ${20 / 16}rem;
  font-family: "Lato", sans-serif;
  color: #333333;
`;
const Members = styled(OrganizationName)`
  font-size: 1rem;
  font-weight: 400;
`;
const Organization = styled.div`
  display: flex;
  flex-direction: row;
`;
const Logo_Members = styled.div`
  display: flex;
  flex-direction: column;
`;
const TryDifferentWrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 5px;
  padding-bottom: 96.5px;
  @media (max-width: 35rem) {
    flex-direction: column;
    align-items: center;
  }
`;
const TextBottom = styled.p`
  font-weight: 400;
  font-size: ${18 / 16}rem;
  font-family: "Lato" sans-serif;
`;
const SecondText = styled(TextBottom)`
  color: #00b87c;
  font-weight: 600;
`;

export const Footer = styled.footer`
  margin: 0;
  display: flex;
  gap: 28px;
  padding-bottom: 35px;
`;
export const FooterLink = styled.a`
  text-decoration: none;
  font-weight: 700;
  color: #6a6a6a;
  font-family: "Lato", sans-serif;
  &:hover {
    color: #b0b0b0;
    cursor: pointer;
  }
  @media (max-width: 35rem) {
    font-size: ${14 / 16}rem;
  }
`;
const Arrow = styled.a`
  margin-left: auto;
  & > img {
    display: block;
  }
`;

export default UserOrganization;
