import { useEffect } from 'react';

const ErrorTest: React.FC = () => {
  useEffect(() => {
    throw new Error('Test Error Boundary');
  }, []);

  return <div>This should not be visible</div>;
};

export default ErrorTest;
