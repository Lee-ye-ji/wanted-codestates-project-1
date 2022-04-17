import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import { persistReducer } from 'redux-persist';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import repoSlice from './slices/repoSlice';
import saveSlice from './slices/saveSlice';
import issueSlice from './slices/issueSlice';

const logger = createLogger();

const persistConfig = {
  key: 'root',
  // localStorage에 저장합니다.
  storage: storage,
  // 여러개의 reducer 중에 todo reducer만 localstorage에 저장합니다.
  whitelist: ['save'],
  // blacklist -> 그것만 제외합니다
};

const rootReducer = combineReducers({
  repo: repoSlice.reducer,
  save: saveSlice.reducer,
  issue: issueSlice.reducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const initialState = {};

export const store = configureStore({
  // reducer: rootReducer,
  // localStorage 저장을 위해 persistedReducer로 변경
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: initialState,
  enhancers: (defaultEnhancers) => [...defaultEnhancers],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
