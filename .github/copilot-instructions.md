# Copilot Instructions

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Structure Guidelines

This is a React 19 TypeScript boilerplate with the following conventions:

### Naming Conventions

- **Redux Stores**: Use simple naming like `userStore`, `postStore` (not `authSlice`)
- **API Files**: Use naming like `AuthAPI`, `PostAPI`
- **Components**: Use PascalCase for component names
- **Files**: Use kebab-case for file names

### State Management

- Use Redux Toolkit with RTK Query for API calls
- Store access tokens in HTTP-only cookies
- Use `/profile` API calls to validate user in ProtectedRoute

### Testing

- Use Vitest for testing
- Create `__Test__` folders for test files
- Follow testing best practices

### File Upload

- Common FileUpload component with props for file formats and size limits
- Maximum 5MB per file
- Support multiple file uploads with configurable limits

### Common Components

- Create reusable components like TextInput, FileUpload
- Use React Hook Form for forms
- Avoid using `any` type in TypeScript

### Static Content

- Store all static labels in a centralized file for consistency across modules
