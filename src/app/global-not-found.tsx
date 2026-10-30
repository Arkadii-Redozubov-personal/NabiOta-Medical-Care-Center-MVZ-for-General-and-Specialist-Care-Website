import React from "react";
import "./globals.css";

export default function GlobalNotFound() {
  return (
    <html lang="de">
      <body>
        <div className="global-not-found-wrapper">
          <h1>404 – Seite nicht gefunden</h1>
          <p>Die angeforderte Seite konnte leider nicht gefunden werden.</p>
          <a href="/" className="global-not-found-link">Zur Startseite</a>
        </div>
      </body>
    </html>
  );
}
