import { useContext, useEffect } from 'react'

import { authAxios } from './utils/Api.js'
import { TopbarContext } from './context/Topbar'
import { connect } from 'react-redux'
import zurichatlogo from './assets/images/Logo.svg'
import { useState } from 'react'
import styled from 'styled-components'
import { BaseInput } from './TopBarIndex'
import { ProfileContext } from './context/ProfileModal'
import userAvatar from './assets/images/user.svg'
import TopbarModal from './components/TopbarModal'
import UserForm from '../../control/src/pages/ReportFeature/components/Form'

const TopNavBar = ({ userProfile: { last_name, first_name } }) => {
  const { openModal } = useContext(TopbarContext)
  const { setUser, user, setOrgId, setUserProfileImage } =
    useContext(ProfileContext)
  const [organizations, setOrganizations] = useState([])

  const [search, setSearch] = useState('')

  useEffect(() => {
    const userdef = JSON.parse(sessionStorage.getItem('user'))
    async function getOrganizations() {
      await authAxios
        .get(`/users/${userdef.email}/organizations`)
        .then(response => {
          setOrganizations(response.data.data)
          setOrgId(response.data.data[0]?.id)
          authAxios
            .get(`/organizations/${response.data.data[0]?.id}/members`)
            .then(response => {
              setUser(
                response.data.data.find(
                  member => member.email === userdef.email
                )
              )
              return response.data.data.find(
                member => member.email === userdef.email
              )
            })
            .catch(err => {
              console.log(err.response.data)
            })
        })
        .catch(err => {
          console.log(err)
        })
    }

    setUserProfileImage(user.image_url)

    getOrganizations()
  }, [setOrgId, setUser])

  console.log(user)

  return (
    <TopNavBarBase>
      <div>
        <a href="#">
          <img src={zurichatlogo} alt="zuri chat logo" />
        </a>
        {/* <LogoName>ZURI</LogoName> */}
      </div>
      <BaseInput
        value={search}
        onChange={e => setSearch(e.target.value)}
        type="text"
        width={7}
        error
        placeholder="Search here"
        border={'#99999933'}
      />
      <UserForm />
      <div>
        <img
          style={{ height: '30px', width: '30px', borderRadius: '10px' }}
          src={user.image_url ? user.image_url : userAvatar}
          onClick={openModal}
          role="button"
          alt="user profile avatar"
        />
      </div>
      <TopbarModal />
    </TopNavBarBase>
  )
}

const mapStateToProps = state => ({
  userProfile: state
})

export default connect(mapStateToProps)(TopNavBar)

//  TopNavBar

const TopNavBarBase = styled.div`
  padding-inline-start: 1.5rem;
  padding-inline-end: 1.5rem;
  background-color: var(--bg-2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 5;
  width: 100%;
  font-size: 1.5rem;
  // position: fixed;
  // padding: 1rem;
  // margin: auto;
  // margin-bottom: 3rem !important;
`