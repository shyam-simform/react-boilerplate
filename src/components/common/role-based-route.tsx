import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../../store';

interface RoleBasedRouteProps {
  allowedRoles: string[];
  children: ReactNode;
}

const RoleBasedRoute = ({ allowedRoles, children }: RoleBasedRouteProps) => {
  const user = useSelector((state: RootState) => state.user.user);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default RoleBasedRoute;
