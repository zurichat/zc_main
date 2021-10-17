import MessageContainer from "./Subs/MessageContainer/MessageContainer"
import { ChatContainer } from "./MsgBoardStyle"
import MoreMenu from "./Subs/MessageContainer/MoreMenu/MoreMenu"
import Overlay from "./Subs/MessageContainer/Overlay/Overlay"

import { useState } from "react"
import MessageInputBox from "../message_input/MessageInputField"
import messagesData from "./messages.data"
// import EmojiReaction from "../EmojiReaction/EmojiReaction"
import Emojis from "../Emojis/Emojis"
// import Emojis from "../Emojis/Emojis"

function MessageBoard({ chatsConfig }) {
  const [showMoreOptions, setShowMoreOptions] = useState(false)
  const [showEmoji, setShowEmoji] = useState(false)
  const [messageList, setMessageList] = useState(chatsConfig.messages)
  // const [messageList, setMessageList] = useState(messagesData)
  const [top, setTop] = useState(null)
  const [right, setRight] = useState(null)
  const [currentMessageId, setCurrentMessageId] = useState(null)
  const currentUserId = 3

  const addToMessages = newMessage => {
    setMessageList(prevMessages => [...prevMessages, newMessage])
  }

  function handleOverlayClicked() {
    setShowMoreOptions(false)
    setShowEmoji(false)
  }

  const handleShowMoreOptions = (id, event) => {
    setShowMoreOptions(!showMoreOptions)
    setTop(event.clientY)
    setRight(window.innerWidth - event.clientX)
    if (window.innerHeight - event.clientY < 320) {
      setTop(event.clientY - 320)
    }
  }

  const handleShowEmoji = (id, event) => {
    setCurrentMessageId(id)
    setShowEmoji(!showEmoji)
    setTop(event.clientY)
    setRight(window.innerWidth - event.clientX)

    if (window.innerHeight - event.clientY < 320) {
      setTop(event.clientY - 320)
    }
    if (event.clientX < 288) {
      setRight(event.clientX + 300)
    }
    // console.log(window.innerWidth - event.clientX)
  }

  function handleEmojiClicked(event, emojiObject, message_id) {
    //copy the message
    const messageListCopy = [...messageList]

    //if message_id is not undefined then it's coming from already rendered emoji in
    // the messgeContainer

    // extract the data
    const emoji = emojiObject.character
    const newEmojiName = message_id ? emojiObject.name : emojiObject.unicodeName
    const realMessageId = message_id ? message_id : currentMessageId

    const messageIndex = messageListCopy.findIndex(
      message => message.message_id === realMessageId
    )

    if (messageIndex < 0) {
      return
    }

    const message = messageListCopy[messageIndex]
    const emojiIndex = message.emojis.findIndex(
      emoji => emoji.name === newEmojiName
    )

    if (emojiIndex >= 0) {
      //the emoji exist
      //now we check if the user has clicked on the emoji before
      const reactedUsersId = message.emojis[emojiIndex].reactedUsersId
      const reactedUserIdIndex = reactedUsersId.findIndex(
        id => id === currentUserId
      )
      if (reactedUserIdIndex >= 0) {
        // the current user has reacted with this emoji before, so we have
        //remove the user from the list and reduce the count by 1

        //now, if the user is the only person that has reacted, then the emoji
        //should be removed entirely.
        if (message.emojis[emojiIndex].count <= 1) {
          message.emojis.splice(emojiIndex, 1)
        } else {
          message.emojis[emojiIndex].reactedUsersId.splice(reactedUserIdIndex)
          message.emojis[emojiIndex].count =
            message.emojis[emojiIndex].count - 1
        }
      } else {
        //the user has not reacted and will now be added to the list and count incremented
        message.emojis[emojiIndex].reactedUsersId.push(currentUserId)
        message.emojis[emojiIndex].count = message.emojis[emojiIndex].count + 1
      }
    } else {
      //the emoji does not exist
      //create the emoji object and push
      const newEmojiObject = {
        name: newEmojiName,
        count: 1,
        emoji: emoji,
        reactedUsersId: [currentUserId]
      }
      message.emojis.push(newEmojiObject)
    }

    //now we replace the message with the new one
    messageListCopy[messageIndex] = message
    setMessageList(messageListCopy)
  }

  return (
    <>
      <ChatContainer>
        <div className="MsgBoard">
          {messageList &&
            messageList.map((messageData, i) => (
              <MessageContainer
                handleShowMoreOptions={handleShowMoreOptions}
                handleShowEmoji={handleShowEmoji}
                handleEmojiClicked={handleEmojiClicked}
                key={i}
                messageData={messageData}
                currentUserId={currentUserId}
              />
            ))}
        </div>
        <div className="input-text">
          <MessageInputBox
            currentUserData={chatsConfig.currentUserData}
            addToMessages={addToMessages}
            sendMessageHandler={chatsConfig.sendChatMessageHandler}
          />
        </div>
      </ChatContainer>
      {showMoreOptions && (
        <div>
          <Overlay handleOverlayClicked={handleOverlayClicked} />
          <MoreMenu top={top} right={right} />
        </div>
      )}

      {showEmoji && (
        <div>
          <Overlay handleOverlayClicked={handleOverlayClicked} />
          <Emojis
            top={top}
            right={right}
            handleEmojiClicked={handleEmojiClicked}
          />
        </div>
      )}
    </>
  )
}

export default MessageBoard
