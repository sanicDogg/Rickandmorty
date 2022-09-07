import React from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  Home,
  Favorites,
  Character,
  SignUp,
  Logout,
  SignIn,
  SearchPage,
} from "./pages";
import { Header } from "./components";
import { getLoggedUser } from "./utils";
import { setUser } from "./features";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  const authedUser = getLoggedUser();
  if (authedUser) {
    dispatch(setUser(authedUser));
  }

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/character/:charId" element={<Character />} />
          <Route path="/search/:searchValue" element={<SearchPage />} />
        </Routes>
      </main>
    </>
  );
}
export default App;
