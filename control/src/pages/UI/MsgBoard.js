import MessageContainer from "./Subs/MessageContainer/MessageContainer"
import { MsgBoard } from "./MsgBoardStyle"

import MoreMenu from "./Subs/MessageContainer/MoreMenu/MoreMenu"
import Overlay from "./Subs/MessageContainer/Overlay/Overlay"
import { useState } from "react"

function Uitest() {
  const MsgList = [
    {
      name: "Mark essien",
      time: "7:05PM",
      message:
        "Donec rutrum congue leo eget malesuada. Nulla porttitor accumstincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit ametaliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam iddui posuere blandit. Vestibulum ac diam sit amet quam vehicula"
    },
    {
      name: "Xylux",
      time: "8:05PM",
      message:
        "Donec rutrum congue leo eget malesuada. Nulla porttitor accumstincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit ametaliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam iddui posuere blandit. Vestibulum ac diam sit amet quam vehicula"
    },
    {
      name: "Naza",
      time: "10:05PM",
      message:
        "Donec rutrum congue leo eget malesuada. Nulla porttitor accumstincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit ametaliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam iddui posuere blandit. Vestibulum ac diam sit amet quam vehicula"
    },
    {
      name: "Nonso",
      time: "7:05PM",
      message:
        "Donec rutrum congue leo eget malesuada. Nulla porttitor accumstincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit ametaliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam iddui posuere blandit. Vestibulum ac diam sit amet quam vehicula"
    },
    {
      name: "Chanda",
      time: "7:05PM",
      message:
        "Donec rutrum congue leo eget malesuada. Nulla porttitor accumstincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit ametaliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam iddui posuere blandit. Vestibulum ac diam sit amet quam vehicula"
    },
    {
      name: "Ufon",
      time: "2:00PM",
      message:
        "Donec rutrum congue leo eget malesuada. Nulla porttitor accumstincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit ametaliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam iddui posuere blandit. Vestibulum ac diam sit amet quam vehicula"
    },
    {
      name: "Ufon",
      time: "2:00PM",
      message:
        "Donec rutrum congue leo eget malesuada. Nulla porttitor accumstincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit ametaliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam iddui posuere blandit. Vestibulum ac diam sit amet quam vehicula"
    },
    {
      name: "Ufon",
      time: "2:00PM",
      message:
        "Donec rutrum congue leo eget malesuada. Nulla porttitor accumstincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit ametaliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam iddui posuere blandit. Vestibulum ac diam sit amet quam vehicula"
    },
    {
      name: "Ufon",
      time: "2:00PM",
      message:
        "Donec rutrum congue leo eget malesuada. Nulla porttitor accumstincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit ametaliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam iddui posuere blandit. Vestibulum ac diam sit amet quam vehicula"
    },
    {
      name: "Ufon",
      time: "2:00PM",
      message:
        "Donec rutrum congue leo eget malesuada. Nulla porttitor accumstincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit ametaliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam iddui posuere blandit. Vestibulum ac diam sit amet quam vehicula"
    }
  ]

  const [showMoreOptions, setShowMoreOptions] = useState(false)
  const [top, setTop] = useState(null)
  const [right, setRight] = useState(null)

  function handleOverlayClicked() {
    setShowMoreOptions(false)
  }

  const handleShowMoreOptions = (id, event) => {
    setShowMoreOptions(!showMoreOptions)
    setTop(event.clientY)
    setRight(window.innerWidth - event.clientX)
  }

  return (
    <>
      <MsgBoard>
        {MsgList.map((messageData, i) => (
          <MessageContainer
            handleShowMoreOptions={handleShowMoreOptions}
            key={i}
            id={i}
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
    </>
  )
}

export default Uitest
