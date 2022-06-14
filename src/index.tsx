import ReactDOM from "react-dom";
import App from "./App";
import { StoreProvider } from "./Store";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes";

ReactDOM.render(
  <StoreProvider>
    <BrowserRouter>
      <App /> 
      <Router />
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById("root")
);
