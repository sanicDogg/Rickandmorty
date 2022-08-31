import React from "react";
import { selectCards, selectFavorites } from "./app/reducers/cards/cardsSlice";
import { useSelector } from "react-redux";
import { Cards, Header } from "./components";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  const cards = useSelector(selectCards);
  const favorites = useSelector(selectFavorites);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Cards cardsData={cards} />} />
        <Route path="/favorites" element={<Cards cardsData={favorites} />} />
      </Routes>
    </>
  );
}
export default App;
