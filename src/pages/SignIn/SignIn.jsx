import { AuthForm } from "../../components";
import { LOGIN_FORM } from "../../utils";

export function SignIn() {
  return (
    <AuthForm type={LOGIN_FORM} />
  );
}
