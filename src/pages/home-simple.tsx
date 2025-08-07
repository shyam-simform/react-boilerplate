import React from 'react';
import ErrorTest from '../components/common/ErrorTest';

const Home: React.FC = () => {
  const [showError, setShowError] = React.useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Welcome to React Boilerplate</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A modern React application with authentication, routing, and state management built with
            React 19, TypeScript, Redux Toolkit, and Tailwind CSSsss.
          </p>
        </div>
        <button
          onClick={() => setShowError(true)}
          className="mb-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        >
          Test Error Boundary
        </button>

        {showError && <ErrorTest />}
      </div>
    </div>
  );
};

export default Home;
