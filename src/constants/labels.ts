export const LABELS = {
  // Auth Labels
  LOGIN: 'Login',
  SIGNUP: 'Sign Up',
  EMAIL: 'Email',
  PASSWORD: 'Password',
  CONFIRM_PASSWORD: 'Confirm Password',
  FULL_NAME: 'Full Name',
  SUBMIT: 'Submit',
  ALREADY_HAVE_ACCOUNT: 'Already have an account?',
  DONT_HAVE_ACCOUNT: "Don't have an account?",

  // Post Labels
  POSTS: 'Posts',
  ADD_POST: 'Add Post',
  EDIT_POST: 'Edit Post',
  POST_TITLE: 'Post Title',
  POST_CONTENT: 'Post Content',
  POST_IMAGE: 'Post Image',
  CREATE_POST: 'Create Post',
  UPDATE_POST: 'Update Post',
  DELETE_POST: 'Delete Post',

  // Common Labels
  SAVE: 'Save',
  CANCEL: 'Cancel',
  DELETE: 'Delete',
  EDIT: 'Edit',
  VIEW: 'View',
  BACK: 'Back',
  LOADING: 'Loading...',

  // File Upload Labels
  UPLOAD_FILE: 'Upload File',
  SELECT_FILES: 'Select Files',
  MAX_FILE_SIZE: 'Maximum file size is 5MB',
  ALLOWED_FORMATS: 'Allowed formats',
  FILE_UPLOAD_ERROR: 'File upload failed',

  // Navigation
  HOME: 'Home',
  LOGOUT: 'Logout',
  PROFILE: 'Profile',

  // Messages
  LOGIN_SUCCESS: 'Login successful',
  LOGIN_ERROR: 'Login failed',
  SIGNUP_SUCCESS: 'Account created successfully',
  SIGNUP_ERROR: 'Account creation failed',
  POST_CREATED: 'Post created successfully',
  POST_UPDATED: 'Post updated successfully',
  POST_DELETED: 'Post deleted successfully',
  UNAUTHORIZED: 'Unauthorized access',

  // API Messages
  API_ERROR: 'Something went wrong. Please try again.',
  NETWORK_ERROR: 'Network error. Please check your connection.',
  SERVER_ERROR: 'Server error. Please try again later.',
  DUMMY_API_NOTE: 'Using dummy data for demonstration',

  // Validation Messages
  REQUIRED_FIELD: 'This field is required',
  INVALID_EMAIL: 'Please enter a valid email',
  PASSWORD_MIN_LENGTH: 'Password must be at least 6 characters',
  PASSWORDS_NOT_MATCH: 'Passwords do not match',
} as const;

export type LabelKey = keyof typeof LABELS;
