import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IssueState } from '../../interfaces/issue';
import { issueThunk } from '../thunk/issueThunk';

const initialState: IssueState = { loading: false, issueList: [] };
export const issueSlice = createSlice({
  name: 'issue',
  initialState,
  reducers: {
    setResetIssue(state, action: PayloadAction<any>) {
      state.issueList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(issueThunk.getIssue.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(issueThunk.getIssue.fulfilled, (state, action) => {
        state.issueList = action.payload;
      })
      .addCase(issueThunk.getIssue.rejected, (state, action) => {
        console.log(action.payload);
      });
  },
});
export const setIssue = issueSlice.actions;
export const { setResetIssue } = issueSlice.actions;
export default issueSlice;
