import FriendListItem from './FriendListItem/FriendListItem';
import { Container } from '../Profile/Profile.styled';

const FriendList = ({friends}) =>{
return (
  <>
    <Container>
      <FriendListItem friends={friends} />
    </Container>
  </>
)
}
export default FriendList
