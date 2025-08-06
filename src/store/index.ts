import { configureStore } from '@reduxjs/toolkit';
import { AuthAPI } from './api/auth-api';
import { PostAPI } from './api/post-api';
import userStore from './slices/user-store';
import postStore from './slices/post-store';

export const store = configureStore({
  reducer: {
    user: userStore,
    post: postStore,
    [AuthAPI.reducerPath]: AuthAPI.reducer,
    [PostAPI.reducerPath]: PostAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    })
      .concat(AuthAPI.middleware)
      .concat(PostAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
