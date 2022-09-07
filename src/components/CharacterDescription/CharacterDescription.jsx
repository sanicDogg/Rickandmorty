import PropTypes from "prop-types";
import { useGetCharacterQuery } from "../../features/api/apiSlice";
import classes from "./styles/characterDescription.module.css";

export function CharacterDescription({ id }) {
  const { data = {}, isLoading } = useGetCharacterQuery(id);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className={classes.description}>
      <h1 className={`${classes.description__text}`}>{`name: ${data.name}`}</h1>
      <p
        className={`${classes.description__text}`}
      >{`status: ${data.status}`}</p>
      <p
        className={`${classes.description__text}`}
      >{`species: ${data.species}`}</p>
      <p
        className={`${classes.description__text}`}
      >{`location: ${data.location.name}`}</p>
      <p
        className={`${classes.description__text}`}
      >{`gender: ${data.gender}`}</p>
      <p
        className={`${classes.description__text}`}
      >{`created: ${data.created}`}</p>
    </div>
  );
}
CharacterDescription.propTypes = {
  id: PropTypes.number,
};
