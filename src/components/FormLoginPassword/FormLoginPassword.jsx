export function FormLoginPassword({onSubmit, onUsernameChange, onPasswordChange} ) {
  return (
    <form onSubmit={onSubmit}>
      <label>
        Логин:
        <input type="text" onChange={onUsernameChange}/>
      </label>
      <label>
        Пароль:
        <input type="password" onChange={onPasswordChange}/>
      </label>
      <input type="submit" value="Отправить"/>
    </form>
  )
}