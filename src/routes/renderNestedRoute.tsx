import { Route } from 'react-router-dom';
import type { NestedRoute } from '../types/nestedRoute';

type RenderNestedRouteProps = {
  routes: NestedRoute[];
};

function RenderNestedRoute({ routes }: RenderNestedRouteProps) {
  return (
    <>
      {routes.map((route) => {
        let Component = <route.element />;
        if (route.extra) {
          Component = <route.extra>{Component}</route.extra>;
        }
        if (route.guards) {
          Component = route.guards.reduce((acc, Guard) => <Guard>{acc}</Guard>, Component);
        }
        // You can add your own Auth/Public router wrappers here if needed
        if (route.children) {
          return (
            <Route key={route.path} path={route.path} element={Component}>
              {RenderNestedRoute({ routes: route.children })}
            </Route>
          );
        }
        return <Route key={route.path} path={route.path} element={Component} />;
      })}
    </>
  );
}

export default RenderNestedRoute;
