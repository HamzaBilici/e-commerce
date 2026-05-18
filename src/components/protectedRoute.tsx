import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAppSelector } from "../store/hooks";

interface ProtectedRouteProps {
  component: React.ComponentType<any>;
  [key: string]: any;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const token = localStorage.getItem("token");
  const user = useAppSelector((state) => state.client.user);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!token && (!user || !user.token)) {
          return <Redirect to="/login" />;
        }
        return <Component {...props} />;
      }}
    />
  );
};

export default ProtectedRoute;
