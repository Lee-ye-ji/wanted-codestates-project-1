import { IoCloseOutline } from 'react-icons/io5';
import styled from 'styled-components';
import Title from '../atoms/Title';
import Profile from '../atoms/Profile';
import User from '../atoms/User';
import { RepositoryItem } from '../../interfaces/repository';
import { eclipse } from '../../styles/duplicate';
import { useAppDispatch } from '../../store/config';
import { setDelete } from '../../store/slices/saveSlice';
import { Dispatch, SetStateAction } from 'react';
import { issueThunk } from '../../store/thunk/issueThunk';
import { useNavigate } from 'react-router-dom';
import { setResetIssue } from '../../store/slices/issueSlice';

function SaveCard({
  data,
  erase,
  setErase,
}: {
  data: RepositoryItem;
  erase: boolean;
  setErase: Dispatch<SetStateAction<boolean>>;
}): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const deleteClick = (e: React.SyntheticEvent<EventTarget>) => {
    e.stopPropagation();
    setErase(!erase);
    dispatch(setDelete(data.id));
    dispatch(setResetIssue([]));
    navigate('/');
  };

  const onIssueClick = (data: RepositoryItem) => {
    const owner = data.user;
    const repo = data.title;
    dispatch(issueThunk.getIssue({ owner, repo }));
    navigate(`/issue/${owner}/${repo}`);
  };

  return (
    <>
      <SaveWrapper onClick={() => onIssueClick(data)}>
        <Top>
          <Profile src={data.avatar} size="30px" />
          <Title>{data.title}</Title>
          <IoCloseOutline onClick={deleteClick} />
        </Top>
        <User>{data.user}</User>
        <DescSave>{data.desc}</DescSave>
      </SaveWrapper>
    </>
  );
}

export default SaveCard;

const SaveWrapper = styled.div`
  width: 90%;
  height: 85px;
  margin: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.color.main_green};
    color: ${({ theme }) => theme.color.white};
  }
`;

const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const DescSave = styled.p`
  font-size: 10px;
  margin: 0.5em;
  ${eclipse}
`;
