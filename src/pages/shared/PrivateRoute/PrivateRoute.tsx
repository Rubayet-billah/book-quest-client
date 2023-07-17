import { ReactNode } from "react";
import { useAppSelector } from "../../../redux/hook";
import Loading from "../Loading/Loading";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { user, loading } = useAppSelector((state) => state.auth);
  if (loading) {
    return <Loading />;
  }
  if (user?.email) {
    return <>{children}</>;
  }
  return <Navigate to="/login" />;
};

export default PrivateRoute;
