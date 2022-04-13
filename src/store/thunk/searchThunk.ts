import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api';
import { RepositoryItem } from '../../interfaces/repository';

export const SearchThunk = {
  getRepo: createAsyncThunk(
    'search/getRepo',
    async ({ keyword, page }: { keyword: string; page: number }, thunkAPI) => {
      try {
        const response = await api.get(`/search/repositories`, {
          params: {
            q: keyword,
            per_page: 8,
            page,
          },
        });
        const data = response.data?.items;
        const newData = data.map(
          (item: any) =>
            ({
              id: item.id,
              avatar: item.owner.avatar_url,
              title: item.name,
              user: item.owner.login,
              desc: item.description,
              date: item.updated_at,
              saved: false,
            } as RepositoryItem)
        );
        return newData;
      } catch (err) {
        return thunkAPI.rejectWithValue(err);
      }
    }
  ),
};
