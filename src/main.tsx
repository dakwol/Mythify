import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/mira/theme.css";
import "./index.scss";
import AppRouter from "./app/providers/router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PrimeReactProvider>
      <AppRouter />
    </PrimeReactProvider>
  </StrictMode>
);
