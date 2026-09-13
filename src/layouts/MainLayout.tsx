import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function MainLayout() {
  return (
    <div>
      <Navbar />

      <main style={{ padding: "1rem" }}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
