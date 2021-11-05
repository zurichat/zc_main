import React from "react";
import styled from "styled-components";
import keyboard from "./../assets/images/keyboard.png";
import gift from "./../assets/images/gift.png";
import cancel from "./../assets/images/cancel.png";
import externalLink from "./../assets/images/externalLink.png";
import bell from "./../assets/images/bell.png";
import groupIcon from "./../assets/images/groupicon.png";
import SearchIcon from "@material-ui/icons/Search";
import AlarmIcon from "./../assets/images/alarm.png";
import smileHand from "./../assets/images/smileHand.png";
import video from "./../assets/images/video.png";

const MiscComponent = ({ icon, word, altIcon }) => {
  return (
    <div>
      <SmileyBox>
        <img src={icon} alt={altIcon} />
      </SmileyBox>
      <p>{word}</p>
    </div>
  );
};

function HelpModal({ setHelpModal }) {
  return (
    <BackDrop>
      <HelpContainer>
        <Head>
          <h3>Help</h3>
          <HeadIcon>
            <img src={keyboard} alt="keyboard" role="button" />
            <img className="middle" src={gift} alt="gift" />
            <img
              src={cancel}
              onClick={() => setHelpModal(false)}
              className="cancel"
              alt="cancel"
            />
          </HeadIcon>
        </Head>
        <Border />

        <SearchForm>
          <SearchUser>
            <input
              type="text"
              placeholder="Search for user in this workspace"
            />
            <span>
              <SearchIcon />
            </span>
          </SearchUser>
        </SearchForm>

        <Recommendation>
          <p>Recommendation articles</p>
          <div>
            <p className="green">Visit help centre</p>
            <img src={externalLink} alt="externalLink" />
          </div>
        </Recommendation>

        <MiscContainer>
          <MiscComponent
            icon={bell}
            word={"Configure your Zuri chat notification"}
            altIcon={"bell"}
          />
          <MiscComponent
            icon={groupIcon}
            word={"Set your Zuri chat and availability"}
            altIcon={"bell"}
          />
          <MiscComponent
            icon={AlarmIcon}
            word={"Set your reminder"}
            altIcon={"alarm"}
          />
          <MiscComponent
            icon={smileHand}
            word={"Use Emoji reactions"}
            altIcon={"smileHand"}
          />
          <MiscComponent
            icon={video}
            word={"Zuri chat video tutorials"}
            altIcon={"video"}
          />
        </MiscContainer>

        <Border />

        <Footer>
          <GreenBox>
            <p>Help requests</p>
            <img src={externalLink} alt="externalLink" />
          </GreenBox>

          <p>Contact us</p>
        </Footer>
      </HelpContainer>
    </BackDrop>
  );
}

export default HelpModal;

const BackDrop = styled.div`
  display: block;
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

const HelpContainer = styled.div`
  margin: 10% auto;
  padding: 1em;
  width: 40%;
  position: relative;
  z-index: 999;
  background-color: white;

  @media (max-width: ${500}px) {
    width: 90%;
  }
`;
const Head = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0.15em;
  margin-bottom: 0.5em;
  h3 {
    font-size: 20px;
    line-height: 30.77px;
  }
`;

const HeadIcon = styled.div`
  width: 3.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > img {
    height: 0.6em;

    &.middle {
      height: 0.9em;
      position: relative;
      top: -0.2em;
    }

    &.cancel {
      :hover {
        cursor: pointer;
        opacity: 0.5;
      }
    }
    &:hover {
      cursor: pointer;
      opacity: 0.5;
    }
  }
`;

const Border = styled.div`
  width: 100%;
  height: 1px;
  background: #bebebe;
`;
const SearchForm = styled.form`
  margin: 1em 0 1.2em 0;
`;

const SearchUser = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  > input {
    border: 1px solid #bebebe;
    width: 100%;
    padding: 0.5em 2em 0.5em 2.5em;
    font-size: 13px;
    margin: 0 0.5em;
    border-radius: 5px;

    @media (max-width: ${500}px) {
      padding: 0.5em 2em 0.5em 1em;
    }

    ::placeholder {
      color: #bebebe;
      font-size: 13px;
      font-weight: normal;
      color: #999999;
      line-height: 15px;
    }
  }

  span {
    position: absolute;
    top: -0.07em;
    padding-left: 0.7em;
    color: #999999;
  }
`;

const Recommendation = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1.5em;

  p {
    font-size: 15px;
    line-height: 20px;
    color: #3a3a3a;
    font-weight: 400;
    @media (max-width: ${500}px) {
      font-size: 13px;
    }

    &.green {
      color: #18d24c;
      width: 7.5em;
    }
  }

  > div {
    display: flex;
    align-items: center;
    > img {
      height: 0.5em;
    }
  }
`;
const GreenBox = styled.div`
  display: flex;
  align-items: center;
  > p {
    color: #18d24c;
    width: 7.5em;
    font-size: 13px;
    @media (max-width: ${500}px) {
      font-size: 11px;
    }
  }
  > img {
    height: 0.5em;
  }
`;

const MiscContainer = styled.div`
  margin: 0em 0 3em 0;
  > div {
    width: 100%;
    //height: 4em;
    border: 1px solid #bebebe;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 0.5em;
    margin-bottom: 0.9em;

    > p {
      font-size: 13px;
      margin-left: 1em;

      @media (max-width: ${500}px) {
        font-size: 11px;
      }
    }
    @media (max-width: ${500}px) {
      height: unset;
    }
  }
  @media (max-width: ${500}px) {
    margin: 0em 0 2em 0;
  }
`;

const SmileyBox = styled.div`
  border: 1px solid #bebebe;
  /* padding: .3em; */
  height: 2em;
  width: 2em;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  > img {
    height: 1em;
  }
  @media (max-width: ${500}px) {
    height: 1.5em;
    width: 1.5em;
  }
`;

const Footer = styled.div`
  margin: 1em 0;
  display: flex;
  justify-content: space-between;

  > p {
    color: #bebebe;
    padding: 0.5em 1em;
    border: 1px solid #bebebe;
    font-size: 13px;
    @media (max-width: ${500}px) {
      font-size: 11px;
    }
  }
`;
