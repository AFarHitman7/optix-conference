import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import styles from "./Navbar.module.css";

const triggerRipple = (e) => {
  const btn = e.currentTarget;
  btn.classList.remove(styles.rippleActive);
  void btn.offsetWidth;
  btn.classList.add(styles.rippleActive);
};

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo} onClick={() => navigate("/")} role="button">
        <img src={logo} alt="Optix Logo" />
      </div>

      {/* Nav links */}
      <div className={styles.navlinks}>
        <ul>
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/about">ABOUT US</NavLink>
          </li>
          <li>
            <NavLink to="/program">PROGRAM</NavLink>
          </li>
          <li>
            <NavLink to="/contact">CONTACT US</NavLink>
          </li>
        </ul>
      </div>

      {/* Register button */}
      <div className={styles.register}>
        <button
          onMouseEnter={triggerRipple}
          onClick={() => navigate("/register")}
        >
          <span />
          REGISTER NOW
        </button>
      </div>
    </nav>
  );
}
