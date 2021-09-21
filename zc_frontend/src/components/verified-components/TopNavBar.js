import { useContext } from 'react'
import { TopbarContext } from '../../context/Topbar'
import { connect } from 'react-redux'
import zurichatlogo from './assets/zurichatlogo.svg'
import { useState } from 'react'
import styled from 'styled-components'
import { BaseInput } from '.'
import userAvatar from './assets/user.svg'
import TopbarModal from '../TopbarModal'
import { ProfileContext } from '../../context/ProfileModal'

const TopNavBar = ({ userProfile: { last_name, first_name } }) => {
  const state = useContext(TopbarContext)
  const { userProfileImage } = useContext(ProfileContext)
  const { openModal } = state
  const [search, setSearch] = useState('')

  return (
    <TopNavBarBase>
      <div>
        <img src={zurichatlogo} alt="zuri chat logo" />
        <LogoName>ZURI</LogoName>
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
      <div>
        <img
          style={{ height: "40px", width: "40px", borderRadius: '5px' }}
          src={userProfileImage ? userProfileImage : userAvatar }
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
  background-color: var(--bg-2);
  padding: 1rem;
  margin: auto;
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 2;
  width: 100%;
  margin-bottom: 3rem !important;
`

const LogoName = styled.span`
  font-family: Lato;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0px;
  padding: 0.5rem;
  text-align: center;
  vertical-align: middle;
`
