import { useState } from "react";
import cloneDeep from "lodash/cloneDeep";

import { selectUser, setUser } from "../../features";
import { useDispatch, useSelector } from "react-redux";

export function RegisterForm() {
  const [currUser, setCurrUser] = useState(useSelector(selectUser));
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleUsernameType = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordType = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const userCopy = cloneDeep(currUser);

    userCopy.username = username;
    userCopy.password = password;

    dispatch(setUser(userCopy));
    setCurrUser(userCopy);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Логин:
        <input type="text" value={username} onChange={handleUsernameType} />
      </label>
      <label>
        Пароль:
        <input type="password" value={password} onChange={handlePasswordType} />
      </label>
      <input type="submit" value="Отправить" />
    </form>
  );

}