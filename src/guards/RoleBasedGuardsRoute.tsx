import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { RootState } from '../store';
import { LABELS } from '../constants/labels';

interface RoleBasedRouteProps {
  allowedRoles: string[];
  children: ReactNode;
}

const RoleBasedGuardsRoute = ({ allowedRoles, children }: RoleBasedRouteProps) => {
  const user = useSelector((state: RootState) => state.user.user);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">{LABELS.ROLE_ACCESS_DENIED}</h2>
          <Link to="/" className="mt-4 inline-block text-blue-600 hover:underline">
            {LABELS.BACK} {LABELS.HOME}
          </Link>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default RoleBasedGuardsRoute;
