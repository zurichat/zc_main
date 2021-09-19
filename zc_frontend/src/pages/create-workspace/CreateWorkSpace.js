import axios from "axios";
import { useEffect } from "react";
import styled from "styled-components";
import RightArrow from './assets/right-arrow.png';
import Oval from './assets/Oval.svg';
import HngLogo from './assets/hng.png';
// import Link from './assets/link.svg';
import ZuriLogo from './assets/zuri.png';
import Active from './assets/active.svg';
import Pic from './assets/pic.png';
import Header from '../../components/externalPagesComponents/Header';
import { useHistory,useRouteMatch,Link,Route } from 'react-router-dom';



const CreateWorkspace = () => {
    const {path,url} = useRouteMatch();
    console.log(path,url);
useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    console.log(user)
    const {email,id,token} = user;
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    axios.get(`https://api.zuri.chat/users/${email}/organizations`,config)
    .then(res => console.log(res));
})
    return(
        <Wrapper>
            <Header />
            <TopSection>
            <TextSection>
            <Heading>
                Create a new workspace
            </Heading>
            <Text>
            Slack gives your team a home — a place where they can talk and work together. 
            To create a new workspace, click the button below
            </Text>
            <Link to={`${url}/step1`}>
            <Button >
                Create a new workspace
                <img src={Active} alt=""/>
            </Button>
            </Link>
        
            <CheckboxSide>
                <input type="checkbox" />
                <p>It's okay to receive emails from Zuri Chat</p>
            </CheckboxSide>
            <FadedText>
            By continuing, you’re agreeing to our Customer Terms of 
            Service, Privacy Policy, and Cookie Policy.
            </FadedText>
            </TextSection>
            <ImageSection>
                <img src={Pic} alt="" />
            </ImageSection>
            </TopSection>
            <BottomSection>
                <Or>Or</Or>
                <Header2>Open a workspace</Header2>
                <SelectWorkSpace>
                    <p style={{paddingLeft:"10px"}}>Workspaces for <strong style={{fontWeight:"700"}}>adimchisylvester2@gmail.com</strong></p>
                    <Hng>
                    <img src={HngLogo} alt=""/>
                    <Organization>
                        <Logo_Members>
                    <OrganizationName>HNGI8</OrganizationName>
                    <Members>1464 members</Members>
                    </Logo_Members>
                    </Organization>
                    <Arrow><img src={RightArrow}/></Arrow>
                </Hng>
                <Hng>
                    <img src={ZuriLogo}/>
                    <Organization>
                        <Logo_Members>
                    <OrganizationName>Zuri X I4G Training </OrganizationName>
                    <Members>21484 members</Members>
                    </Logo_Members>
                        
                    </Organization>
                    <Arrow><img src={RightArrow}/></Arrow>
                </Hng>
                </SelectWorkSpace>
                <TryDifferentWrapper>
                    <TextBottom>Not seeing your workspace?</TextBottom>
                    <SecondText>Try a different email</SecondText>
                </TryDifferentWrapper>
                <Footer>
                    <FooterLink>Privacy</FooterLink>
                    <FooterLink>Terms</FooterLink>
                    <FooterLink>Help Centre</FooterLink>
                    <FooterLink>Contac Us</FooterLink>
                </Footer>
            </BottomSection>
        </Wrapper>
        
    )
}

const Wrapper = styled.div`

`


const TopSection = styled.section`
display: grid;
grid-template-columns:1fr 1fr;
padding-top:175px;
padding-left:172px;

@media (max-width:35rem) {
    display:flex;
    flex-direction: column-reverse;
    grid-template-columns: 1fr;
    padding-top:105px;
    padding-left:24px;
    padding-right: 24px;
}
`;
const Heading = styled.h1`
margin: 0;
font-family:'Lato', sans-serif;
font-weight: 700;
font-size: 48px;
width: 320px;
margin-bottom: 14px;
color: #333333;
`

