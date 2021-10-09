import JoinedRoomsList from './JoinedRoomsList'

const JoinedRooms = ({ rooms }) => {
  return (
    <ul>
      {rooms.map(room => (
        <JoinedRoomsList key={room.id} {...room} />
      ))}
    </ul>
  )
}
export default JoinedRooms
