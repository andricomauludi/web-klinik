import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Kolom 1 */}
        <div className="footer-col col-1">
          <div className="footer-logo">🩺 Klinik Sehat</div>
          <div className="footer-location">Jl. Sehat No. 123, Jakarta</div>
          <a href="#" className="footer-link">Lihat di Maps</a>
        </div>

        {/* Kolom 2 */}
        <div className="footer-col">
          <h4>Tentang Kami</h4>
          <a href="#">Tentang Kami</a>
          <a href="#">Visi dan Misi</a>
          <a href="#">Alamat</a>
        </div>

        {/* Kolom 3 */}
        <div className="footer-col">
          <h4>Informasi</h4>
          <a href="/dokumentasi">Dokumentasi</a>
          <a href="/artikel">Artikel</a>
        </div>

        {/* Kolom 4 */}
        <div className="footer-col">
          <h4>Kontak</h4>
          <a href="https://kliniksehat.com">Website</a>
          <a href="https://facebook.com">Facebook</a>
          <a href="https://instagram.com">Instagram</a>
          <div>Email: info@kliniksehat.com</div>
          <div>Telp: (021) 123-4567</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
