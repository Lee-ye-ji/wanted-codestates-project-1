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
  loading: boolean;
  total: number;
  keyword: string;
  error: any;
}
