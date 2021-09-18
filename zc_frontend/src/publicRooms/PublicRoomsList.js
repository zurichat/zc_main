// import styled from 'styled-components'
import {
  ListWrapper,
  Title,
  Hash,
  Bull,
  Span,
  BottomItems,
  Button
} from '../components/joinedRooms/RoomStyles'
const PublicRoomsList = ({ title, members, unread }) => {
  return (
    <ListWrapper>
      <Title>
        <Hash>#</Hash>
        {title}
      </Title>
      <BottomItems>
        <Bull> {members} members</Bull>
        <Span>&bull; </Span>
        <Span>{unread} unread</Span>
      </BottomItems>
      <Button className={`join`}>join</Button>
      {/* <Title><Hash>#</Hash>{title}</Title>
       <BottomItems>
        <Joined>&#10003;</Joined>
       <Text> Joined</Text>
       <Bull>&bull;</Bull>
       <Span>{members} members</Span>
       <Bull>&bull;</Bull>
       <Span>{unread} unread</Span>
       </BottomItems>
       <Button className={`leave`}>leave</Button> */}
    </ListWrapper>
  )
}

export default PublicRoomsList
