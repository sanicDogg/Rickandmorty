import { useAuthForm } from "../../hooks/useAuthForm";
import { FormLoginPassword } from "../FormLoginPassword/FormLoginPassword";
import { AuthFormCaption } from "./AuthFormCaption";

export function AuthForm({type}) {
  const { handleSubmit, handlePasswordType, handleUsernameType } = useAuthForm(type);

  return (
    <>
      <AuthFormCaption type={type}/>
      <FormLoginPassword
        onSubmit={handleSubmit}
        onUsernameChange={handleUsernameType}
        onPasswordChange={handlePasswordType}
      />
    </>
  );
}
