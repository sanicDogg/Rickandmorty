import { DebounceInput } from "react-debounce-input";
import classes from "./styles/searchStyle.module.css";

export function Search() {

  const search = (newValue) => {
    console.log("Changed " + newValue);
  }

  return (
    <div className={classes.container}>
      <DebounceInput
        minLength={2}
        debounceTimeout={500}
        placeholder="Панель поиска"
        className={classes.search}
        onChange={event => search(event.target.value)}/>
    </div>
  )
}