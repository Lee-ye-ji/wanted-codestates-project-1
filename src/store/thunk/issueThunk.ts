import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api';
import { IssueItem } from '../../interfaces/issue';

export const issueThunk = {
  getIssue: createAsyncThunk(
    'issue/getIssue',
    async ({ owner, repo }: { owner: string | undefined; repo: string | undefined }, thunkAPI) => {
      try {
        const response = await api.get(`/repos/${owner}/${repo}/issues`);
        const data = response?.data;
        const newData = data.map(
          (item: any) =>
            ({
              id: item.id,
              avatar: item.user.avatar_url,
              title: item.name,
              user: item.user.login,
              desc: item.body,
              date: item.updated_at,
              url: item.html_url,
            } as IssueItem)
        );
        return newData;
      } catch (err) {
        return thunkAPI.rejectWithValue(err);
      }
    }
  ),
};
