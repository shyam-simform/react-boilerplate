# React 19 TypeScript Boilerplate

A modern, production-ready React boilerplate built with React 19, TypeScript, Redux Toolkit, and Tailwind CSS.

## 🚀 Features

- **React 19** with TypeScript for type safety
- **Redux Toolkit** with RTK Query for state management and API calls
- **React Router v6** for routing with protected routes
- **React Hook Form** with Zod validation
- **Tailwind CSS** for styling
- **Vitest** for testing with React Testing Library
- **File Upload** with validation and size limits
- **HTTP-only Cookie** authentication
- **Responsive Design** with mobile-first approach

## 📁 Project Structure

```
src/
├── components/
│   ├── common/           # Reusable components
│   ├── auth/            # Authentication components
│   └── post/            # Post-related components
├── pages/               # Page components
│   ├── auth/           # Login, Signup pages
│   └── post/           # Post listing, form pages
├── store/              # Redux store configuration
│   ├── api/            # RTK Query API definitions
│   └── slices/         # Redux slices
├── types/              # TypeScript type definitions
├── constants/          # Static labels and constants
├── utils/              # Utility functions
└── __Test__/           # Test files
```

## 🛠️ Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start development server:**

   ```bash
   npm run dev
   ```

3. **Run tests:**

   ```bash
   npm test
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 🔐 Authentication

The boilerplate uses HTTP-only cookies for authentication:

- Login and signup forms with validation
- Protected routes using `/profile` API validation
- Automatic token refresh handling
- Secure logout functionality

## 📝 Post Management

Complete CRUD operations for posts:

- Create new posts with file uploads
- Edit existing posts
- Delete posts (owner only)
- Image upload with format and size validation

## 🎨 Styling

- **Tailwind CSS** for utility-first styling
- **Responsive design** with mobile-first approach
- **Custom components** with consistent styling
- **Dark mode ready** (easily configurable)

## 🧪 Testing

- **Vitest** for fast unit testing
- **React Testing Library** for component testing
- **Test files** organized in `__Test__` folders
- **Coverage reports** available

## 📦 Common Components

### TextInput

```tsx
<TextInput
  label="Email"
  type="email"
  required
  error={errors.email?.message}
  {...register('email')}
/>
```

### FileUpload

```tsx
<FileUpload
  allowedFormats={['jpg', 'png', 'pdf']}
  maxFileSize={5 * 1024 * 1024} // 5MB
  maxFiles={3}
  onFilesChange={setSelectedFiles}
  currentFiles={selectedFiles}
/>
```

## 🔧 API Integration

### AuthAPI

- `useLoginMutation`
- `useSignupMutation`
- `useGetProfileQuery`
- `useLogoutMutation`

### PostAPI

- `useGetAllPostsQuery`
- `useGetPostByIdQuery`
- `useCreatePostMutation`
- `useUpdatePostMutation`
- `useDeletePostMutation`

## 📋 Naming Conventions

- **Redux Stores**: `userStore`, `postStore` (not `authSlice`)
- **API Files**: `AuthAPI`, `PostAPI`
- **Components**: PascalCase (`TextInput`, `FileUpload`)
- **Files**: kebab-case (`text-input.tsx`, `post-form.tsx`)

## 🎯 Static Labels

All static text is centralized in `src/constants/labels.ts` for easy internationalization and consistency.

## 🚀 Deployment

The project is ready for deployment to any static hosting service:

1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting service
3. Configure your backend API endpoints
4. Set up proper routing for SPA

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
