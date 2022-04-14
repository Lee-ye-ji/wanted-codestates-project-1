import styled from 'styled-components';
import { IoCheckmarkOutline, IoAlertOutline, IoCloseOutline, IoLogoOctocat } from 'react-icons/io5';
import { notiIcon } from '../../styles/duplicate';
import { slideUp } from '../../styles/transitions';
import { handlerColorType } from '../../styles/color';

const NotificationType = (type: string) => {
  switch (type) {
    case 'success':
      return <SuccessIcon />;
    case 'warning':
      return <WarningIcon />;
    case 'error':
      return <ErrorIcon />;
    default:
      return <CatIcon />;
  }
};

function Notification({ type, message }: { type: string; message: string }): JSX.Element {
  return (
    <Wrapper>
      <Content color={type}>
        {NotificationType(type)}
        <p>{message}</p>
      </Content>
    </Wrapper>
  );
}

export default Notification;

const Wrapper = styled.div`
  width: 250px;
  height: 50px;
  z-index: 20;
  position: fixed;
  right: 10px;
  top: 10px;
  animation: ${slideUp} 5s;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  line-height: 50px;
  background-color: ${({ color }: { color: string }) => handlerColorType(color)};
  color: ${({ theme }) => theme.color.white};
`;

// icon
const SuccessIcon = styled(IoCheckmarkOutline)`
  ${notiIcon}
`;
const WarningIcon = styled(IoAlertOutline)`
  ${notiIcon}
`;
const ErrorIcon = styled(IoCloseOutline)`
  ${notiIcon}
`;
const CatIcon = styled(IoLogoOctocat)`
  ${notiIcon}
`;
