import styled from "styled-components";
import { TabList, Tabs } from "@reach/tabs";
import { DialogOverlay, DialogContent } from "@reach/dialog";

export const OverallWrapper = styled.div`
  border: 1px solid rgba(87, 87, 87, 0.6);
  border-bottom: none;
  border-radius: 5px;
  width: 100%;
`;
export const EachSegment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 1px solid rgba(87, 87, 87, 0.6);
`;
export const Label = styled.label`
  margin-left: 20px;
  padding-top: 10px;
`;
export const Input = styled.input`
  outline: none;
  border: none;
  padding: 10px 0 20px 20px;
  margin-top: 6px;
  // background-color:#F9F9F9;
  ::placeholder {
    font-size: 16px;
  }
`;
export const Typography = styled.p`
  color: red;
  padding: 10px 5px 5px 20px;
  font-weight: 600;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 0;
`;
export const FileWrapper = styled.div`
  border: 1px solid #8b8b8b;
  margin-top: 20px;
  padding: 10px;
  align-items: center;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const FileContent = styled.h4`
  font-weight: 500;
  font-size: 16px;
  line-height: normal;
  color: #8b8b8b;
  padding-bottom: 12px;
`;
export const MembersInput = styled.input`
  outline: none;
  width: 70%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #8b8b8b;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 30px;
`;
export const ModalTopic = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
export const Button = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
`;
export const ChannelName = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  flex-wrap: wrap;
`;
export const Select = styled.select`
  padding: 5px 35px 5px 5px;
  height: 34px;
  outline: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  color: #555;
  font-size: inherit;
  margin: 0;
  overflow: hidden;
  padding-top: 2px;
  padding-bottom: 2px;
  @media (max-width: 250px) {
    width: 100%;
  }
`;
export const TabLists = styled(TabList)`
  margin: 20px 0;
  background-color: white;
  color: #8b8b8b;
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  font-weight: 600;
  ::active {
    color: black;
  }
  ::focus {
    color: black;
  }
`;
export const AddPeopleIcons = styled.div`
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: 500;
`;
export const UserIcon = styled.button`
  border: none;
  background-color: #e1fdf4;
  cursor: pointer;
  color: #00b87c;
  border-radius: 10px;
  padding: 5px 10px;
  margin-right: 10px;
`;
export const DialogOverlays = styled(DialogOverlay)`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  z-index: 1000;
`;
export const DialogContents = styled(DialogContent)`
  width: 60%;
  height: 90%;
  overflow-y: auto;
  // ::-webkit-scrollbar {
  //   width: 10px;
  //   height:5%;
  // }
  // ::-webkit-scrollbar-track {
  //   background: #f1f1f1;
  // }
  // ::-webkit-scrollbar-thumb {
  //   background: #00B87C;
  //   border-radius:10px;
  //   height:5px;
  // }
`;
export const Description = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const EditLabel = styled.h5`
  color: blue;
  margin-right: 10px;
  cursor: pointer;
  font-size: 15px;
  margin-top: 5px;
`;
export const EditContent = styled.h4`
  max-width: 80%;
  margin-top: -5px;
  font-size: 17px;
  line-height: normal;
  color: #8b8b8b;
  font-weight: 450;
`;
export const Selection = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
export const ChannelWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #8b8b8b;
  margin-top: 20px;
  padding: 5px 0;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const ChannelContent = styled.h5`
  margin-left: 10px;
  font-size: 16px;
  font-weight: 600;
`;
export const Channels = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  padding: 10px 0;
`;
export const Options = styled.div`
  border: 1px solid #575757;
  padding: 15px;
  width: 90%;
  margin-top: 10px;
  @media (max-width: 350px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const Heading = styled.div`
  display: flex;
  margin-top: 10px;
  font-weight: 500;
  width: 60%;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const Tag = styled.button`
  color: blue;
  background-color: #00b87c7a;
  border: none;
  outline: none;
  border-radius: 5px;
  font-size: 10px;
  padding: 5px;
`;
export const Subheader = styled.h4`
  font-weight: 400;
  font-size: 15px;
  line-height: normal;
  padding: 10px 0;
`;
export const Buttons = styled.button`
  padding: 5px;
  border: 1px solid #8b8b8b;
  border-radius: 5px;
`;
export const Option = styled.option`
  padding: 10px;
  height: 20px;
`;
export const StyledTabs = styled(Tabs)`
  [data-reach-tab] {
    border-bottom: 1px solid #fff;
    border-left-width: 0;
    padding: 0.5em 1.25em;
  }
  [data-reach-tab]:hover {
    color: #00b87c;
    opacity: 0.9;
  }
  [data-reach-tab][data-selected] {
    color: #00b87c;
    border-bottom: 3px solid #00b87c;
  }
`;
export const Segment = styled.div`
  position: relative;
  ::after {
    content: "";
    display: inline-block;
    margin-top: -25px;
    left: 0;
    position: absolute;
    width: 100%;
    height: 2px;
    border-bottom: 1px solid #8b8b8b;
  }
`;
export const DataWrap = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Details = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (max-width: 350px) {
    align-items: center;
    justify-content: center;
  }
`;
export const DetailLabel = styled.div`
  display: flex;
  align-items: flex-start;
  font-weight: 500;
  margin-left: 20px;
  padding-top: 10px;
  @media (max-width: 400px) {
    flex-direction: column;
  }
`;
export const StackLabel = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin-top: 6px;
  @media (max-width: 350px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }
`;
