import { useContext } from 'react'
import { TopbarContext } from './context/Topbar'
import { connect } from 'react-redux'
import zurichatlogo from './assets/images/Logo.svg'
import { useState } from 'react'
import styled from 'styled-components'
import { BaseInput } from './TopBarIndex'
import userAvatar from './assets/images/user.svg'
import TopbarModal from './components/TopbarModal'
import UserForm from '../../control/src/pages/ReportFeature/components/Form'


const TopNavBar = ({ userProfile: { last_name, first_name } }) => {
  const state = useContext(TopbarContext)
  const { openModal } = state
  const [search, setSearch] = useState('')

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
          src={userAvatar}
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

// const LogoName = styled.span`
//   font-family: Lato;
//   font-size: 20px;
//   font-style: normal;
//   font-weight: 700;
//   line-height: 27px;
//   letter-spacing: 0px;
//   padding: 0.5rem;
//   text-align: center;
//   vertical-align: middle;
// `
