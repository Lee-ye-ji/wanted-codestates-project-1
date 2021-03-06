import { Dispatch, SetStateAction } from 'react';

export interface pageState {
  total: number;
  limit: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}
