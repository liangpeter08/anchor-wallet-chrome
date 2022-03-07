import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [cookiesInfo, setCookiesInfo] = useState("");
  useEffect(() => {
    chrome.storage.local.get("cookies", function (result) {
      console.log("cookie", result);
      return setCookiesInfo(result.cookies);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{cookiesInfo}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
