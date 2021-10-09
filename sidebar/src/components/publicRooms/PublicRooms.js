import PublicRoomsList from './PublicRoomsList'

const PublicRooms = ({ rooms }) => {
  return (
    <ul>
      {rooms.map(room => (
        <PublicRoomsList key={room.id} {...room} />
      ))}
    </ul>
  )
}
export default PublicRooms
