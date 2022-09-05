import { Cards, Search } from "../../components";
import classes from "./styles/homeStyles.module.css";
import { useState } from "react";

export function Home() {
  const [cards, setCards] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ]);

  const onAddId = () => {
    setCards((prevCards) => {
      const addToCards = [];
      for (let i = 1; i <= 20; i++) {
        addToCards.push(prevCards[prevCards.length - 1] + i);
      }
      return prevCards.concat(addToCards);
    })
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
