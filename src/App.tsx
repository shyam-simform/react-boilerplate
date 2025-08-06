import { BrowserRouter as Router, useRoutes, Navigate, Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Navigation from './components/common/navigation';
import ProtectedRoute from './components/common/protected-route';
import AuthRoute from './components/common/auth-route';
import RoleBasedRoute from './components/common/role-based-route';
import Home from './pages/home-simple';
import Login from './pages/auth/login';
import Signup from './pages/auth/signup';
import PostList from './pages/post/post-list';
import PostForm from './pages/post/post-form';
import AdminDashboard from './pages/admin/dashboard';
import AnalystDashboard from './pages/analyst/dashboard';
import HospitalDashboard from './pages/hospital/dashboard';
import './App.css';

// Route config array
const routesConfig = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: (
      <AuthRoute>
        <Login />
      </AuthRoute>
    ),
  },
  {
    path: '/signup',
    element: (
      <AuthRoute>
        <Signup />
      </AuthRoute>
    ),
  },
  {
    path: '/admin',
    element: (
      <RoleBasedRoute allowedRoles={['admin']}>
        <Outlet />
      </RoleBasedRoute>
    ),
    children: [
      {
        path: 'dashboard',
        element: <AdminDashboard />,
      },
    ],
  },
  {
    path: '/analyst',
    element: (
      <RoleBasedRoute allowedRoles={['analyst']}>
        <Outlet />
      </RoleBasedRoute>
    ),
    children: [
      {
        path: 'dashboard',
        element: <AnalystDashboard />,
      },
    ],
  },
  {
    path: '/hospital',
    element: (
      <RoleBasedRoute allowedRoles={['hospital']}>
        <Outlet />
      </RoleBasedRoute>
    ),
    children: [
      {
        path: 'dashboard',
        element: <HospitalDashboard />,
      },
    ],
  },
  {
    path: '/posts',
    element: (
      <ProtectedRoute>
        <Outlet />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <PostList />,
      },
      {
        path: 'add',
        element: <PostForm />,
      },
      {
        path: 'edit/:id',
        element: <PostForm />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <Navigate to="/posts" replace />,
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
];

function AppRoutes() {
  return useRoutes(routesConfig);
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navigation />
          <AppRoutes />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
