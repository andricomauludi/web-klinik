import "./Artikel.css";
import { Link } from "react-router-dom";
import placeholder from "./images/placeholder.png";
import { useState } from "react";

const Artikel = () => {
  const allArticles = Array.from({ length: 18 }, (_, i) => ({
    id: i + 1,
    title: `Judul Artikel ${i + 1}`,
    date: "18 Juli 2025",
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;
  const totalPages = Math.ceil(allArticles.length / articlesPerPage);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = allArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    
  };
  return (
    <div className="artikel-wrapper">
      {/* Section 1: Header */}
      <section className="header-section">
        <h1>Artikel</h1>
        <p>
          Kami menghadirkan informasi kesehatan terkini dan terpercaya untuk
          membantu Anda dan keluarga tetap sehat.
        </p>
      </section>

      {/* Section 2: Artikel Terbaru */}
      <section className="artikel-section">
        <h2 className="center">Artikel Terbaru</h2>
        <div className="artikel-grid">
          {currentArticles.map((article) => (
            <div className="artikel-card" key={article.id}>
              <img
                src={placeholder}
                alt={article.title}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/images/placeholder.jpg";
                }}
              />
              <small>{article.date}</small>
              <h3>{article.title}</h3>
              <Link to="/artikel">Baca selengkapnya -&gt;</Link>
            </div>
          ))}
        </div>

        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              type="button"
              key={i + 1}
              className={`page-btn ${currentPage === i + 1 ? "active" : ""}`}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <div className="center">
          <Link to="/artikel" className="btn">
            Lihat Semua
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Artikel;
