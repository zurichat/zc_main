import { Link } from " react-router-dom"
import AdminHeader from "./AdminHeader"
import AdminSidebar from "./AdminSidebar"

import styles from "../styles/InvitationPage.module.css"

const InvitationPage = () => {
  return (
    <>
      <AdminHeader />
      <AdminSidebar />
      <div>Invite.js</div>
    </>
  )
}

export default InvitationPage
