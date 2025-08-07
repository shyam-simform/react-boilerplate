import RoleBasedGuardsRoute from './RoleBasedGuardsRoute';

const withRoleGuard = (allowedRoles: string[]) => {
  return function RoleGuard({ children }: { children: React.ReactNode }) {
    return <RoleBasedGuardsRoute allowedRoles={allowedRoles}>{children}</RoleBasedGuardsRoute>;
  };
};

export default withRoleGuard;
