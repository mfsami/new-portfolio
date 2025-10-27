import { Routes, Route } from "react-router-dom";
import RootLayout from "./RootLayout";

// Pages
import Home from "../pages/Home/Home";
import Projects from "../pages/ProjectsPg/Projects";
import TIL from "../pages/TIL/TIL";

// Projects
import LastStand from "../pages/projects/LastStand";
import Heartbound from "../pages/projects/Heartbound";
import WinterSoccer from "../pages/projects/WinterSoccer";
import Portfolio from "../pages/projects/Portfolio";
import Graphite from "../pages/projects/Graphite";
import G2ARedesign from "../pages/projects/G2ARedesign";
import ParryGame from "../pages/projects/ParryGame";
import SpaceExploration from "../pages/projects/SpaceExploration";

// JS
import ScrollToTop from "../../js/scrollToTop";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/til" element={<TIL />} />
          <Route path="/projects/last-stand" element={<LastStand />} />
          <Route path="/projects/heartbound" element={<Heartbound />} />
          <Route path="/projects/winter-soccer" element={<WinterSoccer />} />
          <Route path="/projects/portfolio" element={<Portfolio />} />
          <Route path="/projects/graphite" element={<Graphite />} />
          <Route path="/projects/g2a-redesign" element={<G2ARedesign />} />
          <Route path="/projects/parry-game" element={<ParryGame />} />
          <Route
            path="/projects/space-exploration"
            element={<SpaceExploration />}
          />
        </Route>
        <Route path="*" element={<h2> nothing here...</h2>} />
      </Routes>
    </>
  );
}
