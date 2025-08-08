import { Outlet } from 'react-router-dom';
import type { NestedRoute } from '../types/nestedRoute';
import withRoleGuard from '../guards/withRoleGuard';
import withMaintenanceGuard from '../guards/withMaintenanceGuard';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/home-simple'));
const Login = lazy(() => import('../pages/auth/login'));
const Signup = lazy(() => import('../pages/auth/signup'));
const PostList = lazy(() => import('../pages/post/post-list'));
const PostForm = lazy(() => import('../pages/post/post-form'));
const AdminDashboard = lazy(() => import('../pages/admin/dashboard'));
const AnalystDashboard = lazy(() => import('../pages/analyst/dashboard'));
const HospitalDashboard = lazy(() => import('../pages/hospital/dashboard'));
const MaintenancePage = lazy(() => import('../pages/maintenance'));

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
