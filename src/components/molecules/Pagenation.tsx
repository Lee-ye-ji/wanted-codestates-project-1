import styled from 'styled-components';
import { pageState } from '../../interfaces/page';

function Pagenation({ total, limit, page, setPage }: pageState): JSX.Element {
  const numPages = Math.ceil(total / limit);
  const numArr = Array.from({ length: numPages }, (v, i) => i + 1);
  return (
    <Nav>
      <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
        &lt;
      </Button>
      {numArr.map((_, i) => (
        <Button
          key={i + 1}
          onClick={() => setPage(i + 1)}
          // aria-current={page === i + 1 ? 'page' : ''}
          className={page === i + 1 ? 'page' : ''}
        >
          {i + 1}
        </Button>
      ))}
      <Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
        &gt;
      </Button>
    </Nav>
  );
}

export default Pagenation;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
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
