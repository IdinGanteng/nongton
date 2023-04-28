import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Game from "./routes/Game";
import Home from "./routes/Home";
import React from 'react'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/game" element={<Game/>}/>
      </Routes>
    </Router>
  )
}

export default App