import { Link } from "react-router-dom";
import { LOGIN_FORM, REGISTER_FORM } from "../../utils";
import classes from "./styles/AuthFormCaptionStyle.module.css";

const LoginCaption = () => {
  return (
    <h1 className={classes.signInText}>Вход</h1>
  )
}

const RegisterCaption = () => {
  return (
    <div className={classes.signUpBlock}>
      <h1>Регистрация</h1>
      <p>Уже зарегистрированы? <Link to={"/signin"}>Войти</Link></p>
    </div>
  )
}

export function AuthFormCaption({type}) {
  return (
    type === LOGIN_FORM ? <LoginCaption/> :
      type === REGISTER_FORM ? <RegisterCaption/> : null
  )
}