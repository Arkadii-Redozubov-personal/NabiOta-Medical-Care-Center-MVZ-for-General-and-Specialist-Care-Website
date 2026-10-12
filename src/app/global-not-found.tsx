import React from "react";
import "./globals.css";

export default function GlobalNotFound() {
  return (
    <html lang="de">
      <body>
        <div style={{ textAlign: "center", padding: "100px 20px" }}>
          <h1>404 – Seite nicht gefunden</h1>
          <p>Die angeforderte Seite konnte leider nicht gefunden werden.</p>
          <a href="/" style={{ color: "#219DD8", textDecoration: "underline" }}>Zur Startseite</a>
        </div>
      </body>
    </html>
  );
}
