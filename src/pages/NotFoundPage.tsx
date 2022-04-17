import CenterTemplate from '../components/templates/CenterTemplate';
import ContentTemplate from '../components/templates/ContentTemplate';
function NotFoundPage(): JSX.Element {
  return (
    <ContentTemplate>
      <CenterTemplate>
        <p>페이지를 찾을 수 없습니다.</p>
      </CenterTemplate>
    </ContentTemplate>
  );
}

export default NotFoundPage;
