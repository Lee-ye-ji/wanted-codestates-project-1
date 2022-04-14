import styled from 'styled-components';
import { useAppSelector } from '../../store/config';
import SaveCard from '../molecules/SaveCard';
import { IoFileTraySharp } from 'react-icons/io5';
import { useState } from 'react';
import Notification from '../atoms/Notification';

function SaveStorage(): JSX.Element {
  const saveRepo = useAppSelector((state) => state.save.repoList);
  const [error, setError] = useState(false);

  return (
    <>
      {error && <Notification type="error" message="삭제되었습니다." />}
      <Storage>
        {saveRepo.length === 0 ? (
          <Empty>
            <IoFileTraySharp />
            <p>저장된 데이터가 없습니다</p>
          </Empty>
        ) : (
          saveRepo.map((item) => <SaveCard data={item} error={error} setError={setError} />)
        )}
      </Storage>
    </>
  );
}

export default SaveStorage;

const Storage = styled.div`
  position: fixed;
  bottom: 20px;
  width: 200px;
  height: 400px;
  background: ${({ theme }) => theme.color.white};
  border-radius: 12px;
`;

const Empty = styled.div`
  text-align: center;
  font-size: 30px;
  padding-top: 150px;
  color: ${({ theme }) => theme.color.black};
  p {
    font-size: 12px;
    font-weight: bold;
  }
`;
