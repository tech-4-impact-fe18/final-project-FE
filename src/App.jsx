import "./App.css";
import LandingPage from "./pages/Landing/LandingPage";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
