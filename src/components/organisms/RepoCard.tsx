import { useAppDispatch, useAppSelector } from '../../store/config';
import { useState } from 'react';
import Card from '../molecules/Card';
import Notification from '../atoms/Notification';
import { setSave } from '../../store/slices/saveSlice';
import { RepositoryItem } from '../../interfaces/repository';
import GridTemplate from '../templates/GridTemplate';
import RepoPage from '../molecules/RepoPage';

function RepoCard(): JSX.Element {
  const { repoList, total } = useAppSelector((state) => state.repo);

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

  // page
  const limit = 8;
  const [page, setPage] = useState(1);
  const totalPage = Math.ceil(total / limit);
  const MaxPage = totalPage > 10 ? 10 : totalPage;

  return (
    <>
      {success && <Notification type="success" message="저장되었습니다." />}
      {warning && <Notification type="warning" message="더 이상 저장할 수 없습니다." />}
      {dup && <Notification type="warning" message="이미 저장된 데이터입니다." />}
      <GridTemplate>
        {repoList.map((card) => (
          <Card data={card} onClickCard={onClickCard} />
        ))}
      </GridTemplate>
      <RepoPage total={MaxPage} limit={limit} page={page} setPage={setPage} />
    </>
  );
}

export default RepoCard;
