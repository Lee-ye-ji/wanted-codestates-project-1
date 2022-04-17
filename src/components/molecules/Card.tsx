import styled from 'styled-components';
import { IssueItem } from '../../interfaces/issue';
import { RepositoryItem } from '../../interfaces/repository';
import { twoLineEclipse, button } from '../../styles/duplicate';
import Profile from '../atoms/Profile';
import Title from '../atoms/Title';
import User from '../atoms/User';

function Card({
  data,
  onClickCard,
  onRepoCard,
}: {
  data: RepositoryItem | IssueItem;
  onClickCard?: ((newValue: RepositoryItem) => void | undefined) | undefined;
  onRepoCard?: ((newValue: IssueItem) => void | undefined) | undefined;
}): JSX.Element {
  return (
    <Wrapper>
      <Content>
        <Profile src={data.avatar} size="100px" />
        <Title>{data.title}</Title>
        <User>{data.user}</User>
        <Desc>{data.desc}</Desc>
        <Date>{data.date}</Date>
        {onClickCard !== undefined && <Btn onClick={() => onClickCard(data)}>저장하기</Btn>}
        {onRepoCard !== undefined && <Btn onClick={() => onRepoCard(data)}>이동하기</Btn>}
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
  padding: 10px 0;
`;

const Desc = styled.p`
  font-size: 10px;
  margin: 0.5em;
  ${twoLineEclipse}
`;

const Date = styled.p`
  font-size: 12px;
  margin: 0.5em;
  color: ${({ theme }) => theme.color.gray};
`;

const Btn = styled.button`
  width: 100px;
  height: 30px;
  background: ${({ theme }) => theme.color.main_black};
  color: ${({ theme }) => theme.color.white};
  ${button}
  &:hover {
    background: ${({ theme }) => theme.color.gray};
  }
`;
