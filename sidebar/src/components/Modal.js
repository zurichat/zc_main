import { DialogOverlay, DialogContent } from '@reach/dialog'
import styled from 'styled-components'
import AuthInputBox from './AuthInputBox'

export const Modall = props => {
  return (
    <div>
      <Overlay isOpen={props.showDialog} onDismiss={props.closeDialog}>
        <Content aria-label="room-list">
          <CloseButton className="close-button" onClick={close}>
            <Span aria-hidden>×</Span>
          </CloseButton>
          <AuthInputBox
            value={props.query}
            setValue={props.setQuery}
            placeholder="🔍 Search by channel name or description"
          />
          <Wrapper>
            {/*loading && <p>Loading..</p>*/}
            {/* {rooms.joined_rooms && <JoinedRooms rooms={filteredJoinedRooms} />} */}
            {/* {rooms.public_rooms && <PublicRooms rooms={filteredPublicRooms} />} */}
          </Wrapper>
        </Content>
      </Overlay>
    </div>
  )
}

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsl(220deg 5% 40% / 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2rem;
  z-index: 5;
`
const Content = styled(DialogContent)`
  position: relative;
  background: white;
  width: 100%;
  height: 100%;
  padding: 2rem;
  display: flex;
  margin: auto;
  flex-direction: column;
`
const Wrapper = styled.div`
  overflow-y: auto;
  padding: 1rem 0;
`
const CloseButton = styled.button`
  position: absolute;
  top: 0px;
  right: 0;
  padding: 0.5rem;
  width: 50px;
  color: red;
  background-color: transparent;
  border: none;
`
const Span = styled.span`
  font-size: 0.8rem;
`
const Item = styled.p`
font-family: Lato;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: 28px;
letter-spacing: 0em;
text-align: left;
display: flex;
padding:0.25rem;
& > img { 
  padding: 0 1rem;

`

const ClickButton = styled.img`
  margin-left: auto;
`
