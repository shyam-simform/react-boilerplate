import { useMemo } from 'react';
import { Routes } from 'react-router-dom';
import RenderNestedRoute from './RenderNestedRoute';
import { finalRoutes } from '../config/index.routes';

function NestedRouter() {
  const memoizedRoutes = useMemo(() => RenderNestedRoute({ routes: finalRoutes }), []);
  return <Routes>{memoizedRoutes}</Routes>;
}

export default NestedRouter;
