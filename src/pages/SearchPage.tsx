import styled from 'styled-components';
import Search from '../components/Search';

function SearchPage(): JSX.Element {
  return (
    <Template>
      <Center>
        <Search />
      </Center>
    </Template>
  );
}

export default SearchPage;

const Template = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`;
const Center = styled.div`
  /* border: 1px solid red; */
`;
