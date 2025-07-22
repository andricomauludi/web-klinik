import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Beranda from "./pages/Beranda";
import CariDokter from "./pages/CariDokter";
import Artikel from "./pages/Artikel";
import Dokumentasi from "./pages/Dokumentasi";
import TentangKami from "./pages/TentangKami";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/cari-dokter" element={<CariDokter />} />
        <Route path="/artikel" element={<Artikel />} />
        <Route path="/dokumentasi" element={<Dokumentasi />} />
        <Route path="/tentang-kami" element={<TentangKami />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
