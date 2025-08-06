import RoleBasedRoute from '../components/common/role-based-route';

const withRoleGuard = (allowedRoles: string[]) => {
  return function RoleGuard({ children }: { children: React.ReactNode }) {
    return <RoleBasedRoute allowedRoles={allowedRoles}>{children}</RoleBasedRoute>;
  };
};

export default withRoleGuard;
