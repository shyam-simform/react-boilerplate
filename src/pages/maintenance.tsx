import React from 'react';
import { LABELS } from '../constants/labels';

const MaintenancePage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <div className="mb-8">
          <svg
            className="mx-auto h-24 w-24 text-yellow-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{LABELS.MAINTENANCE_TITLE}</h1>
        <p className="text-lg text-gray-600 mb-8">{LABELS.MAINTENANCE_MESSAGE}</p>
        <p className="text-sm text-gray-500">{LABELS.MAINTENANCE_CHECK_BACK}</p>
      </div>
    </div>
  );
};

export default MaintenancePage;
