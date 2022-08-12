import React from "react";
import "./App.css";
import Intro from "./components/intro";
import About from "./components/about";
import ProductList from "./components/productList";
import Contact from "./components/contact";
import Toggle from "./components/toggle";
import { useContext } from "react";
import { ThemeContext } from "./context";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#0F1217" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
}

export default App;
