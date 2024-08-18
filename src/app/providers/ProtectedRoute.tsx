// app/providers/ProtectedRoute.tsx
import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  element: React.ReactElement;
  isAuthenticated: boolean;
  userRole: string;
  allowedRoles: string[];
  redirectTo?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  element,
  isAuthenticated,
  userRole,
  allowedRoles,
  redirectTo = "/login",
}) => {
  if (!isAuthenticated) {
    return <Navigate to={redirectTo} />;
  }

  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" />;
  }

  return element;
};

export default ProtectedRoute;
