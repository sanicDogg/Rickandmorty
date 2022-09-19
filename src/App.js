import React from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ErrorBoundary, Header } from "./components";
import { init } from "./features";
import { ThemeProvider } from "./app/themeContext";
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
import { ProtectedRoute } from "./pages/ProtectedRoute";

function App() {
  const dispatch = useDispatch();

  dispatch(init());

  return (
    <>
      <ErrorBoundary>
        <ThemeProvider>
          <Header/>
          <main>
            <Routes>
              <Route path="/*" element={<Home/>}/>
              <Route path="/character/:charId" element={<Character/>}/>
              <Route path="/search/:searchValue" element={<SearchPage/>}/>
              <Route element={<ProtectedRoute invertedFlag/>}>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/signin" element={<SignIn/>}/>
              </Route>
              <Route element={<ProtectedRoute redirectPath={"/signup"}/>}>
                <Route path="/favorites" element={<Favorites/>}/>
                <Route path="/history" element={<History/>}/>
              </Route>
            </Routes>
          </main>
        </ThemeProvider>
      </ErrorBoundary>
    </>
  );
}

export default App;
