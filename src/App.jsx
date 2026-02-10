import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Register2 from "./pages/Register2";
import Success from "./pages/Success";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register2" element={<Register2 />} />
        <Route path="/Success" element={<Success />} />
        <Route path="/About" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
