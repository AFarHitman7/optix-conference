import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import AboutPage from "./pages/AboutPage";
import Abstract from "./pages/Abstract";
import Admin from "./pages/Admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/aboutpage" element={<AboutPage />} />
        <Route path="/abstract" element={<Abstract />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
