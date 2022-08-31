import React from "react";
import { Cards, Header } from "./components";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  const cards = [
    {
      id: "asdafacac",
      name: "rickAndMortyCharackter",
      url: "https://picsum.photos/id/237/300/300",
      isLike: false,
    },
    {
      id: "asafafasfafafs",
      name: "rickAndMortyCharackter",
      url: "https://picsum.photos/id/237/300/300",
      isLike: false,
    },
    {
      id: "asdadadsad",
      name: "rickAndMortyCharackter",
      url: "https://picsum.photos/id/237/300/300",
      isLike: false,
    },
    {
      id: "asdasdadsad",
      name: "rickAndMortyCharackter",
      url: "https://picsum.photos/id/237/300/300",
      isLike: false,
    },
    {
      id: "asdadafasdfafasss",
      name: "rickAndMortyCharackter",
      url: "https://picsum.photos/id/237/300/300",
      isLike: false,
    },
    {
      id: "sdasdq1w1e3esdww2w2d",
      name: "rickAndMortyCharackter",
      url: "https://picsum.photos/id/237/300/300",
      isLike: true,
    },
    {
      id: "asdadasfasfsafafasf",
      name: "rickAndMortyCharackter",
      url: "https://picsum.photos/id/237/300/300",
      isLike: false,
    },
    {
      id: "asdasdasfafasfasxxasdf",
      name: "rickAndMortyCharackter",
      url: "https://picsum.photos/id/237/300/300",
      isLike: false,
    },
  ];

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Cards cardsData={cards} />} />
        <Route path="/favorites" element={<Cards cardsData={cards} />} />
      </Routes>
    </div>
  );
}
export default App;
