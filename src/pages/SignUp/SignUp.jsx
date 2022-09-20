import { AuthForm } from "../../components";
import { REGISTER_FORM } from "../../utils";

export function SignUp() {
  return (
    <AuthForm type={REGISTER_FORM}/>
  )
}