import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RootState } from '../store';
import LoadingSpinner from '../components/common/loading-spinner';

interface PublicRouterProps {
  children: ReactNode;
}

const PublicRouter = ({ children }: PublicRouterProps) => {
  const location = useLocation();
  const { user, isLoading } = useSelector((state: RootState) => state.user);

  // Show loading state while checking authentication
  if (isLoading) {
    return <LoadingSpinner />;
  }

  // If user is authenticated and tries to access public routes like login/signup
  // redirect them to the page they came from or home page
  if (user) {
    const from = location.state?.from?.pathname || '/';
    return <Navigate to={from} replace />;
  }

  // If user is not authenticated, allow access to public routes
  return <>{children}</>;
};

export default PublicRouter;
