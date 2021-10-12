import AddInputBox from "./AddInputBox"
import AddModal from "./AddModal"

export default function Root(props) {
  switch (props.parcelConfig.type.toLowerCase()) {
    case "inputbox":
      return <AddInputBox config={props.parcelConfig} />
    case "modal":
    default:
      return <AddModal config={props.parcelConfig} />
  }
}

// import Parcel from "single-spa-react/parcel"
// import { AddUserModal } from "@zuri/manage-user-modal"
// const parcelConfig = {
//   title: "hi",
//   type: "inputbox",
//   showModal: true,
//   userList: [
//     { value: "chocolate", label: "Chocolate" },
//     { value: "strawberry", label: "Strawberry" },
//     { value: "vanilla", label: "Vanilla" }
//   ],
//   addMembersEvent: (users)=>{},
// }
// <Parcel
//   config={AddUserModal}
//   wrapWith="div"
//   parcelConfig={parcelConfig}
// />
