import { Suspense } from 'react';
import LoadingSpinner from './loading-spinner';

interface SuspenseWrapperProps {
  children: React.ReactNode;
}

const SuspenseWrapper: React.FC<SuspenseWrapperProps> = ({ children }) => {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center min-h-screen">
          <LoadingSpinner size="lg" color="blue" text="Loading..." />
        </div>
      }
    >
      {children}
    </Suspense>
  );
};

export default SuspenseWrapper;
