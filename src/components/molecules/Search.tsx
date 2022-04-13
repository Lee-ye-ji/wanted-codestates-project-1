import styled from 'styled-components';
import { GoSearch } from 'react-icons/go';
import { useState, useCallback } from 'react';
import { useAppDispatch } from '../../store/config';
import { SearchThunk } from '../../store/thunk/searchThunk';

function Search(): JSX.Element {
  const dispatch = useAppDispatch();
  const [keyword, setKeyword] = useState('');
  const searchOnChange = useCallback(
    (e) => {
      setKeyword(e.target.value);
    },
    [keyword]
  );

  const searchOnClick = () => {
    const page = 1;
    dispatch(SearchThunk.getRepo({ keyword, page }));
  };

  const searchOnKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      searchOnClick();
    }
  };

  return (
    <SearchStyle>
      <SearchIcon onClick={searchOnClick} />
      <SearchInput placeholder="Search" onChange={searchOnChange} onKeyPress={searchOnKeyPress} />
    </SearchStyle>
  );
}

export default Search;

const SearchStyle = styled.div`
  position: relative;
  width: 400px;
  height: 50px;
  margin: 10px auto;
`;

const SearchIcon = styled(GoSearch)`
  position: absolute;
  z-index: 10;
  color: ${({ theme }) => theme.color.white};
  font-size: 20px;
  top: 15px;
  right: 15px;
`;
const SearchInput = styled.input`
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 12px;
  outline: none;
  border: none;
  background: ${({ theme }) => theme.color.main_black};
  font-size: 18px;
  color: ${({ theme }) => theme.color.white};
  /* padding-right: 10px; */
  padding-left: 10px;
`;
