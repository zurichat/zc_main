import React from 'react'
import styles from '../style/workspace.module.css'
import { useWorkspaceContext } from './WorkspaceContext'
import HNG_icon from '../assets/HNG-icon.svg'
import member1 from '../assets/member_image1.png'
import member2 from '../assets/member_image2.png'
import member3 from '../assets/member_image3.png'
import member4 from '../assets/member_image4.png'
import member5 from '../assets/member_image5.png'

const SingleWorkspace = ({
  id,
  icon,
  workspace_name,
  member_imgs = [member1, member2, member3, member4, member5],
  member_number,
  selected
}) => {
  const { toggleSelected } = useWorkspaceContext()

  return (
    <section className={`${styles.single_workspace}`}>
      <div className={`${styles.single_workspace_inputgroup}`}>
        <input
          type="checkbox"
          name={workspace_name}
          defaultChecked={selected}
          className={`${styles.workspace_input}`}
          onChange={() => toggleSelected(id)}
        />
      </div>
      <div className={`${styles.workspace_image}`}>
        <img src={icon || HNG_icon} alt={workspace_name} />
      </div>
      <div className={`${styles.workspace_info}`}>
        <h5>{workspace_name}</h5>
        <section className={`${styles.workspace_details}`}>
          <div className={`${styles.members_photos}`}>
            {member_imgs.map((img, index) => {
              return (
                <img
                  className={`${styles.member_img}`}
                  src={img}
                  key={index}
                  alt="Workspace members"
                />
              )
            })}
          </div>
          <p>{member_number} members</p>
        </section>
      </div>
    </section>
  )
}

export default SingleWorkspace
