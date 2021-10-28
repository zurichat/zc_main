import React from "react"
import SingleWorkspace from "./singleWorkspace"
import styles from "../style/workspace.module.css"
import { useWorkspaceContext } from "./WorkspaceContext"
import { getUser } from "../../settings/Utils/Common"

const WorkspaceCard = () => {
  // const { organizations, user, error } = useWorkspaceContext()

  // const user = sessionStorage.getItem('user');
  const user = getUser()
  const organizations = JSON.parse(sessionStorage.getItem("organisations"))
  // console.log(organizations)
  // console.log(user)
  return (
    <>
      {organizations && (
        <section className={`${styles.workspace_card}`}>
          <header
            className={`${styles.card_header}`}
            style={{ borderBottom: !organizations && "none" }}
          >
            <h4 className={`${styles.card_title}`}>
              {!user.email
                ? "Please login to view your workspace"
                : !organizations
                ? "Loading"
                : !organizations.length
                ? "No workspace found or session expired"
                : `Workspaces for ${user.email}`}
            </h4>
          </header>
          <div className={`${styles.singleworkspace_wrapper}`}>
            {organizations &&
              organizations.map((org, id) => {
                return (
                  <SingleWorkspace
                    key={org.id}
                    id={org.id}
                    icon={org.logo_url}
                    workspace_name={org.name}
                    member_imgs={org.imgs}
                    member_number={org.no_of_members}
                    selected={org.selected}
                  />
                )
              })}
          </div>
        </section>
      )}
    </>
  )
}

export default WorkspaceCard
