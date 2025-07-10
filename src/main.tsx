import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//App
import App from "./App.tsx";
//css
import "./index.css";
//set up react-router
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
