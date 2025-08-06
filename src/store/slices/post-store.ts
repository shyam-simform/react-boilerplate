import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { PostState, Post } from '../../types';

const initialState: PostState = {
  posts: [],
  currentPost: null,
  isLoading: false,
  error: null,
};

const postStore = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
      state.error = null;
    },
    setCurrentPost: (state, action: PayloadAction<Post | null>) => {
      state.currentPost = action.payload;
    },
    addPost: (state, action: PayloadAction<Post>) => {
      state.posts.unshift(action.payload);
    },
    updatePost: (state, action: PayloadAction<Post>) => {
      const index = state.posts.findIndex((post) => post.id === action.payload.id);
      if (index !== -1) {
        state.posts[index] = action.payload;
      }
      if (state.currentPost?.id === action.payload.id) {
        state.currentPost = action.payload;
      }
    },
    removePost: (state, action: PayloadAction<string>) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
      if (state.currentPost?.id === action.payload) {
        state.currentPost = null;
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const {
  setPosts,
  setCurrentPost,
  addPost,
  updatePost,
  removePost,
  setLoading,
  setError,
  clearError,
} = postStore.actions;

export default postStore.reducer;
