import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { User, LoginCredentials, SignupCredentials, ApiResponse } from '../../types';

// Simple in-memory authentication state for demo
let isUserLoggedIn = false;
let currentUser: User | null = null;

// Dummy user data generator
const generateDummyUser = (id?: number): User => ({
  id: id ? String(id) : String(Math.floor(Math.random() * 1000) + 1),
  fullName: `User ${Math.floor(Math.random() * 100)}`,
  email: `user${Math.floor(Math.random() * 100)}@example.com`,
  createdAt: new Date().toISOString(),
  role: 'analyst',
  updatedAt: new Date().toISOString(),
});

export const AuthAPI = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com', // Using JSONPlaceholder as dummy API
    credentials: 'include',
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    login: builder.mutation<ApiResponse<{ user: User }>, LoginCredentials>({
      queryFn: async (credentials) => {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Simulate login validation
        if (credentials.email && credentials.password) {
          const user = generateDummyUser();
          user.email = credentials.email;
          user.fullName = credentials.email.split('@')[0]; // Use email prefix as name
          user.role = 'analyst'; // Default role

          // Set authentication state
          isUserLoggedIn = true;
          currentUser = user;

          return {
            data: {
              success: true,
              message: 'Login successful',
              data: { user },
            },
          };
        }

        return {
          error: {
            status: 401,
            data: { success: false, message: 'Invalid credentials' },
          },
        };
      },
      invalidatesTags: ['User'],
    }),

    signup: builder.mutation<ApiResponse<{ user: User }>, SignupCredentials>({
      queryFn: async (credentials) => {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1200));

        // Simulate signup validation
        if (credentials.email && credentials.password && credentials.fullName) {
          const user = generateDummyUser();
          user.fullName = credentials.fullName;
          user.email = credentials.email;

          // Set authentication state
          isUserLoggedIn = true;
          currentUser = user;

          return {
            data: {
              success: true,
              message: 'Account created successfully',
              data: { user },
            },
          };
        }

        return {
          error: {
            status: 400,
            data: { success: false, message: 'Invalid signup data' },
          },
        };
      },
      invalidatesTags: ['User'],
    }),

    getProfile: builder.query<ApiResponse<User>, void>({
      queryFn: async () => {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 800));

        // Check if user is logged in
        if (isUserLoggedIn && currentUser) {
          return {
            data: {
              success: true,
              message: 'Profile retrieved successfully',
              data: currentUser,
            },
          };
        }

        return {
          error: {
            status: 401,
            data: { success: false, message: 'Not authenticated' },
          },
        };
      },
      providesTags: ['User'],
    }),

    logout: builder.mutation<ApiResponse<null>, void>({
      queryFn: async () => {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 500));

        // Clear authentication state
        isUserLoggedIn = false;
        currentUser = null;

        return {
          data: {
            success: true,
            message: 'Logged out successfully',
            data: null,
          },
        };
      },
      invalidatesTags: ['User'],
    }),
  }),
});

export const { useLoginMutation, useSignupMutation, useGetProfileQuery, useLogoutMutation } =
  AuthAPI;
