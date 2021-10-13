import React from 'react'
import axios from 'axios'

const myStyle = {
  text: {
    color: '#1d1c1d',
    fontWeight: '600',
    fontSize: '18px',
    padding: '5px'
  },
  radio: {
    backgroundColor: "#00B87C"
  },
  btn: {
    backgroundColor: '#00B87C',
    color: '#ffffff',
    border: 'none'
  }
}

// let displayName = document.getElementById("displayname").value

const modifyOrganizationSettings = () => {
  let organizationid = '6158c1ac3a1e49b1e5165df3'
  let showDN = true
  let token = localStorage.getItem('token')
  axios.defaults.baseURL = 'https://api.zuri.chat'
  axios.defaults.headers.common = { Authorization: `bearer ${token}` }
  axios({
    method: 'patch',
    url: '/organizations/' + organizationid + '/settings',
    data: {
      showdisplayname: showDN
    }
  })
}

const Workflow = () => {
  return (
    <>
        <input type="radio" name="workflow" id="" style={myStyle.radio} />
      <label style={myStyle.text}>
      Everyone, except guests
      </label>
      <br />
      <input type="radio" name="workflow" id="" style={myStyle.radio} />
      <label style={myStyle.text}>
      Any owner or admin
      </label>
      <br />
      <input type="checkbox" name="workflow" id="workflow" />
      <label style={myStyle.text}>Also  include these specific users and groups</label>
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

export default Workflow