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

const DisplayPronoun = () => {
  return (
    <>
      <input type="checkbox" name="displayname" id="" />
      <label style={myStyle.text}>Show pronouns in profile</label>
      <br />
      <button type="button" className="btn btn-primary" style={myStyle.button}>
        Save
      </button>
    </>
  )
}

export default DisplayPronoun
