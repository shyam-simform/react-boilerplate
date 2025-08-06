import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Post, CreatePostData, UpdatePostData, ApiResponse, User } from '../../types';

// Dummy user generator for posts
const generateDummyUser = (id?: number): User => ({
  id: String(id || Math.floor(Math.random() * 100) + 1),
  fullName: `Author ${Math.floor(Math.random() * 100)}`,
  email: `author${Math.floor(Math.random() * 100)}@example.com`,
  createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
  updatedAt: new Date().toISOString(),
});

// Dummy post data generator
const generateDummyPost = (id?: number): Post => {
  const user = generateDummyUser();
  return {
    id: String(id || Math.floor(Math.random() * 1000) + 1),
    title: `Sample Post ${Math.floor(Math.random() * 100)}`,
    content: `This is a dummy post content with some random text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Post number ${Math.floor(Math.random() * 100)}.`,
    imageUrl: `https://picsum.photos/400/300?random=${Math.floor(Math.random() * 100)}`,
    userId: user.id,
    user: user,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    updatedAt: new Date().toISOString(),
  };
};

// Generate some dummy posts
const dummyPosts: Post[] = Array.from({ length: 20 }, (_, index) => generateDummyPost(index + 1));

export const PostAPI = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com', // Using JSONPlaceholder as dummy API
    credentials: 'include',
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getAllPosts: builder.query<ApiResponse<Post[]>, void>({
      queryFn: async () => {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        return {
          data: {
            success: true,
            message: 'Posts retrieved successfully',
            data: dummyPosts,
          },
        };
      },
      providesTags: ['Post'],
    }),

    getPostById: builder.query<ApiResponse<Post>, string>({
      queryFn: async (id) => {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 800));

        const post =
          dummyPosts.find((p) => p.id.toString() === id) || generateDummyPost(parseInt(id));

        return {
          data: {
            success: true,
            message: 'Post retrieved successfully',
            data: post,
          },
        };
      },
      providesTags: (_result, _error, id) => [{ type: 'Post', id }],
    }),

    createPost: builder.mutation<ApiResponse<Post>, CreatePostData>({
      queryFn: async (postData) => {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1200));

        const newPost = generateDummyPost();
        newPost.title = postData.title;
        newPost.content = postData.content;

        // Add to dummy posts array
        dummyPosts.unshift(newPost);

        return {
          data: {
            success: true,
            message: 'Post created successfully',
            data: newPost,
          },
        };
      },
      invalidatesTags: ['Post'],
    }),

    updatePost: builder.mutation<ApiResponse<Post>, UpdatePostData>({
      queryFn: async ({ id, ...postData }) => {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const postIndex = dummyPosts.findIndex((p) => p.id.toString() === id);
        let updatedPost: Post;

        if (postIndex !== -1) {
          updatedPost = {
            ...dummyPosts[postIndex],
            title: postData.title,
            content: postData.content,
            updatedAt: new Date().toISOString(),
          };
          dummyPosts[postIndex] = updatedPost;
        } else {
          updatedPost = generateDummyPost(parseInt(id));
          updatedPost.title = postData.title;
          updatedPost.content = postData.content;
        }

        return {
          data: {
            success: true,
            message: 'Post updated successfully',
            data: updatedPost,
          },
        };
      },
      invalidatesTags: (_result, _error, { id }) => [{ type: 'Post', id }, 'Post'],
    }),

    deletePost: builder.mutation<ApiResponse<null>, string>({
      queryFn: async (id) => {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 600));

        const postIndex = dummyPosts.findIndex((p) => p.id.toString() === id);
        if (postIndex !== -1) {
          dummyPosts.splice(postIndex, 1);
        }

        return {
          data: {
            success: true,
            message: 'Post deleted successfully',
            data: null,
          },
        };
      },
      invalidatesTags: ['Post'],
    }),
  }),
});

export const {
  useGetAllPostsQuery,
  useGetPostByIdQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = PostAPI;
