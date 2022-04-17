import IssueCard from '../components/organisms/IssueCard';
import ContentTemplate from '../components/templates/ContentTemplate';
import { useAppDispatch, useAppSelector } from '../store/config';
import CenterTemplate from '../components/templates/CenterTemplate';
import Loading from '../components/atoms/Loading';
import { useEffect } from 'react';
import { issueThunk } from '../store/thunk/issueThunk';
import { useParams } from 'react-router';

function IssuePage(): JSX.Element {
  const dispatch = useAppDispatch();
  const saveRepo = useAppSelector((state) => state.save.repoList);
  const loading = useAppSelector((state) => state.issue.loading);
  const issueData = useAppSelector((state) => state.issue.issueList);
  const { owner, repo } = useParams();

  useEffect(() => {
    if (issueData.length === 0 && saveRepo.length !== 0) {
      dispatch(issueThunk.getIssue({ owner, repo }));
    }
  }, []);

  return (
    <ContentTemplate>
      {saveRepo?.length === 0 ? (
        <CenterTemplate>검색을 통해 Repository를 저장해주세요!</CenterTemplate>
      ) : (
        <>
          {!loading && issueData.length === 0 ? (
            <CenterTemplate>
              <Loading />
            </CenterTemplate>
          ) : (
            <IssueCard />
          )}
        </>
      )}
    </ContentTemplate>
  );
}

export default IssuePage;
