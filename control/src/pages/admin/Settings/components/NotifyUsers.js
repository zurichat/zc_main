import React from 'react'

const myStyle = {
    text: {
        color: "#1d1c1d",
        fontWeight: "600",
        fontSize: "18px",
        padding: "5px",
    },
    smalltext: {
        fontWeight:"400",
        fontSize:"14px",
        color: "#616061",
    },
    button: {
        backgroundColor:"#00B87C",
        color:"#ffffff",
        border: "none"
    },
}

const NotifyUsers = () => {
    return (
        <>
            <input type="checkbox" name="displayname" id="" />
            <label style={myStyle.text}>Notify users when someone new joins the channel</label><br/>
            <p style={myStyle.smalltext}>Note: members can decide to opt out of this</p>
            <button type="button" className="btn btn-primary" style={myStyle.button}>Save</button>
        </>
    )
}

export default NotifyUsers