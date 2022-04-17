import styled from 'styled-components';
import { ReactMultipleChildType } from '../../interfaces/react';

function GridTemplate({ children }: ReactMultipleChildType): JSX.Element {
  return <Container>{children}</Container>;
}

export default GridTemplate;

const Container = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 30px;
`;
