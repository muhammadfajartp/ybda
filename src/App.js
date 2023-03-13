import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Gaji from "./pages/Gaji";
import UsersPage from "./pages/Users";
import GajiPage from "./pages/Gaji";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/hitung-gaji" element={<GajiPage />} />
      </Routes>
    </div>
  );
}

export default App;
