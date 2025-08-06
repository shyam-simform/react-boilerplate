import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Welcome to React Boilerplate</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A modern React application with authentication, routing, and state management built with
            React 19, TypeScript, Redux Toolkit, and Tailwind CSS.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
