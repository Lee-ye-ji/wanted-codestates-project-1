export interface RepositoryItem {
  id: string;
  avatar: string;
  title: string;
  user: string;
  desc: string;
  date: string;
  saved: boolean;
}

export interface RepositoryState {
  // loading, error, keyword, 검색된 레파지토리의 갯수도 추가
  repoList: RepositoryItem[];
}
