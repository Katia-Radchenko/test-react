import { FriendImg, FriendItem, FriendSpan, FriendText } from './FriendListItem.styled';


const FriendListItem = ({friends}) => {
  const friendListItem = friends.map((friend) => (<FriendItem key={friend.id} >
    <FriendSpan status={friend.isOnline}>{friend.isOnline}</FriendSpan>
    <FriendImg srcSet={friend.avatar}  src="" alt="User avatar" width="48" />
    <FriendText >{friend.name}</FriendText>
  </FriendItem>))
  return friendListItem
};
export default FriendListItem
