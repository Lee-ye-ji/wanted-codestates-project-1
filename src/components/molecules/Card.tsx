import styled, { css } from 'styled-components';
import { RepositoryItem } from '../../interfaces/repository';
import { useAppDispatch, useAppSelector } from '../../store/config';
import { setSave } from '../../store/slices/saveSlice';
import { button, eclipse } from '../../styles/duplicate';
import { useState } from 'react';
import Notification from '../atoms/Notification';
import Profile from '../atoms/Profile';
import Title from '../atoms/Title';
import User from '../atoms/User';

function Card({ data }: { data: RepositoryItem }): JSX.Element {
  const [warning, setWarning] = useState(false);
  const [dup, setDup] = useState(false);
  const [success, setSuccess] = useState(false);
  const dispatch = useAppDispatch();
  const saveRepo = useAppSelector((state) => state.save.repoList);

  const onClickCard = () => {
    const isDup = saveRepo.filter((item) => item.id === data.id);
    if (isDup.length === 1) {
      setDup(!dup);
    } else if (saveRepo.length < 4) {
      setSuccess(!success);
      dispatch(setSave(data));
    } else {
      setWarning(!warning);
    }
  };

  return (
    <>
      {success && <Notification type="success" message="저장되었습니다." />}
      {warning && <Notification type="warning" message="더 이상 저장할 수 없습니다." />}
      {dup && <Notification type="warning" message="이미 저장된 데이터입니다." />}
      <Wrapper>
        <Content>
          <Profile src={data.avatar} size="100px" />
          <Title>{data.title}</Title>
          <User>{data.user}</User>
          <Desc>{data.desc}</Desc>
          <Date>{data.date}</Date>
          <Save onClick={onClickCard}>저장하기</Save>
        </Content>
      </Wrapper>
    </>
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
  ${eclipse}
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
