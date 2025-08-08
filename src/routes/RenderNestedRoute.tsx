import { Route } from 'react-router-dom';
import type { NestedRoute } from '../types/nestedRoute';
import PublicRouter from './PublicRouter';
import ProtectedRoute from './ProtectedRouter';
import ErrorBoundary from '../components/common/ErrorBoundary';
import SuspenseWrapper from '../components/common/SuspenseWrapper';

type RenderNestedRouteProps = {
  routes: NestedRoute[];
};

function RenderNestedRoute({ routes }: RenderNestedRouteProps) {
  return (
    <>
      {routes.map((route) => {
        let Component = <route.element />;

        Component = (
          <ErrorBoundary>
            <SuspenseWrapper>{Component}</SuspenseWrapper>
          </ErrorBoundary>
        );

        if (route.extra) {
          Component = <route.extra>{Component}</route.extra>;
        }
        if (route.guards) {
          Component = route.guards.reduce((acc, Guard) => <Guard>{acc}</Guard>, Component);
        }

        const AuthRouter = route.isAuth ? ProtectedRoute : PublicRouter;
        if (route.children) {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={<AuthRouter>{Component}</AuthRouter>}
            >
              {RenderNestedRoute({ routes: route.children })}
            </Route>
          );
        }
        return (
          <Route
            key={route.path}
            path={route.path}
            element={<AuthRouter>{Component}</AuthRouter>}
          />
        );
      })}
    </>
  );
}

export default RenderNestedRoute;
