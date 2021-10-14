import React from "react"
import axios from "axios"

const VerifyGuestStatus = () => {
  // get the guest Email address
  const guestDetails = {
    email: "bobbydev@gmail.com",
    UUID: ""
  }

  // send invite

  const inviteGuest = async () => {
    const URl = "/organizations/{id}/send-invite"

    const { data } = await axios.post(URL, { email: guestDetails.email })
    if (data) {
      //   check if guest email is registered
      const response = await axios.get(URL, { uuid: data.uuid })


      if (response.statusCode === 200) {
        // if email is valid as a member direct them to their account
        
        
      } else {
        // if email is not a valid member create an account for them with their UUID
      }
    }
  }



  // take them to the organization where they are being invited from

  return <div></div>
}

export default VerifyGuestStatus
