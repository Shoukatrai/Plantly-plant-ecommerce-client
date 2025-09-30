import React from "react";
import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";

const UserRoutes = () => {
  const token = Cookies.get("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />; 
};

export default UserRoutes;
