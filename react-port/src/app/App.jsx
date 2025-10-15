import { Routes, Route } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import TIL from "../pages/TIL";
import LastStand from "../pages/projects/LastStand";
import Heartbound from "../pages/projects/Heartbound";
import WinterSoccer from "../pages/projects/WinterSoccer";

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/til" element={<TIL />} />
        <Route path="/projects/last-stand" element={<LastStand />} />
        <Route path="/projects/heartbound" element={<Heartbound />} />
        <Route path="/projects/winter-soccer" element={<WinterSoccer />} />
      </Route>

      {/* 404 fallback */}
      <Route path="*" element={<h2> nothing here...</h2>} />
    </Routes>
  );
}
