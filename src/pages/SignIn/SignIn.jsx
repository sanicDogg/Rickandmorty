import { useSelector } from "react-redux";
import { Navigate } from "react-router";

import { AuthFormRenderer } from "../../components";
import { selectLoggedIn } from "../../features";
import { LOGIN_FORM } from "../../utils";

export function SignIn() {
  const isLoggedIn = useSelector(selectLoggedIn);

  return isLoggedIn ? (
    <Navigate to={"/"} />
  ) : (
    <AuthFormRenderer type={LOGIN_FORM} />
  );
}
