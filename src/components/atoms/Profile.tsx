import styled from 'styled-components';

function Profile({ src, size }: { src: string; size: string }): JSX.Element {
  return <Img src={src} size={size} />;
}

export default Profile;

const Img = styled.img`
  width: ${({ size }: { size: string }) => size};
  height: ${({ size }: { size: string }) => size};
  border-radius: 50%;
`;
