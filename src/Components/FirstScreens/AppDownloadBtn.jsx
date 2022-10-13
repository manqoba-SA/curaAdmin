import React from "react";

export default function AppDownloadBtn() {
  return (
    <div class="app-container">
      <center>
        <h2 className="welcomecardHeader">Download Cura App</h2>

        <a
          href="https://www.kobinet.com.tr/"
          target="_blank"
          className="market-btn apple-btn"
          role="button"
        >
          <span className="market-button-subtitle">Download on the</span>
          <span className="market-button-title">App Store</span>
        </a>

        <a
          href="https://www.kobinet.com.tr/"
          target="_blank"
          className="market-btn google-btn"
          role="button"
        >
          <span className="market-button-subtitle">Download on the</span>
          <span className="market-button-title">Google Play</span>
        </a>
      </center>
    </div>
  );
}
