import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { CountProvider } from "host/store";
import App from "./App";

const app = (
  <CountProvider>
    <App />
  </CountProvider>
);

// Render app
const container = document.getElementById("app");
const root = createRoot(container);
root.render(app);
