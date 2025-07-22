// src/pages/Beranda.jsx
import './Beranda.css';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import placeholder from './images/placeholder.png'

const Beranda = () => {
  return (
    <div className="beranda">
      {/* Section 1: Hero Image */}
      <section className="hero-section">
        <img src={placeholder} alt="Hero" className="hero-image" />
      </section>

      {/* Section 2: Mitra Kesehatan */}
      <section className="mitra-section">
        <div className="mitra-content">
          <div className="mitra-text">
            <h2>Mitra Kesehatan Tepercaya untuk Anda dan Keluarga</h2>
            <p>Klinik ini hadir untuk memberikan pelayanan kesehatan terbaik yang aman, nyaman, dan mudah dijangkau oleh seluruh anggota keluarga Anda.</p>
          </div>
          <div className="mitra-image">
            <img src={placeholder} alt="Mitra" />
            {/* <img src="/images/placeholder.png" alt="Mitra" /> */}
          </div>
        </div>
      </section>

      {/* Section 3: Layanan Kami */}
      <section className="layanan-section">
        <h2 className="center">Layanan Kami</h2>
        <div className="layanan-grid">
          {[...Array(6)].map((_, idx) => (
            <div className="layanan-card" key={idx}>
              <img src={placeholder} alt={`Layanan ${idx + 1}`} />
              {/* <img src={`/images/layanan${idx + 1}.jpg`} alt={`Layanan ${idx + 1}`} /> */}
              <h3>Judul Layanan {idx + 1}</h3>
              <p>Deskripsi singkat mengenai layanan {idx + 1} yang tersedia di klinik kami.</p>
              <Link to="/cari-dokter">Cek layanan -&gt;</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Buat Janji */}
      <section className="buat-janji-section">
        <div className="buat-janji-content">
          <div className="buat-janji-image">
            {/* <img src="/images/janji.jpg" alt="Buat Janji" /> */}
            <img src={placeholder} alt="Buat Janji" />
          </div>
          <div className="buat-janji-text">
            <h2>Buat Janji</h2>
            <p>Tidak perlu antre panjang. Buat janji dengan dokter pilihan Anda secara online kapan saja dan dari mana saja.</p>
            <Link to="/cari-dokter" className="btn">Cari Dokter</Link>
          </div>
        </div>
      </section>

      {/* Section 5: Dokumentasi */}
      <section className="dokumentasi-section">
        <h2 className="center">Dokumentasi</h2>
        <div className="dokumen-grid">
          {[1, 2, 3].map((n) => (
            // <img key={n} src={`/images/doc${n}.jpg`} alt={`Dokumentasi ${n}`} />
            <img key={n} src={placeholder} alt={`Dokumentasi ${n}`} />
          ))}
        </div>
        <div className="center">
          <Link to="/dokumentasi" className="btn">Lihat Semua</Link>
        </div>
      </section>

      {/* Section 6: Artikel Terbaru */}
      <section className="artikel-section">
        <h2 className="center">Artikel Terbaru</h2>
        <div className="artikel-grid">
          {[1, 2, 3].map((n) => (
            <div className="artikel-card" key={n}>
              <img src={placeholder} alt={`Artikel ${n}`} />
              <small>18 Juli 2025</small>
              <h3>Judul Artikel {n}</h3>
              <Link to="/artikel">Baca selengkapnya -&gt;</Link>
            </div>
          ))}
        </div>
        <div className="center">
          <Link to="/artikel" className="btn">Lihat Semua</Link>
        </div>
      </section>      
    </div>
  );
};

export default Beranda;
