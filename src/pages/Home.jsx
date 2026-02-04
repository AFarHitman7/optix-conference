import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <h1>Welcome to Optix</h1>
      <p>IIT Conference.</p>
      <button
        onClick={() => {
          navigate("./register");
        }}
      >
        Register Now
      </button>
    </div>
  );
}
