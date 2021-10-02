import React from 'react'

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
    border: 'none'
  }
}

const DisplayName = () => {
  return (
    <>
      <input type="checkbox" name="displayname" id="" />
      <label style={myStyle.text}>Show full name instead of nick name</label>
      <br />
      <button type="button" className="btn btn-primary" style={myStyle.button}>
        Save
      </button>
    </>
  )
}

export default DisplayName
