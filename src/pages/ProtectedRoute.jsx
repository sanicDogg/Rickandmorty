import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import { selectLoggedIn } from "../features";

export const ProtectedRoute =
  ({
     redirectPath = "/",
     children,
     invertedFlag = false
   }) => {
    let isLoggedIn = useSelector(selectLoggedIn);
    isLoggedIn = invertedFlag ? !isLoggedIn : isLoggedIn;

    if (!isLoggedIn) {
      return <Navigate to={redirectPath} replace/>;
    }

    return children ? children : <Outlet />;
  };