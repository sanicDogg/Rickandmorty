import React from "react";
import { Home, Favorites, Character, SignUp } from "./pages";
import { Header } from "./components";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/character/:charId" element={<Character />} />
        </Routes>
      </main>
    </>
  );
}
export default App;
