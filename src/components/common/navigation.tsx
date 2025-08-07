import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from '../../store/api/auth-api';
import { clearUser } from '../../store/slices/user-store';
import type { RootState } from '../../store';
import { LABELS } from '../../constants/labels';

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user);
  const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [logout] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logout().unwrap();
      dispatch(clearUser());
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
      // Clear user state even if API call fails
      dispatch(clearUser());
      navigate('/login');
    }
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-xl font-bold text-blue-600">
            React Boilerplate
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-blue-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link
                  to="/admin/dashboard"
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  {LABELS.ADMIN_DASHBOARD}
                </Link>

                <Link
                  to="/analyst/dashboard"
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  {LABELS.ANALYST_DASHBOARD}
                </Link>

                <Link to="/posts" className="text-gray-700 hover:text-blue-600 font-medium">
                  {LABELS.POSTS}
                </Link>

                <span className="text-gray-600">Welcome, {user?.fullName}</span>

                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition duration-200"
                >
                  {LABELS.LOGOUT}
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-700 hover:text-blue-600 font-medium">
                  {LABELS.LOGIN}
                </Link>

                <Link
                  to="/signup"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition duration-200"
                >
                  {LABELS.SIGNUP}
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {isAuthenticated ? (
                <>
                  <Link
                    to="/posts"
                    className="text-gray-700 hover:text-blue-600 font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {LABELS.POSTS}
                  </Link>

                  <span className="text-gray-600 py-2">Welcome, {user?.fullName}</span>

                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded text-left transition duration-200"
                  >
                    {LABELS.LOGOUT}
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="text-gray-700 hover:text-blue-600 font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {LABELS.LOGIN}
                  </Link>

                  <Link
                    to="/signup"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-left transition duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {LABELS.SIGNUP}
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
