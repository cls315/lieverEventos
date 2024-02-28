import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Views/Home/Home";
import CreateAcount from "./Views/CreateAcount/CreateAcount";
import Login from "./Views/Login/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create-acount" element={<CreateAcount />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
