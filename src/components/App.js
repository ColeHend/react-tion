import React from "react";
import "./App.css";
import ListPage from "./listPage/ListPage";
import CardPage from "./cardPage/CardPage";
import NavBar from "./navbar/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1 className="header">My React Tests</h1>
          <NavBar className="App-link" />
        </header>
        <div>
          <Routes>
            <Route path="/" element={<ListPage />}></Route>
            <Route path="/cards" element={<CardPage />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
