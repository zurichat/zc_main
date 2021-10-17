import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import CloseIcon from "@material-ui/icons/Close";
import SearchIcon from "@material-ui/icons/Search";
import Loader from "react-loader-spinner";


function InviteModal({setShowModal, userInfo, organizationName, setPendingInvite}) {
    const [email, setEmail] = useState("")
    const [userInfos, setUserInfos] = useState("")
    const [loading, setLoading] = useState(false)
    const submitInvite =  async (e) => {
        e.preventDefault()
        setLoading(true)
        const {token, currentWorkspace} = userInfo;
        const respond = await axios.post(`https://api.zuri.chat/organizations/${userInfo?.currentWorkspace}/send-invite`, 
            {
                emails: [email]
            },
            {
                headers: {
                    Authorization: `Bearer ${userInfo?.token}`
                } 
            }
        )
            setPendingInvite(arr=>[...arr, email] )
            setLoading(false)
            alert(`Invite has been sent to ${email} to join ${organizationName}`)
    }

    
    const handleChange = (e) => {
        setEmail(e.target.value)
    }

  return (
        <BackDrop>
        <NoticeContainer >
        <AddUserHeader>
            <h2>Invite people {organizationName}</h2>
            <span>
            <CloseIcon  onClick={()=> setShowModal(false)} />
            </span>
        </AddUserHeader> 

        <AddUserForm>
        <ToFromBox>
            <To> To:</To>
            <From>Add from </From>
        </ToFromBox>
            <SearchUser>
            <input type="text" 
            placeholder="name@gmail.com"
            name={email}
            onChange={handleChange}
            value={email}
            />
        
            </SearchUser>
            <CopyLinkBox> 
                <CopyLink> 
                    <InviteLink>Copy invite link -</InviteLink>
                    <EditLink> Edit link setting</EditLink>
                </CopyLink>
                <ToFromBox> 
                    <SendButton loading={loading} onClick={submitInvite} className="button">  Send { loading ? <Loader type="Oval" color="#07b87c" height={20} width={20}/> : ""} </SendButton>
                
                </ToFromBox>
            </CopyLinkBox>
        </AddUserForm> 
        </NoticeContainer>
    </BackDrop>
  );
}

export default InviteModal;

const BackDrop = styled.div`
  display: block;
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

const AddUserContainer = styled.div`
  background-color: #ffffff;
  margin: 20% auto;
  padding: 1em;
  //border: 1px solid #888;
  //width: 30em;
  position: relative;
  z-index: 999;
  height: 14em;
  border-radius: 10px;
  border: 2px solid #fff;
  @media (max-width: ${500}px) {
    width: 90%;
    margin: 50% auto;
  }
  &.notice{
    margin: 10% auto;
  }
`;

const NoticeContainer = styled(AddUserContainer)`
  height: unset;
  width: 50%;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const AddUserHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1em;
  h2 {
    font-size: 20px;
    font-weight: 700;
  }
  span {
    :hover {
      cursor: pointer;
      opacity: 0.5;
    }
  }
`;

const SearchUser = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  input {
    border: 1px solid rgba(0, 0, 0, 0.1);
    width: 100%;
    padding: .5em;
    height: 5em;
    font-size: 15px;
    border-radius: 4px;
    border: 1px solid rgba(29,28,29,.3);
    ::placeholder {
      opacity: 0.8;
      //font-weight: 400;
    }
    &:focus{
    outline: none;
    box-shadow: 0 0 0 1px #1264a3, 0 0 0 5px rgb(29 155 209 / 30%);
    border-radius: 4px;
    border-color: transparent;
    }
  }
  span {
    position: absolute;
    left: 0;
    padding-left: 0.5em;
    margin-top: 0.5em;
    color: #00000059;
  }
`;

const AddUserForm = styled.form`
  padding-top: 1em;
  button {
    color: white;
    background-color: #00bb7c;
    padding: 1em;
    font-size: 16px;
    line-height: 24px;
    border-radius: 2px;
    margin-top: 1.5em;
    width: 10em;
    outline: none;
    border: 0;
    float: right;
    @media (max-width: ${500}px) {
      //width: 100%;
    }
  }
`;

const ToFromBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const To = styled.p`
    font-size: 15px;
    margin-bottom: .5em;
`;
const From = styled.p`
    font-size: 15px;
    color: #868686;
    margin-bottom: .5em;
`;

const CopyLinkBox = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top : 2em;
`;

const CopyLink = styled.div``;

const SendButton = styled.button`
        color: black !important;
        background-color: #bdbdbda6 !important;
        padding: .3em .5em!important; 
        font-size: 15px ;
        /* line-height: 24px; */
        border-radius: 2px !important;
        margin-top: 0em !important; 
        width: 5em !important;
        outline: none;
        display: ${({loading})=> (loading?"flex !important" : "block")};
        justify-content: space-between !important;
        &:hover{
            opacity: .6;
            cursor: pointer;
        }
`;

const InviteLink = styled.span`
    color: #1264a3;

    &:hover{
        opacity: .6;
        cursor: pointer;
    }
`;
const EditLink = styled.span`
    color: #868686;
        &:hover{
        opacity: .6;
        cursor: pointer;
        border-bottom: 1px solid #868686;
    }
`;

const ButtonBox = styled.span``
const LoadBox = styled(Loader)`
    position: absolute;
`;
