import styled from 'styled-components';

function SearchPage(): JSX.Element {
  return (
    <Page>
      <h1>SearchPage</h1>
    </Page>
  );
}

export default SearchPage;

const Page = styled.section`
  position: absolute;
  height: 100%;
  width: calc(100% - 240px);
  left: 280px;
`;
