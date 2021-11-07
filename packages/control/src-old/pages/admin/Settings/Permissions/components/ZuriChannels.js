import React from "react";

const myStyle = {
  text: {
    color: "#1d1c1d",
    fontWeight: "700",
    fontSize: "18px",
    padding: "5px",
    paddingBottom: "0",
    marginBottom: "0"
  },
  smalltext: {
    fontWeight: "400",
    fontSize: "14px",
    color: "#616061"
  },
  btn: {
    backgroundColor: "#00B87C",
    color: "#ffffff",
    border: "none"
  }
};

const ZuriChannels = () => {
  return (
    <>
      <p style={myStyle.text}>Enable channel invitations</p>
      <br />
      <p style={myStyle.smalltext}>
        If disabled, any pending invitations can still be accepted, Pending
        invitationscan be revoked from Manage Zuri chat connect
      </p>
      <button type="button" className="btn btn-primary" style={myStyle.btn}>
        See Plans
      </button>
    </>
  );
};

export default ZuriChannels;
