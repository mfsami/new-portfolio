import Nav from "../components/Nav.jsx";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="wrap">
      <Nav />
      <Outlet />
    </div>
  );
}
