import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App";

const app = (<App />);

// Render app
const container = document.getElementById("app");
const root = createRoot(container);
root.render(app);
