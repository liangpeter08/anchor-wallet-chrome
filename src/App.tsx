import React, { useEffect, useState } from "react";
import "./App.css";
import { AnchorLogoWithWordmark } from "./logo/Logo";
import Wallet from "./wallet/Wallets";

function App() {
  const [cookieInfo, setCookieInfo] = useState("");
  useEffect(() => {
    fetchCookie();
  }, []);

  const fetchCookie = () => {
    chrome.storage.sync.get(["cookies"], function ({ cookies }) {
      const [{ name, value }] = cookies;
      setCookieInfo(name + "=" + value);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <AnchorLogoWithWordmark includeSpotify />
        <Wallet cookieInfo={cookieInfo}></Wallet>
      </header>
    </div>
  );
}

export default App;
