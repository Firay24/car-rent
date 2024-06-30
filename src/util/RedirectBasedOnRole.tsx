import React from "react";
import { Navigate } from "react-router-dom";

const RedirectBasedOnRole: React.FC = () => {
  const user = JSON.parse(localStorage.getItem("user") || "null");

  if (!user) {
    return <Navigate to="/auth/sign-in" replace />;
  }

  return (
    <Navigate
      to={`/${user.role === "admin" ? "admin/dashboard" : "home"}`}
      replace
    />
  );
};

export default RedirectBasedOnRole;
