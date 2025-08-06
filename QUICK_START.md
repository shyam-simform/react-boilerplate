# 🚀 Quick Start Guide

Welcome to your new React 19 TypeScript Boilerplate! This guide will help you get started quickly.

## ⚡ Quick Setup

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start development server:**

   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Visit [http://localhost:5173](http://localhost:5173)

## 🧪 Run Tests

```bash
# Run tests in watch mode
npm test

# Run tests once
npm run test:run
```

## 🏗️ Build for Production

```bash
npm run build
```

## 📁 What's Included

### ✅ Core Features

- **React 19** with TypeScript
- **Redux Toolkit** with RTK Query
- **React Router** with protected routes
- **Tailwind CSS** for styling
- **React Hook Form** with Zod validation
- **Vitest** for testing

### 🔐 Authentication System

- Login/Signup forms with validation
- HTTP-only cookie authentication
- Protected routes
- Profile API validation

### 📝 Post Management

- Create, read, update, delete posts
- File upload with validation
- Image support (jpg, png, gif, webp)
- Maximum 5MB file size limit

### 🧪 Testing Setup

- Component tests with React Testing Library
- Redux store tests
- Utility function tests
- Coverage reporting

### 🎨 UI Components

- **TextInput** - Reusable form input with validation
- **FileUpload** - File upload with drag & drop
- **Navigation** - Responsive navigation bar
- **ProtectedRoute** - Route protection wrapper
- **LoadingSpinner** - Loading indicator

## 🚀 Start Building

1. **Customize the brand:**
   - Update `src/constants/labels.ts` for your app's text
   - Modify the navigation in `src/components/common/navigation.tsx`

2. **Add your API endpoints:**
   - Update the baseURL in `src/store/api/auth-api.ts` and `src/store/api/post-api.ts`
   - Configure your backend API URLs

3. **Extend the features:**
   - Add new pages in `src/pages/`
   - Create new components in `src/components/`
   - Add new Redux slices in `src/store/slices/`

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests in watch mode
- `npm run test:run` - Run tests once
- `npm run lint` - Run ESLint

## 🔧 Configuration

### Environment Variables

Copy `.env.example` to `.env.local` and configure:

- `VITE_API_BASE_URL` - Your API base URL
- `VITE_APP_TITLE` - Your app title

### Customization

- **Styling**: Modify `tailwind.config.js` and `src/index.css`
- **Types**: Add new types in `src/types/index.ts`
- **Constants**: Update labels in `src/constants/labels.ts`

Happy coding! 🎉
