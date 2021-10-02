import React from 'react'
import axios from 'axios'

const myStyle = {
  text: {
    color: '#1d1c1d',
    fontWeight: '600',
    fontSize: '18px',
    padding: '5px'
  },
  button: {
    backgroundColor: '#00B87C',
    color: '#ffffff',
    border: 'none',
  }
}

// let displayName = document.getElementById("displayname").value

const sendDisplayName = () => {
  let organizationid = '6158c1ac3a1e49b1e5165df3'
  let showDN = true
  let token = ''
  axios.defaults.baseURL = 'https://api.zuri.chat'
  axios.defaults.headers.common = {'Authorization': `bearer ${token}`}
  axios({
    method: 'patch',
    url: '/organizations/' + organizationid,
    data: {
      showdisplayname: showDN,
    }
  });
}

const DisplayName = () => {
  return (
    <>
      <input type="checkbox" name="displayname" id="displayname" />
      <label style={myStyle.text}>Show full name instead of nick name</label>
      <br />
      <button type="button" className="btn btn-primary" style={myStyle.button} onClick={sendDisplayName}>
        Save
      </button>
    </>
  )
}

export default DisplayName
