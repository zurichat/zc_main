import { useState, useContext } from "react";
import { TopbarContext } from "../context/Topbar";
import { connect } from "react-redux";
import zurichatlogo from "../component-assets/zurilogo.svg";
import styled from "styled-components";
import { BaseInput } from ".";
import userAvatar from "../component-assets/user.svg";
// import TopbarModal from '../components/TopbarModal.js'

const TopNavBar = ({ userProfile: { last_name, first_name } }) => {
  const state = useContext(TopbarContext);
  const { openModal } = state;
  const [search, setSearch] = useState("");

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
        border={"#99999933"}
      />
      <div>
        <img
          src={userAvatar}
          onClick={openModal}
          role="button"
          alt="user profile avatar"
        />
      </div>
      {/* <TopbarModal /> */}
    </TopNavBarBase>
  );
};

const mapStateToProps = state => ({
  userProfile: state
});

export default connect(mapStateToProps)(TopNavBar);

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
`;

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
`;
