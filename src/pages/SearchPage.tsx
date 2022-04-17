import Loading from '../components/atoms/Loading';
import Search from '../components/molecules/Search';
import RepoCard from '../components/organisms/RepoCard';
import CenterTemplate from '../components/templates/CenterTemplate';
import ContentTemplate from '../components/templates/ContentTemplate';
import GridTemplate from '../components/templates/GridTemplate';
import { useAppSelector } from '../store/config';

function SearchPage(): JSX.Element {
  const repoData = useAppSelector((state) => state.repo.repoList);
  const loading = useAppSelector((state) => state.repo.loading);
  return (
    <ContentTemplate>
      <Search />
      {repoData?.length === 0 ? (
        <>
          <CenterTemplate>검색을 통해 Repository를 저장해주세요!</CenterTemplate>
          {!loading && (
            <CenterTemplate>
              <Loading />
            </CenterTemplate>
          )}
        </>
      ) : (
        <GridTemplate>
          <RepoCard />
        </GridTemplate>
      )}
    </ContentTemplate>
  );
}

export default SearchPage;
