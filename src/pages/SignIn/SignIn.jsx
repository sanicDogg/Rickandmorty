import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { AuthForm } from "../../components";
import { selectLoggedIn } from "../../features";
import { LOGIN_FORM } from "../../utils";

export function SignIn() {
  const isLoggedIn = useSelector(selectLoggedIn);

  return (
    isLoggedIn ? <Navigate to={"/"}/> : <AuthForm type={LOGIN_FORM}/>
  )
}