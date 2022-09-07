import React from "react";
import { Routes, Route } from 'react-router-dom'
import "./App.css";
import { MainPage } from "./components/MainPage";
import { BookPage } from "./components/BookPage";
import styled from 'styled-components';


function App() {
  return (
    <div className="App">
        {/* <MainPage/> */}
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path=":bookId" element={<BookPage/>} />
        </Routes>
        </div>
  );
}

export default App;
