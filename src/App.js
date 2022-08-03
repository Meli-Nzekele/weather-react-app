import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer className="Footer">
          This App was built by
          <a
            href="https://incandescent-tapioca-00054a.netlify.app/"
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            Melissa Nzekele{" "}
          </a>
          and is{" "}
          <a
            href="https://github.com/Meli-Nzekele/weather-react-app"
            rel="noreferrer"
            target="_blank"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
