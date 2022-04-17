export interface RepositoryItem {
  id: string;
  avatar: string;
  title: string;
  user: string;
  desc: string;
  date: string;
}

export interface SaveRepoState {
  repoList: RepositoryItem[];
}

export interface RepositoryState extends SaveRepoState {
  // loading, error, keyword, 검색된 레파지토리의 갯수도 추가
  loading: boolean;
}
