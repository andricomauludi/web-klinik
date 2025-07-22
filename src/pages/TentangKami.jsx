import './tentangkami.css';
import Footer from '../components/Footer';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import placeholder from './images/placeholder.png';

const TentangKami = () => {
  return (
    <div className="tentang-wrapper">
      {/* Section 1: Tentang Klinik */}
      <section className="tentang-section">
        <div className="tentang-row">
          <div className="text-col">
            <h1>Tentang Klinik Sehat</h1>
            <p>
              Klinik Sehat hadir sebagai mitra kesehatan tepercaya untuk masyarakat. Dengan tenaga profesional dan fasilitas modern, kami berkomitmen memberikan pelayanan terbaik untuk Anda dan keluarga.
            </p>
          </div>
          <div className="img-col">
            <img src={placeholder} alt="Tentang Klinik" />
          </div>
        </div>
      </section>

      {/* Section 2: Visi Misi */}
      <section className="visi-section">
        <div className="tentang-row">
          <div className="img-col">
            <img src={placeholder} alt="Visi Misi" />
          </div>
          <div className="text-col">
            <h2>Visi dan Misi Kami</h2>
            <p><strong>Visi:</strong> Menjadi klinik rujukan utama yang unggul dalam layanan kesehatan dan kepuasan pasien.</p>
            <p><strong>Misi:</strong></p>
            <ul>
              <li>Memberikan pelayanan medis berkualitas tinggi</li>
              <li>Mengedepankan kenyamanan dan kepercayaan pasien</li>
              <li>Berinovasi dalam teknologi dan sistem pelayanan</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3: Alamat dan Informasi */}
      <section className="alamat-section">
        <h2>Alamat dan Informasi</h2>
        <p>Kami berada di pusat kota, mudah diakses dan siap melayani Anda setiap hari.</p>
        <div className="maps-container">
          <MapContainer center={[-6.2, 106.816666]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[-6.2, 106.816666]}>
              <Popup>Klinik Sehat</Popup>
            </Marker>
          </MapContainer>
        </div>
      </section>

      {/* Section 4: Legalitas */}
      <section className="legalitas-section">
        <h2>Legalitas</h2>
        <p>Berikut adalah dokumen dan izin resmi yang dimiliki oleh Klinik Sehat.</p>
        <div className="legalitas-grid">
          {[...Array(6)].map((_, i) => (
            <div className="legalitas-card" key={i}>
              <img src={placeholder} alt={`Dokumen ${i + 1}`} />
              <div className="card-content">
                <h3>Dokumen {i + 1}</h3>
                <p className="hidden">Deskripsi singkat mengenai dokumen legalitas kami.</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TentangKami;
