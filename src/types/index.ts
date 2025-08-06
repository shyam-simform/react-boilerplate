// User Types
export interface User {
  id: string;
  email: string;
  fullName: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupCredentials {
  email: string;
  password: string;
  confirmPassword: string;
  fullName: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

// Post Types
export interface Post {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
  userId: string;
  user: User;
  createdAt: string;
  updatedAt: string;
}

export interface CreatePostData {
  title: string;
  content: string;
  image?: File;
}

export interface UpdatePostData {
  id: string;
  title: string;
  content: string;
  image?: File;
}

export interface PostState {
  posts: Post[];
  currentPost: Post | null;
  isLoading: boolean;
  error: string | null;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
}

export interface ApiError {
  success: false;
  message: string;
  errors?: Record<string, string[]>;
}

// Common Types
export interface FileUploadProps {
  allowedFormats: string[];
  maxFileSize?: number;
  maxFiles?: number;
  onFilesChange: (files: File[]) => void;
  currentFiles?: File[];
  error?: string;
}

export interface TextInputProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'password' | 'textarea';
  placeholder?: string;
  required?: boolean;
  error?: string;
  rows?: number;
}
