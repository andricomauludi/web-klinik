// src/pages/CariDokter.jsx
import './CariDokter.css';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import placeholder from './images/placeholder.png'


const CariDokter = () => {
  return (
    <div className="cari-dokter">
      {/* Section 1: Title */}
      <section className="header-section">
        <h1>Cari Dokter dan Buat Janji Temu</h1>
        <p>Temukan dokter terbaik untuk kebutuhan Anda dan keluarga, lalu atur janji dengan mudah secara online tanpa harus antre.</p>
      </section>

      {/* Section 2: List Dokter */}
      <section className="dokter-section">
        <div className="dokter-grid">
          {[1, 2, 3, 4].map((n) => (
            <div className="dokter-card" key={n}>
              <div className="dokter-image">
                <img
                  src={placeholder}
                  // src={`/images/dokter${n}.jpg`}
                  alt={`Dokter ${n}`}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/images/placeholder.jpg';
                  }}
                />
              </div>
              <div className="dokter-info">
                <h3>dr. Andi Kusuma</h3>
                <p>Dermatologi</p>
                <p>Spesialis Estetika</p>
                <p className="jadwal-title">Jadwal Praktek</p>
                <ul>
                  <li>Senin: 08.00 - 12.00</li>
                  <li>Rabu: 10.00 - 14.00</li>
                  <li>Jumat: 09.00 - 13.00</li>
                </ul>
                <a href="#" className="btn-janji">Janji Temu</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Poli */}
      <section className="poli-section">
        <h2>Atau Cari berdasarkan Poli</h2>
        <div className="poli-grid">
          <div className="poli-col">
            <a href="#">Poli Umum</a>
            <a href="#">Poli Gigi</a>
            <a href="#">Poli Luka</a>
          </div>
          <div className="poli-col">
            <a href="#">Poli Kulit</a>
            <a href="#">Farmasi</a>
          </div>
        </div>
      </section>      
    </div>
  );
};

export default CariDokter;