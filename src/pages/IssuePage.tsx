import IssueCard from '../components/organisms/IssueCard';
import ContentTemplate from '../components/templates/ContentTemplate';
import { useAppDispatch, useAppSelector } from '../store/config';
import CenterTemplate from '../components/templates/CenterTemplate';
import Loading from '../components/atoms/Loading';
import { useEffect } from 'react';
import { issueThunk } from '../store/thunk/issueThunk';
import { useParams } from 'react-router';
import ErrorTemplate from '../components/templates/ErrorTemplate';

function IssuePage(): JSX.Element {
  const dispatch = useAppDispatch();
  const saveRepo = useAppSelector((state) => state.save.repoList);
  const { loading, issueList, error } = useAppSelector((state) => state.issue);
  const { owner, repo } = useParams();

  useEffect(() => {
    if (issueList.length === 0 && saveRepo.length !== 0) {
      dispatch(issueThunk.getIssue({ owner, repo }));
    }
  }, []);

  return (
    <ContentTemplate>
      {error.length !== 0 ? (
        <CenterTemplate>
          <ErrorTemplate />
        </CenterTemplate>
      ) : saveRepo?.length === 0 ? (
        <CenterTemplate>검색을 통해 Repository를 저장해주세요!</CenterTemplate>
      ) : (
        <>
          {loading && issueList.length === 0 ? (
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
