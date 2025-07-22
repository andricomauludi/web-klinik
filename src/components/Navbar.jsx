import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <NavLink to="/">🩺 Klinik Sehat</NavLink>
        </div>

        {/* Menu */}
        <div className="navbar-links">
          <NavLink to="/" end>Beranda</NavLink>
          <NavLink to="/cari-dokter">Cari Dokter</NavLink>
          <NavLink to="/artikel">Artikel</NavLink>
          <NavLink to="/dokumentasi">Dokumentasi</NavLink>
          <NavLink to="/tentang-kami">Tentang Kami</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
