import { ReactChildType } from '../../interfaces/react';
import { eclipse } from '../../styles/duplicate';
import styled from 'styled-components';

function User({ children }: ReactChildType): JSX.Element {
  return <UserStyle>{children}</UserStyle>;
}

export default User;

const UserStyle = styled.h2`
  font-size: 12px;
  color: ${({ theme }) => theme.color.gray};
  font-weight: bold;
  ${eclipse}
`;
