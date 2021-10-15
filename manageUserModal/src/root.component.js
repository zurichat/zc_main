import AddInputBox from "./AddInputBox"
import AddModal from "./AddModal"
import RemoveModal from "./RemoveModal"

export default function Root(props) {
  switch (props.parcelConfig.type.toLowerCase()) {
    case "inputbox":
      return <AddInputBox config={props.parcelConfig} />
    case "addmodal":
      return <AddModal config={props.parcelConfig} />
    case "removemodal":
      return <RemoveModal config={props.parcelConfig} />
    default:
      return <AddModal config={props.parcelConfig} />
  }
}

// import Parcel from "single-spa-react/parcel"
// import { AddUserModal } from "@zuri/manage-user-modal"
// <Parcel
//   config={AddUserModal}
//   wrapWith="div"
//   parcelConfig={parcelConfig}
// />
