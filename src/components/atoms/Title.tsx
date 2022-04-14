import { ReactChildType } from '../../interfaces/react';
import { eclipse } from '../../styles/duplicate';
import styled from 'styled-components';

function Title({ children }: ReactChildType): JSX.Element {
  return <TitleStyle>{children}</TitleStyle>;
}

export default Title;

const TitleStyle = styled.h1`
  font-size: 15px;
  line-height: 15px;
  font-weight: bold;
  ${eclipse}
`;