const Text = styled.p`
margin: 0;
max-width: 510px;
font-weight: 400;
font-family: "Lato",sans-serif;
font-size: ${18 / 16}rem;
line-height: 26.91px;
color: #333333;
margin-bottom:29px;
`
export const Button = styled.button`
display: flex;
align-items: center;
gap: 13px;
border: none;
padding: 16px 24px;
background: #00B87C;
font-weight: 600;
color: white;
font-size: ${18 / 16}rem;
font-family: "Lato",sans-serif;
border-radius: 3px;
transition:filter 600ms;
cursor:pointer;
&:hover {
    filter: brightness(110%);
    transition:filter 250ms;
}
& > img {
    margin-top: 3px;
}
@media (max-width:35rem){
    font-size: 1rem;
}
`
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
    font-size: ${14/16}rem;
    color: #333333;
    font-weight: 400;
    font-family: "Lato",sans-serif;
}
`
const FadedText = styled.p`
color: hsla(0, 0%, 20%, 0.51);
font-weight: 500;
font-family: "Lato",sans-serif;
font-size: ${13 / 16}rem;
max-width: 325px;
line-height: 18.78px;
margin-top:9px;
`
const BottomSection = styled.section`
padding-top: 133px;
display:flex;
flex-direction:column;
align-items: center;
@media (max-width:35rem){
    padding-top:101px;
    padding-left:24px;
    padding-right: 24px;
}

`
const Or = styled.span`
font-weight: 600;
font-family: "Lato",sans-serif;
font-size: ${18/16}rem;
color: #333333;
margin-bottom: 14px;
`
const Header2 = styled.h2`
color: #333333;
font-family: "Lato",sans-serif;
font-weight: 700;
font-size: ${24/16}rem;
margin-bottom: 42px;
`;
const SelectWorkSpace = styled.div`
width: 538px;
border: 1px solid hsla(0,0%,20%,0.51);
padding-top: 16px;
margin-bottom: 28px;

& > p {
   font-size :${18/16}rem;
   font-weight: 400;
   color: #333333;
   font-family:"Lato",sans-serif;
   margin-bottom: 16px;
   padding-right: 10px;
   text-align:center;
}
@media (max-width:35rem){
    width:100%;
}
` 
const Hng = styled.div`
border-top: 1px solid hsla(0,0%,20%,0.51);
padding-top: 21px;
padding-bottom: 21px;
padding-left: 10px;
padding-right: 36px;
display: flex;
gap: 19px;
`
const OrganizationName = styled.span`
font-weight: 600;
font-size:${20/16}rem;
font-family: "Lato",sans-serif;
color: #333333;
`
const Members = styled(OrganizationName)`
font-size:1rem;
font-weight: 400;
`
const Organization = styled.div`
display:flex;
flex-direction:row;

`
const Logo_Members = styled.div`
display: flex;
flex-direction: column;
`
const TryDifferentWrapper = styled.div`
display:flex;
align-items:baseline;
gap:5px;
padding-bottom: 96.5px;
@media (max-width:35rem) {
    flex-direction: column;
    align-items:center;
}
`
const TextBottom = styled.p`
font-weight:400;
font-size:${18 / 16}rem;
font-family: "Lato" sans-serif;
`
const SecondText = styled(TextBottom)`
color:#00B87C;
font-weight:600;
`
export const Footer = styled.footer`
margin:0;
display:flex;
gap:28px;
padding-bottom:35px;
`
export const FooterLink = styled.a`
text-decoration:none;
font-weight:700;
color:#6a6a6a;
font-family:"Lato",sans-serif;
@media (max-width:35rem){
    font-size:${14/16}rem;
}
`
const Arrow = styled.div`
margin-left:auto;
& > img {
display:block; 
}
`
const ImageSection = styled.div`
@media(max-width:35rem) {
    margin-bottom:41px;
    & > img {
        width:100%;
    }
}
`
const TextSection = styled.div``
export default CreateWorkspace;