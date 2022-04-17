import { IssueItem } from '../../interfaces/issue';
import Card from '../molecules/Card';
import { useState } from 'react';
import Pagenation from '../molecules/Pagenation';
import { useAppSelector } from '../../store/config';
import GridTemplate from '../templates/GridTemplate';

function IssueCard(): JSX.Element {
  const issueData = useAppSelector((state) => state.issue.issueList);
  const onRepoCard = (newValue: IssueItem) => {
    window.open(newValue.url);
  };
  // page
  const limit = 8;
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  return (
    <>
      <GridTemplate>
        {issueData.slice(offset, offset + limit).map((card) => (
          <Card data={card} onRepoCard={onRepoCard} />
        ))}
      </GridTemplate>
      <Pagenation total={issueData.length} limit={limit} page={page} setPage={setPage} />
    </>
  );
}

export default IssueCard;
