import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Game from "./routes/Game";
import Home from "./routes/Home";
import FilmList from "./routes/FilmList";
import React from 'react'

const App = () => {
  return (
    <FilmList/>
  )
}

export default App