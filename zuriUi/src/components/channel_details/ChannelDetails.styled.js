import styled from "styled-components"
import { TabList } from "@reach/tabs"
import { DialogOverlay, DialogContent } from "@reach/dialog"

export const OverallWrapper = styled.div`
  border: 1px solid gray;
  border-bottom: none;
  border-radius: 5px;
`
export const EachSegment = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid gray;
`
export const Label = styled.label`
  margin-left: 20px;
  padding-top: 10px;
`
export const Input = styled.input`
  outline: none;
  border: none;
  padding: 10px 0 20px 20px;
  // background-color:#F9F9F9;
`
export const Typography = styled.p`
  color: red;
  padding-left: 10px;
  font-weight: 500;
`
export const FileWrapper = styled.div`
  border: 1px solid gray;
  margin-top: 20px;
`
export const FileContent = styled.h4`
  font-weight: 500;
  margin-left: 15px;
`
export const MembersInput = styled.input`
  outline: none;
  width: 70%;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 30px;
`
export const ModalTopic = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`
export const Button = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
`
export const ChannelName = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
`
export const Select = styled.select`
  padding: 10px;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
`
export const TabLists = styled(TabList)`
  margin: 20px 0;
  background-color: white;
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
`
// export const BorderBottom=styled.div`
//   // padding:-1em;
//   margin:-0.7em;
//   border-bottom:1px solid gray;
// `;
export const AddPeopleIcons = styled.div`
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
`
export const UserIcon = styled.button`
  border: none;
  background-color: #e1fdf4;
  cursor: pointer;
  color: #00b87c;
  border-radius: 10px;
  padding: 2px 4px;
`
export const DialogOverlays = styled(DialogOverlay)`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`
export const DialogContents = styled(DialogContent)`
  width: 60%;
  height: 80%;
  overflow-y: auto;
  // background-color:#F9F9F9;
  &::-webkit-scrollbar {
    width: 5px;
    background-color: gray;
    height: 5px;
  }
`
export const Description = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const EditLabel = styled.h5`
  color: blue;
  margin-right: 10px;
  cursor: pointer;
`
export const EditContent = styled.h4`
  max-width: 70%;
  margin-top: -5px;
  margin-left: 20px;
  color: gray;
`
export const Selection = styled.div`
  display: flex;
  align-items: center;
`
export const ChannelWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid gray;
  margin-top: 20px;
`
export const ChannelContent = styled.h5`
  margin-left: 10px;
`
export const Channels = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`
export const Options = styled.div`
  border: 1px solid #575757;
  padding: 10px;
  width: 80%;
`
export const Heading = styled.div`
  display: flex;
  margin-top: 10px;
  font-weight: 500;
`
export const Tag = styled.button`
  color: blue;
  background-color: #00b87c7a;
  border: none;
  outline: none;
  margin-left: 20px;
  border-radius: 5px;
`
export const Subheader = styled.h4`
  font-weight: 400;
`
export const Buttons = styled.button`
  padding: 5px;
  border: 1px solid gray;
  border-radius: 5px;
`
