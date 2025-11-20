import { Component } from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
          <div className="max-w-md w-full text-center">
            <div className="mb-6 flex justify-center">
              <div className="bg-red-100 p-6 rounded-full">
                <FaExclamationTriangle className="text-6xl text-red-600" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-deep-charcoal mb-4">
              Oops! Something went wrong
            </h1>
            <p className="text-gray-600 mb-8">
              We're sorry for the inconvenience. Please try refreshing the page or contact support if the problem persists.
            </p>
            <div className="space-y-4">
              <button
                onClick={() => window.location.reload()}
                className="btn-primary w-full"
              >
                Refresh Page
              </button>
              <a
                href="/"
                className="block btn-secondary w-full"
              >
                Go to Homepage
              </a>
            </div>
            {process.env.NODE_ENV === 'development' && (
              <div className="mt-8 p-4 bg-red-50 rounded-lg text-left">
                <p className="text-sm font-mono text-red-800 break-all">
                  {this.state.error?.toString()}
                </p>
              </div>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
