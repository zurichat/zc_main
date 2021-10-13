import React from 'react'
import axios from 'axios'

const myStyle = {
  text: {
    color: 'c4c4c4',
    fontWeight: '700',
    fontSize: '18px',
    padding: '5px'
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

const FileUploads = () => {
  return (
    <>
      <input type="checkbox" name="fileupload" id="fileupload" />
      <label style={myStyle.text}>Enable uploading and sharing files in conversation with people from pther companies.</label>
      <br />
      <button
        type="button"
        className="btn btn-primary"
        style={myStyle.btn}
        onClick={modifyOrganizationSettings}
      >
        See Plans
      </button>
    </>
  )
}

export default FileUploads
