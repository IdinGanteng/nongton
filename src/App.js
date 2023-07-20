import Login from "./Login";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Verify from "./Verify";

const App = () => {
  return (
    <div className="bg">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/verifikasi" element={<Verify/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;