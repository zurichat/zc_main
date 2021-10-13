import React from "react"
import axios from "axios"

const myStyle = {
  text: {
    color: "#1d1c1d",
    fontWeight: "600",
    fontSize: "18px",
    padding: "5px",
    paddingBottom: '0',
    marginBottom: '0',
  },
  smalltext: {
    color: "#616061",
    fontWeight: "400",
    fontSize: "16px",
    padding: "5px"
  },
  radio: {
    backgroundColor: "#00B87C"
  },
  inputfield: {
    margin: "5px 0",
    width: "70%"
  },
  btn: {
    backgroundColor: "#00B87C",
    color: "#ffffff",
    border: "none"
  }
}

const modifyOrganizationSettings = () => {
  let organizationid = "6158c1ac3a1e49b1e5165df3"
  let showDE = false
  let token = localStorage.getItem("token")
  axios.defaults.baseURL = "https://api.zuri.chat"
  axios.defaults.headers.common = { Authorization: `bearer ${token}` }
  axios({
    method: "patch",
    url: "/organizations/" + organizationid + "/settings",
    data: {
      displayemail: showDE
    }
  })
}

const  ZuriDM = () => {
  return (
    <>
      <p style={myStyle.smalltext}>Enable Zuri chat connect for direct messages</p>
      <p style={myStyle.text}>Who can send and accept DM invitations?</p>
      <input type="radio" name="email" id="" style={myStyle.radio} />
      <label style={myStyle.text}>Everyone, except guests (default)</label>
      <br />
      <input type="radio" name="email" id="" />
      <label style={myStyle.text}>Worspace Admins or Owners</label>
      <br />
      <input type="radio" name="email" id="" style={myStyle.radio} />
      <label style={myStyle.text}>
        Workspace Admins or Owners, as well as...
      </label>
      <br />
      <input type="radio" name="email" id="" style={myStyle.radio} />
      <label style={myStyle.text}>
        Worspace Owners only
      </label>
      <br />
      <button
        type="button"
        className="btn btn-primary"
        style={myStyle.btn}
        onClick={modifyOrganizationSettings}
      >
        Save
      </button>
    </>
  )
}

export default ZuriDM
