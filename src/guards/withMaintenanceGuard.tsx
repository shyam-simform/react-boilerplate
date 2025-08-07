import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { GuardFunction, GuardProps } from '../types/guards';

export const withMaintenanceGuard: GuardFunction = () => {
  const MaintenanceGuard: FC<GuardProps> = ({ children }) => {
    const isMaintenanceMode = import.meta.env.VITE_MAINTENANCE_MODE === 'true';

    if (isMaintenanceMode) {
      return <Navigate to="/maintenance" replace />;
    }

    return <>{children}</>;
  };

  return MaintenanceGuard;
};

export default withMaintenanceGuard;
