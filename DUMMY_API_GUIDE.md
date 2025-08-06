# Dummy API Configuration

This project is currently configured to use dummy APIs for development and testing purposes.

## Current Setup

### Authentication API (`auth-api.ts`)

- **Base URL**: Simulated with `queryFn` (no actual API calls)
- **Features**:
  - Login simulation with 1 second delay
  - Signup simulation with 1.2 second delay
  - Profile retrieval with 0.8 second delay
  - Logout simulation with 0.5 second delay
  - Generates random user data for testing

### Posts API (`post-api.ts`)

- **Base URL**: Simulated with `queryFn` (no actual API calls)
- **Features**:
  - 20 pre-generated dummy posts
  - Random images from Picsum (https://picsum.photos)
  - CRUD operations with realistic delays
  - In-memory storage simulation

## Dummy Data Examples

### User Data Structure

```typescript
{
  id: 123,
  fullName: "User 45",
  email: "user45@example.com",
  role: "admin" | "analyst" | "hospital"
}
```

### Post Data Structure

```typescript
{
  id: 1,
  title: "Sample Post 67",
  content: "This is a dummy post content...",
  imageUrl: "https://picsum.photos/400/300?random=67",
  authorId: 5,
  createdAt: "2024-01-15T10:30:00.000Z",
  updatedAt: "2024-01-15T10:30:00.000Z"
}
```

## Testing the APIs

### Authentication

1. Use any email/password combination for login
2. Signup requires email, password, and fullName
3. Profile automatically returns a random user
4. Logout always succeeds

### Posts

1. View all posts on the posts page
2. Create new posts (title and content required)
3. Posts persist in memory during the session
4. Delete and update operations work on existing posts

## Switching to Real API

When ready to connect to a real API:

1. **Update Base URLs**: Change the `baseUrl` in both API files
2. **Remove queryFn**: Replace `queryFn` with `query` for actual HTTP calls
3. **Update Headers**: Add authentication tokens as needed
4. **Handle Real Responses**: Adjust response handling for your API format

### Example for Real API:

```typescript
// Replace queryFn with query
login: builder.mutation<ApiResponse<{ user: User }>, LoginCredentials>({
  query: (credentials) => ({
    url: '/login',
    method: 'POST',
    body: credentials,
  }),
  invalidatesTags: ['User'],
}),
```

## Benefits of Dummy API

✅ **No Backend Required**: Start frontend development immediately  
✅ **Realistic Delays**: Simulates real network latency  
✅ **Consistent Data**: Predictable responses for testing  
✅ **Offline Development**: Works without internet connection  
✅ **Easy Testing**: Controlled environment for edge cases  
✅ **Fast Iteration**: No backend setup or maintenance needed

## Mock Data Features

- **Randomized Content**: Each refresh gives different data
- **Realistic Images**: Uses Picsum for varied placeholder images
- **Time Stamps**: Proper date formatting and recent timestamps
- **CRUD Persistence**: Changes persist during browser session
- **Error Simulation**: Can easily add error conditions for testing
