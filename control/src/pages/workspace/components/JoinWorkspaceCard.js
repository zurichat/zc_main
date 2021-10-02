import React from 'react'
import { Link } from 'react-router-dom'

import styles from '../style/workspace.module.css'
import FemaleSprite from '../assets/jw_female.svg'

const JoinWorkspaceCard = () => {
  return (
    <div className={`${styles.joinworkspace_container}`}>
      <div className={`${styles.sprite_container}`}>
        <img src={FemaleSprite} />
      </div>
      <p>
        Want to work with another group? or Take charge and start your own team
      </p>
      <Link to="/createworkspace">
        <button>Create a workspace</button>
      </Link>
    </div>
  )
}

export default JoinWorkspaceCard
