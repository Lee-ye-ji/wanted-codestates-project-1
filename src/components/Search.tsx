import styled from 'styled-components';
import { GoSearch } from 'react-icons/go';

function Search(): JSX.Element {
  return (
    <>
      <SearchIcon />
      <SearchInput placeholder="Search" type="search" />
    </>
  );
}

export default Search;

const SearchIcon = styled(GoSearch)`
  position: absolute;
  z-index: 10;
  color: #fff;
  font-size: 20px;
  top: 15px;
  left: 15px;
`;
const SearchInput = styled.input`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  border-radius: 12px;
  outline: none;
  border: none;
  background: #1d1b31;
  font-size: 18px;
  color: #fff;
  padding-left: 60px;
`;
