import styled from 'styled-components';
import { pageState } from '../../interfaces/page';
import { useAppDispatch, useAppSelector } from '../../store/config';
import { repoThunk } from '../../store/thunk/repoThunk';

function RepoPage({ total, page, setPage }: pageState): JSX.Element {
  const dispatch = useAppDispatch();
  const numArr = Array.from({ length: total }, (v, i) => i + 1);
  const keyword = useAppSelector((state) => state.repo.keyword);
  const onPageClick = (p: number) => {
    setPage(p);
    dispatch(repoThunk.getRepo({ keyword, page }));
  };
  return (
    <Nav>
      <Button onClick={() => onPageClick(page - 1)} disabled={page === 1}>
        &lt;
      </Button>
      {numArr.map((_, i) => (
        <Button
          key={i + 1}
          onClick={() => onPageClick(i + 1)}
          className={page === i + 1 ? 'page' : ''}
        >
          {i + 1}
        </Button>
      ))}
      <Button onClick={() => onPageClick(page + 1)} disabled={page === total}>
        &gt;
      </Button>
    </Nav>
  );
}

export default RepoPage;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
  padding-bottom: 10px;
`;

const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin: 0;
  background: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
  font-size: 1rem;

  &:hover {
    background: ${({ theme }) => theme.color.main_dark_green};
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    background: ${({ theme }) => theme.color.main_dark_green};
    cursor: revert;
    transform: revert;
  }

  &.page {
    background: ${({ theme }) => theme.color.main_green};
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;
