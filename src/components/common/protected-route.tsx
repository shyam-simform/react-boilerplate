import React from 'react';
import { Navigate } from 'react-router-dom';
import { useGetProfileQuery } from '../../store/api/auth-api';
import { LABELS } from '../../constants/labels';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { data, isLoading, error } = useGetProfileQuery();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
        <span className="ml-3 text-lg">{LABELS.LOADING}</span>
      </div>
    );
  }

  if (error || !data?.success) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
