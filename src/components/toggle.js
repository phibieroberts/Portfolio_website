import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context";
import "./toggle.css";
import { FaMoon, FaSun } from "react-icons/fa";
function Toggle() {
  const theme = useContext(ThemeContext);
  function handleToggle() {
    theme.dispatch({ type: "TOGGLE" });
  }
  return (
    <div className="toggle">
      <FaSun />
      <FaMoon />
      <div
        className="toggle-btn"
        onClick={handleToggle}
        style={{ left: theme.state.darkMode ? 0 : 25 }}
      ></div>
    </div>
  );
}

export default Toggle;
