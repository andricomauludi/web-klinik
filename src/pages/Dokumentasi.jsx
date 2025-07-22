import './Dokumentasi.css';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import placeholder from './images/placeholder.png';
import { useState } from 'react';

const Dokumentasi = () => {
  const allPhotos = Array.from({ length: 18 }, (_, i) => ({
    id: i + 1,
    src: placeholder,
    alt: `Dokumentasi ${i + 1}`,
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const photosPerPage = 6;
  const totalPages = Math.ceil(allPhotos.length / photosPerPage);

  const indexOfLast = currentPage * photosPerPage;
  const indexOfFirst = indexOfLast - photosPerPage;
  const currentPhotos = allPhotos.slice(indexOfFirst, indexOfLast);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="artikel-wrapper">
      {/* Section 1: Title */}
      <section className="header-section">
        <h1>Dokumentasi</h1>
        <p>
          Lihat lebih dekat suasana dan pelayanan di Klinik. 
          Kami berkomitmen memberikan kenyamanan dan kepercayaan sejak pertama kali Anda datang.
        </p>
      </section>

      {/* Section 2: Dokumentasi Grid */}
      <section className="dokumentasi-section">
        <div className="dokumen-grid">
          {currentPhotos.map((photo) => (
            <img key={photo.id} src={photo.src} alt={photo.alt} />
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              type="button"
              className={`page-btn ${currentPage === i + 1 ? 'active' : ''}`}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>

        {/* <div className="center">
          <Link to="/dokumentasi" className="btn">Lihat Semua</Link>
        </div> */}
      </section>      
    </div>
  );
};

export default Dokumentasi;
