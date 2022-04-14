import styled from 'styled-components';
import Card from '../components/molecules/Card';
import Search from '../components/molecules/Search';
import { useAppSelector } from '../store/config';

function SearchPage(): JSX.Element {
  const repoData = useAppSelector((state) => state.search.repoList);

  return (
    <Page>
      <Search />
      {repoData?.length === 0 ? (
        <Center>검색을 통해 Repository를 저장해주세요!</Center>
      ) : (
        <Container>
          {repoData.map((item) => (
            <Card data={item} />
          ))}
        </Container>
      )}
    </Page>
  );
}

export default SearchPage;

const Page = styled.section`
  position: absolute;
  height: 100%;
  width: calc(100% - 300px);
  left: 280px;
`;

const Center = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;

const Container = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 30px;
`;
