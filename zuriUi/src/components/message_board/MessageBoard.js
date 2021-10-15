import MessageContainer from "./Subs/MessageContainer/MessageContainer"
import { ChatContainer } from "./MsgBoardStyle"
import MoreMenu from "./Subs/MessageContainer/MoreMenu/MoreMenu"
import Overlay from "./Subs/MessageContainer/Overlay/Overlay"

import { useState } from "react"
import MessageInputBox from "../message_input/MessageInputField"
import messagesData from "./messages.data"
import EmojiReaction from "../EmojiReaction/EmojiReaction"

function MessageBoard({ chatsConfig }) {
  const [showMoreOptions, setShowMoreOptions] = useState(false)
  const [showEmoji, setShowEmoji] = useState(false)
  const [messageList, setMessageList] = useState(chatsConfig.messages)

  const [top, setTop] = useState(null)
  const [right, setRight] = useState(null)
  const [currentMessageId, setCurrentMessageId] = useState(null)

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
  }

  const handleShowEmoji = (id, event) => {
    setCurrentMessageId(id)
    setShowEmoji(!showEmoji)
    setTop(event.clientY)
    setRight(window.innerWidth - event.clientX)
  }

  function handleEmojiClicked(event, emojiObject) {
    // extract the data
    const emoji = emojiObject.emoji
    const newEmojiName = emojiObject.names[1]

    //copy the message
    const messageListCopy = [...messageList]
    const messageIndex = messageListCopy.findIndex(
      message => message.id === currentMessageId
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
      //increase the count
      message.emojis[emojiIndex].count = message.emojis[emojiIndex].count + 1
    } else {
      //the emoji does not exist
      //create the emoji object and push
      const newEmojiObject = { name: newEmojiName, count: 1, emoji: emoji }
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
                key={i}
                messageData={messageData}
              />
            ))}
        </div>
        <div className="input-text">
          <MessageInputBox
            currentUserData={chatsConfig.currentUserData}
            addToMessages={addToMessages}
          />
        </div>
      </ChatContainer>

      {showMoreOptions ? (
        <div>
          <MoreMenu top={top} right={right} />
          <Overlay handleOverlayClicked={handleOverlayClicked} />
        </div>
      ) : null}

      {showEmoji ? (
        <div>
          <EmojiReaction
            top={top}
            right={right}
            handleEmojiClicked={handleEmojiClicked}
          />
          <Overlay handleOverlayClicked={handleOverlayClicked} />
        </div>
      ) : null}
    </>
  )
}

export default MessageBoard
