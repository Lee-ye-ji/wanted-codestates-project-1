import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RepositoryItem, SaveRepoState } from '../../interfaces/repository';

const initialState: SaveRepoState = { repoList: [] };
export const saveSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSave(state, action: PayloadAction<RepositoryItem>) {
      state.repoList.push(action.payload);
    },
    setDelete(state, action: PayloadAction<string>) {
      const data = state.repoList.filter((item) => item.id !== action.payload);
      state.repoList = data;
    },
  },
});
export const { setSave, setDelete } = saveSlice.actions;
export default saveSlice;
