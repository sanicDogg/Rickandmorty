import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cloneDeep from "lodash/cloneDeep";

import { selectUser, setUser } from "../../features";
import { authenticate, isUsernameExists, LOGIN_FORM, REGISTER_FORM } from "../../utils";
import { FormLoginPassword } from "../FormLoginPassword/FormLoginPassword";

export function AuthForm({type}) {
  const [currUser, setCurrUser] = useState(useSelector(selectUser));
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleRegisterSubmit = (event) => {
    event.preventDefault();

    if (isUsernameExists(username)) {
      alert("Логин уже занят. Придумайте другой");
      return;
    }

    const userCopy = cloneDeep(currUser);

    userCopy.username = username;
    userCopy.password = password;

    dispatch(setUser(userCopy));
    setCurrUser(userCopy);
  }

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    if (!isUsernameExists(username)) {
      alert("Пользователь с таким логином не найден. Попробуйте другой или зарегистрируйтесь");
      return;
    }
    const loggedUser = authenticate(username, password);
    if (!loggedUser)
      alert("Неверная пара логин/пароль");
    else {
      dispatch(setUser(loggedUser));
      setCurrUser(loggedUser);
    }
  }

  const handleUsernameType = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordType = (event) => {
    setPassword(event.target.value);
  }

  return (
    <FormLoginPassword
      onSubmit={type === LOGIN_FORM ? handleLoginSubmit :
        type === REGISTER_FORM ? handleRegisterSubmit : null}
      onUsernameChange={handleUsernameType}
      onPasswordChange={handlePasswordType}
    />
  );

}