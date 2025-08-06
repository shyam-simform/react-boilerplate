import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store';

interface AuthRouteProps {
  children: React.ReactNode;
}

const AuthRoute: React.FC<AuthRouteProps> = ({ children }) => {
  const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);

  // If user is authenticated, redirect to home
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  // If not authenticated, show the auth page (login/signup)
  return <>{children}</>;
};

export default AuthRoute;
