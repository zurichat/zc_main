// import styled from 'styled-components'
import {
  ListWrapper,
  Title,
  Hash,
  BottomItems,
  Joined,
  Bull,
  Span,
  Button,
  Text
} from './RoomStyles'
const JoinedRoomsList = ({ title, members, unread }) => {
  return (
    <ListWrapper>
      <Title>
        <Hash>#</Hash>
        {title}
      </Title>
      <BottomItems>
        <Joined>&#10003;</Joined>
        <Text> Joined</Text>
        <Bull>&bull;</Bull>
        <Span>{members} members</Span>
        <Bull>&bull;</Bull>
        <Span>{unread} unread</Span>
      </BottomItems>
      <Button className={`leave`}>leave</Button>
    </ListWrapper>
  )
}

export default JoinedRoomsList
