import { useState, useEffect } from 'react'
import axios from 'axios'

export const dummyId = {
  orgId: '614679ee1a5607b13c00bcb7',
  userId: '6145fc9a285e4a18402074f4'
}

export const getDm = () => {
  //Store available rooms to user
  const [rooms, setRooms] = useState([])

  //Filtered Rooms
  const [dms, setDms] = useState([])

  useEffect(() => {
    const fetchDms = axios
      .get(
        `https://dm.zuri.chat/api/v1/sidebar?org=${dummyId.orgId}&user=${dummyId.userId}`
      )
      .then(res => {
        //Get rooms available to user
        const { joined_rooms } = res.data
        return setRooms(joined_rooms)
      })
      .catch(console.log)

    return fetchDms
  }, [])

  return rooms.map(room => {
    return room.room_user_ids.filter(roomUserId => {
      //Filtered users
      let fileteredUser = roomUserId !== dummyId.userId
      return { name: 'James', userid: fileteredUser }
    })
  })
}
