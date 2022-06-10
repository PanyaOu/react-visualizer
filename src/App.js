import { useState } from "react";
import { Link } from "react-router-dom";
import "./css/App.css";
import pochaco from "./img/pochaco.png";

export default function App() {
  let [solarButton, setSolar] = useState(document.getElementById("solar"));
  // const darkButton = document.getElementById('dark');
  // const lightButton = document.getElementById('light');
  // const solarButton = document.getElementById('solar')
  const body = document.body;

  const theme = localStorage.getItem("theme");
  const isSolar = localStorage.getItem("isSolar");

  function updateSolar() {
    setSolar(document.getElementById("solar"));
  }

  if (theme) {
    body.classList.add(theme);
    isSolar && body.classList.add("solar");
  }

  // darkButton.onClick () =>{
  //   body.classList.replace('light', 'dark');
  //   localStorage.setItem('theme', 'dark');
  //   console.log(body.classList)

  // }
  function lightButton() {
    body.classList.replace("dark", "light");

    localStorage.setItem("theme", "light");
    console.log(body.classList);
  }

  const darkButton = () => {
    body.classList.replace("light", "dark");
    localStorage.setItem("theme", "dark");
    console.log(body.classList);
  };

  function solarButtonB() {
    console.log(body.classList);
    if (body.classList.contains("solar")) {
      body.classList.remove("solar");
      solarButton.style.cssText = `
        --bg-solar: var(--yellow);
      `;

      solarButton.innerText = "Solarize";

      localStorage.removeItem("isSolar");
    } else {
      solarButton.style.cssText = `
        --bg-solar: white;
      `;

      body.classList.add("solar");
      solarButton.innerText = "Normalize";
      localStorage.setItem("isSolar", true);
    }
  }

  return (
    <div className="light">
      <nav className="navbar">
        <ul className="navbar-nav">
          <Link className="nav-item" to="/sorting">
            Sorting Algorithms
          </Link>
          <Link className="nav-item" to="/pathfinding">
            PathFinding Algorithms
          </Link>

          <li className="nav-item has-dropdown">
            <a href="#" onClick={updateSolar}>
              Theme
            </a>
            <ul className="dropdown">
              <li className="dropdown-item">
                <a id="light" href="#" onClick={lightButton}>
                  Light
                </a>
              </li>
              <li className="dropdown-item">
                <a id="dark" href="#" onClick={darkButton}>
                  Dark
                </a>
              </li>
              <li className="dropdown-item" onClick={solarButtonB}>
                <a id="solar" href="#">
                  Solarize
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <header>
        <img src={pochaco} className="logo"></img>
        <h1>Panya's Portfolio</h1>
      </header>
      <main>
        <h2>Sailor Ipsum</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit
          libero volutpat sed cras ornare arcu. Tortor posuere ac ut consequat
          semper. Nisi scelerisque eu ultrices vitae. Sit amet nisl purus in.
        </p>
      </main>
    </div>
  );
}
