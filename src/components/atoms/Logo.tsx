import { GoMarkGithub } from 'react-icons/go';
import styled from 'styled-components';

function Logo(): JSX.Element {
  return (
    <Wrapper>
      <GitHubIcon />
      <span>GitHub Issue</span>
    </Wrapper>
  );
}

export default Logo;

const Wrapper = styled.div`
  color: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 50px;
  width: 100%;
  align-items: center;
  span {
    font-size: 20px;
    font-weight: 400;
  }
`;

const GitHubIcon = styled(GoMarkGithub)`
  position: absolute;
  left: 5%;
  font-size: 28px;
`;
