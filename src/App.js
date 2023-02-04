import Users from "./components/Users";
import Home from "./components/Home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="users" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
