import { Cards, Search } from "../../components";
import { useSelector, useDispatch } from "react-redux";

import { selectCards, addId } from "../../features";

import classes from "./styles/homeStyles.module.css";

export function Home() {
  const cards = useSelector(selectCards);

  const dispatch = useDispatch();

  const onAddId = () => {
    dispatch(addId(20));
  };
  return (
    <main>
      <Search />
      <Cards cardsData={cards || []} />
      <button onClick={onAddId} type="button" className={classes.addMoreButton}>
        посмотреть еще
      </button>
    </main>
  );
}
