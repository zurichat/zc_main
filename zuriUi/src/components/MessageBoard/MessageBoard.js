import MessageContainer from "./Subs/MessageContainer/MessageContainer"
import { MsgBoard } from "./MsgBoardStyle"

import MoreMenu from "./Subs/MessageContainer/MoreMenu/MoreMenu"
import Overlay from "./Subs/MessageContainer/Overlay/Overlay"

import EmojiReaction from "../EmojiReaction/EmojiReaction"

import { useState } from "react"

function Uitest() {
  const MsgList = [
    {
      name: "Mark essien",
      id: 4,
      time: "7:05PM",
      emojis: [],
      message:
        "Donec rutrum congue leo eget malesuada. Nulla porttitor accumstincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit ametaliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam iddui posuere blandit. Vestibulum ac diam sit amet quam vehicula"
    },
    {
      name: "Xylux",
      time: "8:05PM",
      emojis: [
        { name: "smiling", count: 2, emoji: "👹" },
        { name: "grining", count: 1, emoji: "😊" }
      ],
      message:
        "Donec rutrum congue leo eget malesuada. Nulla porttitor accumstincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit ametaliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam iddui posuere blandit. Vestibulum ac diam sit amet quam vehicula"
    },
    {
      name: "Naza",
      id: 5,
      time: "10:05PM",
      emojis: [
        { name: "smiling", count: 2, emoji: "👹" },
        { name: "grining", count: 1, emoji: "😊" }
      ],
      message:
        "Donec rutrum congue leo eget malesuada. Nulla porttitor accumstincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit ametaliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam iddui posuere blandit. Vestibulum ac diam sit amet quam vehicula"
    },
    {
      name: "Nonso",
      id: 6,
      time: "7:05PM",
      emojis: [
        { name: "smiling", count: 2, emoji: "👹" },
        { name: "grining", count: 1, emoji: "😊" }
      ],
      message:
        "Donec rutrum congue leo eget malesuada. Nulla porttitor accumstincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit ametaliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam iddui posuere blandit. Vestibulum ac diam sit amet quam vehicula"
    },
    {
      name: "Chanda",
      
      id: 7,
      time: "7:05PM",
      emojis: [
        { name: "smiling", count: 4, emoji: "😋" },
        { name: "grining", count: 1, emoji: "😊" }
      ],
      message:
        "Donec rutrum congue leo eget malesuada. Nulla porttitor accumstincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit ametaliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam iddui posuere blandit. Vestibulum ac diam sit amet quam vehicula"
    },
    {
      name: "Ufon",
      id: 8,
      time: "2:00PM",
      emojis: [
        { name: "smiling", count: 2, emoji: "👹" },
        { name: "grining", count: 1, emoji: "😊" }
      ],
      message:
        "Donec rutrum congue leo eget malesuada. Nulla porttitor accumstincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit ametaliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam iddui posuere blandit. Vestibulum ac diam sit amet quam vehicula"
    },
    {
      name: "Ufon",
      id: 9,
      time: "2:00PM",
      emojis: [
        { name: "smiling", count: 2, emoji: "👹" },
        { name: "grining", count: 10, emoji: "😊" }
      ],
      message:
        "Donec rutrum congue leo eget malesuada. Nulla porttitor accumstincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit ametaliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam iddui posuere blandit. Vestibulum ac diam sit amet quam vehicula"
    },
    {
      name: "Ufon",
      time: "2:00PM",
      id: 10,
      emojis: [{ name: "grining", count: 1, emoji: "😊" }],
      message:
        "Donec rutrum congue leo eget malesuada. Nulla porttitor accumstincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit ametaliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam iddui posuere blandit. Vestibulum ac diam sit amet quam vehicula"
    },
    {
      name: "Ufon",
      id: 9,
      time: "2:00PM",
      emojis: [
        { name: "smiling", count: 2, emoji: "👹" },
        { name: "grining", count: 1, emoji: "😊" }
      ],
      message:
        "Donec rutrum congue leo eget malesuada. Nulla porttitor accumstincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit ametaliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam iddui posuere blandit. Vestibulum ac diam sit amet quam vehicula"
    },
    {
      id: 10,
      name: "Ufon",
      time: "2:00PM",
      emojis: [],
      message:
        "Donec rutrum congue leo eget malesuada. Nulla porttitor accumstincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit ametaliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam iddui posuere blandit. Vestibulum ac diam sit amet quam vehicula"
    }
  ]

  const [showMoreOptions, setShowMoreOptions] = useState(false)
  const [showEmoji, setShowEmoji] = useState(false)
  const [messageList, setMessageList] = useState(MsgList)

  const [top, setTop] = useState(null)
  const [right, setRight] = useState(null)
  const [currentMessageId, setCurrentMessageId] = useState(null)

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
      <MsgBoard>
        {messageList &&
          messageList.map((messageData, i) => (
            <MessageContainer
              handleShowMoreOptions={handleShowMoreOptions}
              handleShowEmoji={handleShowEmoji}
              key={i}
              messageData={messageData}
            />
          ))}
      </MsgBoard>

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

export default Uitest
