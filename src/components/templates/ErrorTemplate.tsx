import styled from 'styled-components';
import { GoOctoface } from 'react-icons/go';

function ErrorTemplate(): JSX.Element {
  return (
    <Center>
      <CatIcon />
      <h3>에러가 발생하였습니다.</h3>
      <h3>관리자에게 문의하세요</h3>
    </Center>
  );
}

export default ErrorTemplate;

const Center = styled.div`
  border: 1px solid ${({ theme }) => theme.color.black};
  padding: 30px;
  border-radius: 10px;
`;

const CatIcon = styled(GoOctoface)`
  font-size: 50px;
`;
