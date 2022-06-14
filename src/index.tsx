import { createRoot } from "react-dom/client";
import App from "./App";
import { StoreProvider } from "./Store";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes";

const root = createRoot(document.getElementById("root")!);
root.render(
  <StoreProvider>
    <BrowserRouter>
      <App />
      <Router />
    </BrowserRouter>
  </StoreProvider>
);
