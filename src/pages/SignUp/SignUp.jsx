import { useSelector } from "react-redux";
import { RegisterForm } from "../../components";
import { selectLoggedIn } from "../../features";
import { Navigate } from "react-router";

export function SignUp() {
  const isLoggedIn = useSelector(selectLoggedIn);

  return (
    isLoggedIn ? <Navigate to={"/"} /> : <RegisterForm />
  )
}