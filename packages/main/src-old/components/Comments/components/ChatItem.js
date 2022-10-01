const ChatItem = ({ message, author, time }) => {
  return (
    <div>
      <h3>{author}</h3>
      <p>{message}</p>
      <span>{time}</span>
    </div>
  );
};
export default ChatItem;
