import { createSlice } from '@reduxjs/toolkit';
import { RepositoryState } from '../../interfaces/repository';
import { SearchThunk } from '../thunk/searchThunk';

const initialState: RepositoryState = { repoList: [] };
export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(SearchThunk.getRepo.fulfilled, (state, action) => {
        state.repoList = action.payload;
      })
      .addCase(SearchThunk.getRepo.rejected, (state, action) => {
        console.log(action.payload);
      });
  },
});
export const setSearch = searchSlice.actions;
export default searchSlice;
