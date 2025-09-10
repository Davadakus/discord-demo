import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Pages/index.css";
import MainMenu from "./Pages/MainMenu.tsx";
import Test from "./Pages/test.tsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Test /> */}
    <MainMenu />
  </StrictMode>,
);
