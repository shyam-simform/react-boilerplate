import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';
import { LABELS } from '../constants/labels';

const Home: React.FC = () => {
  const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Welcome to React Boilerplate</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A modern React application with authentication, routing, and state management built with
            React 19, TypeScript, Redux Toolkit, and Tailwind CSS.
          </p>

          <div className="space-x-4">
            {isAuthenticated ? (
              <Link
                to="/posts"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-200"
              >
                {LABELS.VIEW} {LABELS.POSTS}
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-200"
                >
                  {LABELS.LOGIN}
                </Link>
                <Link
                  to="/signup"
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-200"
                >
                  {LABELS.SIGNUP}
                </Link>
              </>
            )}
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">🔐 Authentication</h3>
            <p className="text-gray-600">
              Secure login and signup with HTTP-only cookies and protected routes.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">📝 Post Management</h3>
            <p className="text-gray-600">
              Create, edit, and delete posts with file upload support and validation.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">🧪 Testing Ready</h3>
            <p className="text-gray-600">
              Pre-configured with Vitest and React Testing Library for comprehensive testing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
