import { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
import styled from 'styled-components'
import Chats from './Chats'
import CommentBox from './CommentBox'
import UnstyledButton from './UnstyledButton'

const CommentSection = ({ header = 'Comments', commentsConfig }) => {
  const [openSidebar, setOpenSidebar] = useState(
    commentsConfig.showCommentSideBar
  )
  const [messages, setMessages] = useState(commentsConfig.messages)

  const addToMessages = message => {
    setMessages(messages => [...messages, message])
  }
  // const[text,setText] = useState("");
  // const[comments,setComments] = useState(JSON.parse(localStorage.getItem("comments")) || []);
  // useEffect(() => {
  // localStorage.setItem("comments",JSON.stringify(comments));
  // },[comments])

  // const handleInput = (evt) => {
  //    setText(evt.target.value)
  // }
  // const chats = {
  //     author:"Yasir",
  //     message:text,
  //     time:"just now"
  // }
  // const handleAddComment = () => {
  //     setComments([...comments,chats]);
  //    setText("");
  // }

  // const commentArray = localStorage.setItem("comments",JSON.stringify(comments));
  // console.log(commentArray);
  // const commentArray = JSON.parse(localStorage.getItem("comments"))
  // console.log(commentArray)

  return (
    <Wrapper showSidebar={openSidebar}>
      <div style={{ position: 'relative' }}>
        <Header>{header}</Header>
        <UnstyledButton
          style={{ position: 'absolute', top: '10px', right: '10px' }}
          onClick={() => setOpenSidebar(false)}
        >
          X
        </UnstyledButton>
      </div>

      <Chats chatInfo={messages} />
      <CommentBox addToMessage={addToMessages} />
    </Wrapper>
  )
}
const Wrapper = styled.aside`
  /* width: 60%; */
  display: ${props => (props.showSidebar ? 'grid' : 'none')};
  grid-template-rows: auto 1fr auto;

  width: 399px;
  z-index: 999;

  margin-left: 8px;
  background-color: #e5e5e5;
  height: 92vh;
  padding: 0 0 20px 0;
`
const Header = styled.header`
  background: hsla(160, 100%, 36%, 1);
  padding: 12px 16px;
  margin-right: -16px;
  color: white;
  font-weight: 700;

  font-size: ${18 / 16}rem; ;
`

export default CommentSection
