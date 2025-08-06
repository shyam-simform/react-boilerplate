import { Outlet } from 'react-router-dom';
import type { NestedRoute } from '../types/nested-route';
import Home from '../pages/home-simple';
import Login from '../pages/auth/login';
import Signup from '../pages/auth/signup';
import PostList from '../pages/post/post-list';
import PostForm from '../pages/post/post-form';
import AdminDashboard from '../pages/admin/dashboard';
import AnalystDashboard from '../pages/analyst/dashboard';
import HospitalDashboard from '../pages/hospital/dashboard';
import ProtectedRoute from '../components/common/protected-route';
import AuthRoute from '../components/common/auth-route';
import withRoleGuard from '../guards/withRoleGuard';

export const finalRoutes: NestedRoute[] = [
  {
    path: '/',
    element: Home,
  },
  {
    path: '/login',
    element: Login,
    guards: [AuthRoute],
  },
  {
    path: '/signup',
    element: Signup,
    guards: [AuthRoute],
  },
  {
    path: '/admin',
    element: Outlet,
    guards: [withRoleGuard(['admin'])],
    children: [
      {
        path: 'dashboard',
        element: AdminDashboard,
      },
    ],
  },
  {
    path: '/analyst',
    element: Outlet,
    guards: [withRoleGuard(['analyst'])],
    children: [
      {
        path: 'dashboard',
        element: AnalystDashboard,
      },
    ],
  },
  {
    path: '/hospital',
    element: Outlet,
    guards: [withRoleGuard(['hospital'])],
    children: [
      {
        path: 'dashboard',
        element: HospitalDashboard,
      },
    ],
  },
  {
    path: '/posts',
    element: Outlet,
    guards: [ProtectedRoute],
    children: [
      {
        path: '',
        index: true,
        element: PostList,
        guards: [ProtectedRoute],
      },
      {
        path: 'add',
        element: PostForm,
        guards: [ProtectedRoute],
      },
      {
        path: 'edit/:id',
        element: PostForm,
        guards: [ProtectedRoute],
      },
    ],
  },
];
