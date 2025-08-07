import { Outlet } from 'react-router-dom';
import type { NestedRoute } from '../types/nestedRoute';
import Home from '../pages/home-simple';
import Login from '../pages/auth/login';
import Signup from '../pages/auth/signup';
import PostList from '../pages/post/post-list';
import PostForm from '../pages/post/post-form';
import AdminDashboard from '../pages/admin/dashboard';
import AnalystDashboard from '../pages/analyst/dashboard';
import HospitalDashboard from '../pages/hospital/dashboard';
import withRoleGuard from '../guards/withRoleGuard';
import withMaintenanceGuard from '../guards/withMaintenanceGuard';
import MaintenancePage from '../pages/maintenance';

export const finalRoutes: NestedRoute[] = [
  {
    path: '/maintenance',
    element: MaintenancePage,
    isAuth: false,
  },
  {
    path: '/',
    element: Home,
    isAuth: true,
    guards: [withMaintenanceGuard()],
  },
  {
    path: '/login',
    element: Login,
    isAuth: false,
    guards: [withMaintenanceGuard()],
  },
  {
    path: '/signup',
    element: Signup,
    isAuth: false,
    guards: [withMaintenanceGuard()],
  },
  {
    path: '/admin',
    element: Outlet,
    isAuth: true,
    guards: [withRoleGuard(['admin']), withMaintenanceGuard()],
    children: [
      {
        path: 'dashboard',
        element: AdminDashboard,
        isAuth: true,
        guards: [withMaintenanceGuard()],
      },
    ],
  },
  {
    path: '/analyst',
    element: Outlet,
    isAuth: true,
    guards: [withRoleGuard(['analyst']), withMaintenanceGuard()],
    children: [
      {
        path: 'dashboard',
        element: AnalystDashboard,
        isAuth: true,
        guards: [withMaintenanceGuard()],
      },
    ],
  },
  {
    path: '/hospital',
    element: Outlet,
    isAuth: true,
    guards: [withRoleGuard(['hospital'])],
    children: [
      {
        path: 'dashboard',
        element: HospitalDashboard,
        isAuth: true,
        guards: [withMaintenanceGuard()],
      },
    ],
  },
  {
    path: '/posts',
    element: Outlet,
    isAuth: true,
    guards: [withMaintenanceGuard()],
    children: [
      {
        path: '',
        index: true,
        element: PostList,
        isAuth: true,
        guards: [withMaintenanceGuard()],
      },
      {
        path: 'add',
        element: PostForm,
        isAuth: true,
        guards: [withMaintenanceGuard()],
      },
      {
        path: 'edit/:id',
        element: PostForm,
        isAuth: true,
        guards: [withMaintenanceGuard()],
      },
    ],
  },
];
