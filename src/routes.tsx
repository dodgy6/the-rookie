import "./index.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import FavPage from "./FavPage";

export default function Router(): JSX.Element {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<FavPage />} path="/faves" />
    </Routes>
  );
}
