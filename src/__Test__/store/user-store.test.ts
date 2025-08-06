import { describe, it, expect } from 'vitest';
import userStore, {
  setUser,
  clearUser,
  setLoading,
  setError,
  clearError,
} from '../../store/slices/user-store';
import type { User, AuthState } from '../../types';

const mockUser: User = {
  id: '1',
  email: 'test@example.com',
  fullName: 'Test User',
  createdAt: '2024-01-01T00:00:00Z',
  updatedAt: '2024-01-01T00:00:00Z',
};

describe('userStore', () => {
  const initialState: AuthState = {
    user: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
  };

  it('should return the initial state', () => {
    expect(userStore(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle setUser', () => {
    const actual = userStore(initialState, setUser(mockUser));
    expect(actual.user).toEqual(mockUser);
    expect(actual.isAuthenticated).toBe(true);
    expect(actual.error).toBe(null);
  });

  it('should handle clearUser', () => {
    const stateWithUser: AuthState = {
      user: mockUser,
      isAuthenticated: true,
      isLoading: false,
      error: null,
    };

    const actual = userStore(stateWithUser, clearUser());
    expect(actual.user).toBe(null);
    expect(actual.isAuthenticated).toBe(false);
    expect(actual.error).toBe(null);
  });

  it('should handle setLoading', () => {
    const actual = userStore(initialState, setLoading(true));
    expect(actual.isLoading).toBe(true);
  });

  it('should handle setError', () => {
    const errorMessage = 'Authentication failed';
    const actual = userStore(initialState, setError(errorMessage));
    expect(actual.error).toBe(errorMessage);
    expect(actual.isLoading).toBe(false);
  });

  it('should handle clearError', () => {
    const stateWithError: AuthState = {
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: 'Some error',
    };

    const actual = userStore(stateWithError, clearError());
    expect(actual.error).toBe(null);
  });
});
