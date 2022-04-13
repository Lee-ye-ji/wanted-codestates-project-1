import styled, { css } from 'styled-components';
import { RepositoryItem } from '../../interfaces/repository';
import { eclipse, button } from '../../styles/duplicate';

function Card({ data }: { data: RepositoryItem }): JSX.Element {
  return (
    <Wrapper>
      <Profile src={data.avatar} />
      <Content>
        <Title>{data.title}</Title>
        <User>{data.user}</User>
        <Desc>{data.desc}</Desc>
        <Date>{data.date}</Date>
        <Save disabled={data.saved}>저장하기</Save>
      </Content>
    </Wrapper>
  );
}

export default Card;

const Wrapper = styled.div`
  min-width: 250px;
  height: 300px;
  text-align: center;
  margin: 1em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

const Content = styled.div`
  margin: 0 auto;
  max-width: 200px;
`;

const Profile = styled.img`
  width: 100px;
  height: 100px;
  padding: 0.5em;
  border-radius: 50%;
`;

const Title = styled.h1`
  font-size: 20px;
  line-height: 20px;
  font-weight: bold;
  ${eclipse}
`;

const User = styled.h2`
  font-size: 15px;
  color: ${({ theme }) => theme.color.gray};
  font-weight: bold;
  ${eclipse}
`;

const Desc = styled.p`
  font-size: 12px;
  margin: 0.5em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Date = styled.p`
  font-size: 12px;
  margin: 0.5em;
  color: ${({ theme }) => theme.color.gray};
`;

const Save = styled.button`
  width: 100px;
  height: 30px;
  background: ${({ theme }) => theme.color.main_black};
  color: ${({ theme }) => theme.color.white};
  ${button}
  ${(props) =>
    props.disabled &&
    css`
      background: rgba(118, 118, 118, 0.3);
    `}
`;
