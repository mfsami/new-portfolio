import { Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        {/* add more routes here */}
      </Route>

      {/* 404 fallback */}
      <Route path="*" element={<h2> nothing here...</h2>} />
    </Routes>
  );
}
