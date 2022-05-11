import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ArrowDropDown, VolumeUp, CheckCircle } from "@material-ui/icons";
import { Howl } from "howler";

//SoundArray
const Sounds = [
  {
    sound:
      "https://notificationsounds.com/storage/sounds/file-b8_discreet-song.mp3",
    label: "Eventually"
  },
  {
    sound:
      "https://cdn.staticcrate.com/stock-hd/audio/soundscrate-bloody-knife-stab-05.mp3",
    label: "Event"
  },
  {
    sound:
      "https://cdn.staticcrate.com/stock-hd/audio/soundscrate-bomb-explosion-1.mp3",
    label: "Bomb"
  },
  {
    sound:
      "https://soundbible.com/mp3/Upper%20Cut-SoundBible.com-1272257235.mp3",
    label: "Punch"
  },
  {
    sound:
      "https://cdn.staticcrate.com/stock-hd/audio/soundscrate-exotic_bird_sounds_7.mp3",
    label: "Bird"
  }
];

//Player function
const playSound = src => {
  const sound = new Howl({
    src,
    Html5: true
  });
  sound.play();
};

//Notification tab
const NotificationTab = ({ toggleState }) => {
  const [notify, setNotify] = useState(
    "https://notificationsounds.com/storage/sounds/file-b8_discreet-song.mp3"
  );

  const userInfo = JSON.parse(sessionStorage.getItem("user"));

  const PreviewSound = e => {
    e.preventDefault();
    playSound(notify);
  };

  return (
    <Container>
      <Heading>Mobile push notifications</Heading>
      <NotifyMeAndSoundContainer>
        <NotifyContainer>
          <InputLabel htmlFor="notify">
            {" "}
            <b>notify me about...</b>{" "}
          </InputLabel>

          <NotifyInput>
            <Select>
              <option value="">All new messages</option>
              <option value="">Direct messages, mentions and keywords</option>
              <option value="">Nothing</option>
            </Select>
            <IconBox>
              {" "}
              <ArrowDropDown />
            </IconBox>
          </NotifyInput>
        </NotifyContainer>
        <SoundContainer>
          <InputLabel htmlFor="notify">
            {" "}
            <b>Sound: </b>
          </InputLabel>
          <SoundPreviewBox>
            <Select
              name="notify"
              onChange={e => {
                const selectedSound = e.target.value;
                setNotify(selectedSound);
              }}
            >
              {Sounds.map((sound, id) => {
                return (
                  <option key={id} value={sound.sound}>
                    {sound.label}{" "}
                  </option>
                );
              })}
            </Select>
            <IconBox className="preview">
              {" "}
              <ArrowDropDown />
            </IconBox>
            <PreviewButton onClick={PreviewSound}>
              <VolumeUp />
              Preview
            </PreviewButton>
          </SoundPreviewBox>
        </SoundContainer>
      </NotifyMeAndSoundContainer>

      <EmailPreferenceBox>
        <EmailTitle>Email Preference</EmailTitle>

        <EmailDetail>
          Zurichat can send email notifications when you’re away so you don’t
          miss a single thing. You can also decide if there are any additional
          updates you want to receive.
        </EmailDetail>
      </EmailPreferenceBox>

      <EmailNotify> Email notification</EmailNotify>
      <EmailDetail className="emailnotify">
        When you’re busy or not online, Zurichat can send you email
        notifications about any new direct messages or mentions of your name.
      </EmailDetail>

      <Form>
        <FormParagraph>Send me email notifications:</FormParagraph>
        <InputBox>
          <Input type="radio" />
          <span> once every 15 minutes</span>
          <Saved>
            <CheckCircle /> saved
          </Saved>
        </InputBox>
        <InputBox>
          <Input type="radio" />
          <span> once an hour atmost</span>
          <Saved>
            <CheckCircle /> saved
          </Saved>
        </InputBox>
        <InputBox>
          <Input type="radio" />
          <span> never</span>
          <Saved>
            <CheckCircle /> saved
          </Saved>
        </InputBox>

        <FormParagraph>Send me daily digest:</FormParagraph>
        <InputBox>
          <Input type="radio" />
          <span> once a day</span>
          <Saved>
            <CheckCircle /> saved
          </Saved>
        </InputBox>
        <InputBox>
          <Input type="radio" />
          <span> never </span>
          <Saved>
            <CheckCircle /> saved
          </Saved>
        </InputBox>

        <EmailNotify> Email news and updates:</EmailNotify>
        <EmailDetail className="emailnotify">
          From time to time, we’d like to send you emails with interesting news
          about Zurichat and your workspace. You can choose which of these
          updates you want to receive:
        </EmailDetail>

        <InputBox>
          <Input type="checkbox" />
          <div>
            <span> Updates for admin</span>
            <Saved>
              <CheckCircle /> saved
            </Saved>
          </div>
        </InputBox>
        <InputBox>
          <Input type="checkbox" />
          <span> Zurichat tips and tricks </span>
          <Saved>
            <CheckCircle /> saved
          </Saved>
        </InputBox>
        <InputBox>
          <Input type="checkbox" />
          <span> Offers and promotions </span>
          <Saved>
            <CheckCircle /> saved
          </Saved>
        </InputBox>
        <InputBox>
          <Input type="checkbox" />
          <span>Research opportunities</span>
          <Saved>
            <CheckCircle /> saved
          </Saved>
        </InputBox>
        <InputBox>
          <Input type="checkbox" />
          <span>
            Zurichat developer newsletter: Best practices for connecting your
            work to Zurichat via our platform
          </span>
          <Saved>
            <CheckCircle /> saved
          </Saved>
        </InputBox>
        <InputBox>
          <Input type="checkbox" />
          <span>
            Zurichat Platform change log: Stay in the know when we make updates
            to our APIs
          </span>
          <Saved>
            <CheckCircle /> saved
          </Saved>
        </InputBox>

        <EmailDetail className="signin"> Sign-in notifications</EmailDetail>
        <EmailDetail>
          {" "}
          These emails help to keep your Zurichat account secure. If you haven’t
          already, you should also{" "}
          <Link href=""> enable two-factor authentication</Link>
        </EmailDetail>

        <InputBox className="signin">
          <Input type="radio" />
          <SigninBox>
            <span>Most Secure </span>
            <Saved>
              <CheckCircle /> saved
            </Saved>
            <p>
              Receive an email when someone signs in to your Zurichat account
              from an unrecognised device
            </p>
          </SigninBox>
        </InputBox>

        <InputBox className="signin">
          <Input type="radio" />
          <SigninBox>
            <span>Standard</span>
            <Saved>
              <CheckCircle /> saved
            </Saved>
            <p>
              Receive an email when someone signs in from a new location with an
              unrecognised device
            </p>
          </SigninBox>
        </InputBox>

        <InputBox>
          <Input type="radio" />
          <SigninBox>
            <span>Dont't send me any sign-in notifications</span>
            <Saved>
              <CheckCircle /> saved
            </Saved>
          </SigninBox>
        </InputBox>

        <FormParagraph>
          If you opt out of the above, please note that we’ll still send you
          important administrative emails, such as password resets.
        </FormParagraph>

        <FormParagraph>
          {" "}
          We will use this email address: <b>{userInfo.email}</b> (
          <Link href="/admin/settings/accountsProfile">Change address </Link>)
        </FormParagraph>
      </Form>
    </Container>
  );
};

