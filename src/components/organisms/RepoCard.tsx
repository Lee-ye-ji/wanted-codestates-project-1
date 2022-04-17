import { useAppDispatch, useAppSelector } from '../../store/config';
import { useState } from 'react';
import Card from '../molecules/Card';
import Notification from '../atoms/Notification';
import { setSave } from '../../store/slices/saveSlice';
import { RepositoryItem } from '../../interfaces/repository';

function RepoCard(): JSX.Element {
  const repoData = useAppSelector((state) => state.repo.repoList);

  const [warning, setWarning] = useState(false);
  const [dup, setDup] = useState(false);
  const [success, setSuccess] = useState(false);
  const dispatch = useAppDispatch();
  const saveRepo = useAppSelector((state) => state.save.repoList);

  const onClickCard = (newValue: RepositoryItem) => {
    const isDup = saveRepo.filter((item) => item.id === newValue.id);
    if (isDup.length === 1) {
      setDup(!dup);
    } else if (saveRepo.length < 4) {
      setSuccess(!success);
      dispatch(setSave(newValue));
    } else {
      setWarning(!warning);
    }
  };

  return (
    <>
      {success && <Notification type="success" message="저장되었습니다." />}
      {warning && <Notification type="warning" message="더 이상 저장할 수 없습니다." />}
      {dup && <Notification type="warning" message="이미 저장된 데이터입니다." />}
      {repoData.map((card) => (
        <Card data={card} onClickCard={onClickCard} />
      ))}
    </>
  );
}

export default RepoCard;
