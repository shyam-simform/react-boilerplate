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

export const finalRoutes: NestedRoute[] = [
  {
    path: '/',
    element: Home,
    isAuth: true,
  },
  {
    path: '/login',
    element: Login,
    isAuth: false,
  },
  {
    path: '/signup',
    element: Signup,
    isAuth: false,
  },
  {
    path: '/admin',
    element: Outlet,
    isAuth: true,
    guards: [withRoleGuard(['admin'])],
    children: [
      {
        path: 'dashboard',
        element: AdminDashboard,
        isAuth: true,
      },
    ],
  },
  {
    path: '/analyst',
    element: Outlet,
    isAuth: true,
    guards: [withRoleGuard(['analyst'])],
    children: [
      {
        path: 'dashboard',
        element: AnalystDashboard,
        isAuth: true,
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
      },
    ],
  },
  {
    path: '/posts',
    element: Outlet,
    isAuth: true,
    children: [
      {
        path: '',
        index: true,
        element: PostList,
        isAuth: true,
      },
      {
        path: 'add',
        element: PostForm,
        isAuth: true,
      },
      {
        path: 'edit/:id',
        element: PostForm,
        isAuth: true,
      },
    ],
  },
];
