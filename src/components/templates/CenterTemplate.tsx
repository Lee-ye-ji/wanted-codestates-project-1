import styled from 'styled-components';
import { ReactMultipleChildType } from '../../interfaces/react';

function CenterTemplate({ children }: ReactMultipleChildType): JSX.Element {
  return <Center>{children}</Center>;
}

export default CenterTemplate;

const Center = styled.div`
  font-size: 20px;
  font-weight: bold;
  display: grid;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  text-align: center;
`;
