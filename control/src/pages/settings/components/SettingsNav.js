import React, { useState, useEffect } from 'react'
import styled from "styled-components"
 import defaultAvatar from '../assets/avatar_vct.svg'
import styles from '../styles/settingsNav.module.css'
import { BiMenuAltRight } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import zuri from '../assets/zuri.svg'
import navImage from '../assets/navImage.png';
import { authAxios } from '../../../../../topbar/src/utils/Api'

const SettingsNav = () => {
  const [menu, setMenu] = useState(false)
  const [user, setUser] = useState('')
  // const [organizations, setOrganizations] = useState([])
  // const state = useContext(TopbarContext)
  // const [active] = state.presence
  
  useEffect(() => {
    const currentOrganization = localStorage.getItem('currentWorkspace');
    const userdef = JSON.parse(sessionStorage.getItem('user'));

    authAxios.get(`organizations/${currentOrganization}/members/`)
      .then((res) => {
        setUser(res.data.data.find(member => member.email === userdef.email));
        return res.data.data.find(member => member.email === userdef.email);
      })
  }, [])

  return (
    <div className={styles.containers}>
      <div className={styles.accountbar}> 
        <Link to="/home">
          <div className={styles.brand}>
            <img src={zuri} alt="Zuri logo" />
          </div>
        </Link>

        <div className={styles.menubars} onClick={() => setMenu(!menu)}>
          <BiMenuAltRight />
        </div>

        <div className={styles.searchBar}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search here"
          />
        </div>
      </div>

      
        <ProfileImageContainer
        className="d-flex justify-content-end pe-3"
        style={{ width: "20%" }}
      >
        <ProfileImg
          src={user.image_url !== "" ?  user.image_url : defaultAvatar}
          // className="avatar-img"
          alt="user profile avatar"
        />
      </ProfileImageContainer>
      </div>
  )
}

export default SettingsNav

const ProfileImageContainer = styled.div`
  position: relative;
  `

const ProfileImg = styled.img`
  border-radius: 4px;
  width: 32px;
  height: 32px;
  object-fit: cover;

  @media (max-width: 1024px) {
    height: 30px;
  }
  @media (max-width: 425px) {
    // height: 22.4px;
  }
`