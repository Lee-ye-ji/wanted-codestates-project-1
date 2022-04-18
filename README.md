# wanted-codestates-project-1

Github 저장소를 등록하고, 등록한 저장소의 이슈를 모아 보여주는 서비스입니다.

## 사용한 기술 스택

<img src="https://img.shields.io/badge/React-61DAFB.svg?&style=for-the-badge&logo=React&logoColor=000"/> <img src="https://img.shields.io/badge/Redux Toolkit-7248B6.svg?&style=for-the-badge&logo=Redux&logoColor=fff"/> <img src="https://img.shields.io/badge/Styled Components-E6526F.svg?&style=for-the-badge&logo=StyledComponents&logoColor=fff"/>

## 프로젝트 실행 방법

### 배포

[https://github-issue.surge.sh/![image](https://user-images.githubusercontent.com/59958929/163743900-0b955a88-e7eb-4d73-a1d7-0d942902b900.png)](https://github-issue.surge.sh/)

### 로컬

1. `git clone https://github.com/Lee-ye-ji/wanted-codestates-project-1.git`
2. `npm install`
3. `npm run start`

## 프로젝트 구조

[Atomic Design Pattern](https://velog.io/@thsoon/%EC%93%B8%EB%95%8C%EC%97%86%EC%9D%B4-%EA%B3%A0%ED%80%84%EC%9D%B8-%ED%88%AC%EB%91%90%EB%A6%AC%EC%8A%A4%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0-FE-2.-%EB%B7%B0-%EC%84%A4%EA%B3%84)을 이용하여 컴포넌트를 재사용성을 높이고자 하였습니다.

```
--📁 src
  ---📂 api ➡ axios 초기 설정
  ---📂 components ➡ 컴포넌트 폴더
    ---  📂 atoms - 가장 작은 단위의 컴포넌트(title, Loading 등)
    ---  📂 molecules - atoms들을 최소의 역할을 수행할 수 있게 합한 폴더(Pagenation, search등)
    ---  📂 organisms - molecules, atoms를 이용해 데이터를 불러올 수 있도록 기능에 맞게 나눈 폴더(issueCard, repoCard 등)
    ---  📂 templates - 페이지의 레이아웃을 사용할 수 있는 폴더
  ---📁 interfaces ➡ Typescript를 위한 interface 폴더
  ---📁 pages ➡ 페이지 컴포넌트 폴더
  ---📁 store ➡ redux-toolkit를 이용하여 전역 관리한 폴더
  ---📁 styles ➡ 스타일 관련 파일 폴더
    ---  📄 color.ts - 프로젝트의 color 모아놓은 파일
    ---  📄 duplicate.ts - css가 중복되는 부분을 재사용성을 위해 모아놓은 파일
    ---  📄 global.ts - 전역관리 css파일
    ---  📄 theme.ts - color, size의 css파일
    ---  📄 transitions.ts - 애니메이션 css파일
```

## 구현한 기능 목록

1. 검색창에 Repository명을 입력해서 Repository를 검색
2. 검색된 Public Repository를 등록
   - 등록 개수는 최대 4개로 제한하며, 최대 개수 초과 등록 시 이를 사용자에게 알려줌
   - LocalStorage에 저장
3. 등록된 Repository를 삭제가능
4. 등록된 각각의 Public Repository의 issue를 한 페이지에서 모아서 볼 수 있음
   - 해당 issue를 클릭하면 Github의 상세 페이지로 이동
   - 페이지네이션을 통해서 계속해서 issue를 모아서 볼 수 있음

## 구현한 방법

`Notification.tsx` <br/>

```tsx
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
```

레파지토리가 저장되거나 삭제되었을 때 사용자에게 알려주는 알림을 직접 구현하였습니다.
크게 success, warning, error, 기타 4가지의 경우로 나누어서 성공 시에는 초록색, 경고 시에는 노란색, 에러 시에는 빨간색으로 표시하였습니다.
해당 출력되는 메시지는 컴포넌트를 사용시에 직접 넣을 수 있도록 재사용성을 높였습니다. <br/>

`Pagenation.tsx` <br/>

![image](https://user-images.githubusercontent.com/59958929/163747703-e3ac3ffe-7b99-4174-ab70-2a2478e7f969.png) <br/>

issuePage와 RepoPage에도 검색 결과에 따라 페이지네이션이 적용될 수 있도록 구현하였습니다.
다만 레파지토리 검색 시에 나오는 total_count로 계산해서 나타낼 시에 너무 많은 로딩 현상이 발생되어 페이지가 먹통되는 현상이 있었습니다.
그래서 100개 이상이면 최대 10개의 page만 볼 수 있도록 수정하였습니다.

## 어려웠던 점

redux의 boilerplate를 줄이고자, redux-toolkit을 이용하여 전역관리를 하고자 하였습니다.
하지만 생각보다 redux와 문법이 달라서 해당 문법을 숙지하는 데 조금 시간이 걸렸습니다.
처음에 어떻게 사용해야하는지에 대해 공식문서를 봐도 이해가 되지 않아 여러 블로그를 보면서 활용하기 위해 노력하였습니다.
그렇지만 해당 내용에 대해 이해 한 후 비동기 호출이나 localStorage에 대한 기능이 잘 되어있어서 수월하게 작성할 수 있었습니다.
아래의 링크들은 제가 참고한 문서들입니다.

- [React Redux Toolkit 사용하기](https://freestrokes.tistory.com/161)
- [리덕스에 스토리지 적용하기](https://velog.io/@gunu/%EB%A6%AC%EB%8D%95%EC%8A%A4%EC%97%90-%EC%8A%A4%ED%86%A0%EB%A6%AC%EC%A7%80-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0)
