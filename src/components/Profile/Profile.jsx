import Description from './Description/Description';
import Stats from './Stats/Stats';
import { Container } from './Profile.styled';



const Profile = ({ user }) => {
  return (
    <>
      <Container>
        <Description username={user.username}
                     tag={user.tag}
                     location={user.location}
                     avatar={user.avatar} />

        <Stats    stats={user.stats} />

      </Container>
    </>
  );
};

export default Profile;
