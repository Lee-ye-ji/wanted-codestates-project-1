import styled from 'styled-components';
import { GoSearch } from 'react-icons/go';

function Search(): JSX.Element {
  return (
    <SearchBox>
      <SearchInput placeholder="Repository를 입력해주세요!" />
      <SearchButton>
        <GoSearch />
      </SearchButton>
    </SearchBox>
  );
}

export default Search;

const SearchBox = styled.div`
  display: flex;
  width: 100%;
  padding: 7px 10px 7px 30px;
  align-items: center;
  border-radius: 20px;
  box-sizing: border-box;
  justify-content: space-between;
  border: 1px solid black;
`;
const SearchInput = styled.input`
  width: 500px;
  height: 40px;
  outline: 0;
  border: none;
`;
const SearchButton = styled.button`
  background-color: transparent;
  border: 0;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    color: green;
  }
`;
