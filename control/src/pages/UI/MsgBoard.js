import avatar from "./profile.svg"
import { MsgBoard} from "./MsgBoardStyle"

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
    },
  ]
  return ( <>
    <MsgBoard>
      {MsgList.map((item, i) => (
        <div key={i} className="msg-container">
          <div>
            <img src={avatar} alt="user-avatar" className="user-avatar" />
          </div>
          <div className="msgParticulars">
            <div className="name-time">
              <span className="name">
                <strong> {item.name} </strong>
              </span>
              <span className="time">{item.time}</span>
            </div>
            <div className="message">{item.message}</div>
          </div>
        </div>
      ))}
    </MsgBoard>
   
    </>
  )
}

export default Uitest
