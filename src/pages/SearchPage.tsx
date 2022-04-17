import Loading from '../components/atoms/Loading';
import Search from '../components/molecules/Search';
import RepoCard from '../components/organisms/RepoCard';
import CenterTemplate from '../components/templates/CenterTemplate';
import ContentTemplate from '../components/templates/ContentTemplate';
import ErrorTemplate from '../components/templates/ErrorTemplate';
import { useAppSelector } from '../store/config';

function SearchPage(): JSX.Element {
  const { loading, repoList, error } = useAppSelector((state) => state.repo);
  return (
    <ContentTemplate>
      <Search />
      {repoList?.length === 0 ? (
        <>
          {loading ? (
            <CenterTemplate>{error.length !== 0 ? <ErrorTemplate /> : <Loading />}</CenterTemplate>
          ) : (
            <CenterTemplate>검색을 통해 Repository를 저장해주세요!</CenterTemplate>
          )}
        </>
      ) : (
        <RepoCard />
      )}
    </ContentTemplate>
  );
}

export default SearchPage;
