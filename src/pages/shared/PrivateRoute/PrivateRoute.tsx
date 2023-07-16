import React from "react";
import { useAppSelector } from "../../../redux/hook";
import Loading from "../Loading/Loading";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAppSelector((state) => state.auth);
  if (loading) {
    return <Loading />;
  }
  if (user?.email) {
    return children;
  }
  return <Navigate to="/login" />;
};

export default PrivateRoute;