export default NotificationTab;

const Container = styled.div`
  -webkit-font-smoothing: antialiased;
  //-moz-osx-font-smoothing: grayscale;
`;

const Heading = styled.h2`
  font-size: 1.5rem;
  line-height: 1.75rem;
  width: 100%;
  font-weight: 700;
  @media (max-width: ${500}px) {
    font-size: 1.2rem;
  }
`;

const NotifyMeAndSoundContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: ${500}px) {
    display: block;
  }
`;

const NotifyContainer = styled.div`
  display: grid;
  width: 48%;
  position: relative;
  @media (max-width: ${500}px) {
    width: 100%;
    margin-bottom: 2em;
  }
`;

const SoundContainer = styled.div`
  display: grid;
  width: 48%;
  position: relative;
  @media (max-width: ${500}px) {
    width: 100%;
  }
`;

const InputLabel = styled.label``;
const Select = styled.select`
  width: 100%;
  border-radius: 5px;
  font-size: 14px;
  padding: 0.45rem 0.75rem 0.55rem;
  border: 1px solid #868686;
  -webkit-appearance: none;
  outline: 0;
`;

const IconBox = styled.span`
  position: absolute;
  right: 0.5rem;
  bottom: 0.5em;
  &.preview {
    right: 8em;
  }
  .MuiSvgIcon-root {
    font-size: 2em;
  }
`;

const SoundPreviewBox = styled.div`
  display: flex;
  column-gap: 0.5em;
  margin-top: 0.5em;
  select {
    width: 70%;
  }
`;
const PreviewButton = styled.button`
  padding: 8px 14px 9px;
  font-size: 15px;
  background: #00b87c;
  color: white;
  border-radius: 5px;
  line-height: 1.2rem;
  font-weight: 900;
  display: flex;
  align-items: center;
  column-gap: 0.5em;
  transition: all 200ms;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

const NotifyInput = styled.div`
  margin-top: 0.5em;
`;

const EmailPreferenceBox = styled.div`
  margin-top: 2em;
`;

const EmailTitle = styled.h2`
  font-size: 1rem;
  line-height: 1.75rem;
`;

const EmailDetail = styled.p`
  font-size: 14px;
  &.signin {
    font-weight: 600;
    margin-top: 1.5em;
    font-size: 16px;
  }
  &.emailnotify {
    color: #1d1c1d;
    font-size: 14px;
  }
`;

const EmailNotify = styled.h2`
  padding-bottom: 0 !important;
  margin-bottom: 0;
  line-height: normal;
  font-size: 16px;
`;

const Form = styled.form``;
const Input = styled.input`
  position: relative;
  top: 0.1em;
`;
const FormParagraph = styled.p`
  font-size: 14px;
`;

const InputBox = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 1em;
  &.signin {
    margin-bottom: 0;
  }
  span {
    padding-left: 0.5em;
    font-size: 13px;
  }
`;

const Saved = styled.span`
  color: #007a5a;
  font-size: 0.9rem;
  font-weight: unset !important;
  opacity: 0;
  .MuiSvgIcon-root {
    font-size: 1em;
  }
`;

const Link = styled.a`
  font-size: inherit;
  font-weight: 500;
  :hover {
    opacity: 0.5;
    color: #00b87c;
  }
`;

const SigninBox = styled.div`
  span {
    font-weight: bold;
  }
  p {
    font-size: 14px;
    padding-left: 0.5em;
  }
`;
