import { Component, ErrorInfo, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { LABELS } from '../../constants/labels';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-600 mb-4">{LABELS.SOMETHING_WENT_WRONG}</h2>
            <p className="text-gray-600 mb-4">{this.state.error?.message}</p>
            <Link to="/posts" className="text-blue-600 hover:underline">
              {LABELS.BACK} {LABELS.HOME}
            </Link>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
