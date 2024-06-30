import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  role: "admin" | "user";
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ role, children }) => {
  const user = JSON.parse(localStorage.getItem("user") || "null");

  if (!user) {
    return <Navigate to="/auth/sign-in" replace />;
  }

  if (user.role !== role) {
    return (
      <Navigate
        to={`/${user.role === "admin" ? "admin/dashboard" : "home"}`}
        replace
      />
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
