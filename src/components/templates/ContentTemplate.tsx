import styled from 'styled-components';
import { ReactMultipleChildType } from '../../interfaces/react';

function ContentTemplate({ children }: ReactMultipleChildType): JSX.Element {
  return <Page>{children}</Page>;
}

export default ContentTemplate;

const Page = styled.div`
  position: absolute;
  height: 100%;
  width: calc(100% - 300px);
  left: 280px;
`;
