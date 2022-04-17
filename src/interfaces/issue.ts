import { RepositoryItem } from './repository';

export interface IssueItem extends RepositoryItem {
  url?: string;
}

export interface IssueState {
  loading: boolean;
  issueList: IssueItem[];
}
