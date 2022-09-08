import { useParams } from "react-router";

import { Card, CharacterDescription } from "../../components";

import classes from "./styles/character.module.css";

export function Character() {
  const { charId } = useParams();

  return (
    <div className={classes.charPage}>
      <div className={classes.charPage__itemWrapper}>
        <Card id={parseInt(charId)} isButtonVisible={false} />
      </div>
      <div className={classes.charPage__itemWrapper}>
        <CharacterDescription id={parseInt(charId)} />
      </div>
    </div>
  );
}
