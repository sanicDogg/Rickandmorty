import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { AuthForm } from "../../components";
import { selectLoggedIn } from "../../features";
import { REGISTER_FORM } from "../../utils";

export function SignUp() {
  const isLoggedIn = useSelector(selectLoggedIn);

  return (
    isLoggedIn ? <Navigate to={"/"} /> : <AuthForm type={REGISTER_FORM}/>
  )
}