import Component from './Component';
// import ErrorBoundary from './ErrorBoundary';
import { withErrorBoundary } from 'react-error-boundary';

function ErrorBoundaries() {
  return (
    // <ErrorBoundary>
    <Component />
    // </ErrorBoundary>
  );
}

export default withErrorBoundary(ErrorBoundaries, {
  fallback: <div>withErrorBoundary</div>,
});

// export default ErrorBoundaries;
