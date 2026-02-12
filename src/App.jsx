import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Success from "./pages/Success";
import AboutPage from "./pages/AboutPage";
import Abstract from "./pages/Abstract";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Success" element={<Success />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Abstract" element={<Abstract />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
