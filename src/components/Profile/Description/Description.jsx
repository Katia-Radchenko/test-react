import { Container, Image, Text } from './Description.styled';

const Description = ({ username, tag, location, avatar, }) => {
  return (

    <Container>
      <Image
        src={avatar}
        alt="User avatar"
      />
      <Text>{username}</Text>
      <Text color='grey'>{tag}</Text>
      <Text  color='grey'>{location}</Text>
    </Container>
  );
};
export default Description;
