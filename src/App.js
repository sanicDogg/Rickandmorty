import React from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components";
import { init } from "./features";
import {
  Character,
  Favorites,
  Home,
  SearchPage,
  SignIn,
  SignUp,
  History,
} from "./pages";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  dispatch(init());

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/character/:charId" element={<Character />} />
          <Route path="/search/:searchValue" element={<SearchPage />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </main>
    </>
  );
}
export default App;
