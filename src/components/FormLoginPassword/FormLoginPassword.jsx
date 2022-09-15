import classes from "./styles/FormLoginPassword.module.css";

export function FormLoginPassword({
                                    onSubmit,
                                    onUsernameChange,
                                    onPasswordChange,
                                  }) {
  return (
    <div className={classes.container}>
      <form onSubmit={onSubmit} className={classes.form}>
        <div className={classes.formElement}>
          <div>Логин</div>
          <input type="text" onChange={onUsernameChange}/>
        </div>
        <div className={classes.formElement}>
          <div>Пароль</div>
          <input type="password" onChange={onPasswordChange}/>
        </div>
        <div className={`${classes.formElement} ${classes.formSubmit}`}>
          <input type="submit" value="Отправить"/>
        </div>
      </form>
    </div>
  );
}
