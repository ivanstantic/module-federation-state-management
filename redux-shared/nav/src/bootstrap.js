import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { StoreProvider } from "store/store";
import App from "./App";

const app = (
  <StoreProvider>
    <App />
  </StoreProvider>
);

// Render app
const container = document.getElementById("app");
const root = createRoot(container);
root.render(app);
