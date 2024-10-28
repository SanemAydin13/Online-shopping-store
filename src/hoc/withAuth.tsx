import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const withAuth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  const ComponentWithAuth: React.FC<P> = (props) => {
    const { isAuthenticated } = useAuth();

    // Redirect to the login page if not authenticated
    if (!isAuthenticated) {
      return <Navigate to="/" replace />;
    }

    // Render the wrapped component if authenticated
    return <WrappedComponent {...props} />;
  };

  return ComponentWithAuth;
};

export default withAuth;
