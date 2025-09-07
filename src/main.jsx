import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Pages/index.css";
import MainMenu from "./Pages/MainMenu.tsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainMenu />
  </StrictMode>,
);
