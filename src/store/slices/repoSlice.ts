import { createSlice } from '@reduxjs/toolkit';
import { RepositoryState } from '../../interfaces/repository';
import { repoThunk } from '../thunk/repoThunk';

const initialState: RepositoryState = { loading: false, repoList: [] };
export const repoSlice = createSlice({
  name: 'repo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(repoThunk.getRepo.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(repoThunk.getRepo.fulfilled, (state, action) => {
        state.repoList = action.payload;
      })
      .addCase(repoThunk.getRepo.rejected, (state, action) => {
        console.log(action.payload);
      });
  },
});
export const setRepo = repoSlice.actions;
export default repoSlice;
