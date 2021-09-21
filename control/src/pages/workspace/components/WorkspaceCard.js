import React from 'react'
import SingleWorkspace from './singleWorkspace'
import styles from '../style/workspace.module.css'
import { useWorkspaceContext } from './WorkspaceContext'

const WorkspaceCard = () => {
  const { organizations, user } = useWorkspaceContext()

  return (
    <section className={`${styles.workspace_card}`}>
      <header className={`${styles.card_header}`}>
        <h4 className={`${styles.card_title}`}>
          {!organizations.length ? 'No user is logged in' : `Workspaces for ${user.email}`}
        </h4>
      </header>
      <div className={`${styles.singleworkspace_wrapper}`}>
        {organizations.map(org => {
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
  )
}

export default WorkspaceCard
