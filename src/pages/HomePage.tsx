import { Link } from "react-router-dom";
import { Icon } from "../components/Icon";
import { MaterialCard } from "../components/MaterialCard";
import { useApp } from "../context/AppContext";
import { materials } from "../data/materials";
import type { IconName } from "../types";
import { heroImg } from "../utils/assets";

export function HomePage() {
  const { setSelectedMaterial } = useApp();

  // Highlight top 4 material for homepage preview
  const featuredMaterials = materials.slice(0, 4);

  return (
    <>
      <section className="hero shell">
        <div className="hero-copy">
          <div className="eyebrow hero-eyebrow">
            <span className="status-dot" />
            DARI RONGSOK, JADI BERARTI.
          </div>
          <h1>
            Jangan dibuang.
            <br />
            <span>Jadikan uang.</span>
            <svg viewBox="0 0 360 15" className="headline-underline" aria-hidden="true">
              <path d="M3 10Q165-4 355 7M50 14Q200 5 308 11" />
            </svg>
          </h1>
          <p>
            Besi tua, kardus menumpuk, sampai botol plastik.
            <br className="desktop-break" /> Cek jenis dan perkiraan nilainya, lalu jual langsung
            <br className="desktop-break" /> ke Slemania Rongsok. Lebih beres, lebih bermanfaat.
          </p>
          <div className="hero-buttons">
            <Link className="button button-orange" to="/estimasi">
              Cek nilai rongsokanmu <Icon name="arrow" size={18} />
            </Link>
            <Link className="text-link" to="/material">
              Lihat yang kami terima ↗
            </Link>
          </div>
          <div className="hero-notes">
            <span>
              <Icon name="check" size={14} />
              Tak harus masih berfungsi
            </span>
            <span>
              <Icon name="check" size={14} />
              Dinilai dari materialnya
            </span>
          </div>
        </div>
        <div className="hero-visual">
          <img
            src={heroImg}
            alt="Kumpulan roda gigi dan potongan besi tua yang dapat dipilah untuk daur ulang"
          />
          <div className="image-shade" />
          <div className="image-label">
            <span className="status-dot" />
            MATERIAL PILIHAN UNTUK DAUR ULANG
          </div>
          <div className="round-stamp">
            <Icon name="recycle" size={29} />
            <span>PILAH. TIMBANG.</span>
            <span>BERI NILAI LAGI.</span>
          </div>
          <div className="floating-card">
            <span className="floating-icon">
              <Icon name="scale" size={28} />
            </span>
            <div>
              <span>Yang menumpuk, bisa jadi pemasukan.</span>
              <strong>Kami lihat nilai materialnya.</strong>
              <p>Bukan merek, bukan tampilan, bukan kondisi baru.</p>
            </div>
            <Link to="/material" aria-label="Lihat material rongsok">
              <Icon name="arrow" />
            </Link>
          </div>
          <div className="image-caption">
            <span>Rongsokan hari ini. Bahan baku esok hari.</span>
            <Icon name="recycle" size={16} />
          </div>
        </div>
      </section>

      <div className="benefits shell">
        {[
          {
            icon: "metal" as IconName,
            title: "Rusak pun masih bernilai",
            text: "Dinilai berdasarkan jenis & kondisi material.",
          },
          {
            icon: "scale" as IconName,
            title: "Cek sebelum menjual",
            text: "Kenali material dan simulasikan nilainya.",
          },
          {
            icon: "chat" as IconName,
            title: "Langsung ke Slemania Rongsok",
            text: "Kirim foto dan diskusikan rongsokanmu lewat kanal kami.",
          },
        ].map((item) => (
          <div key={item.title}>
            <span className="benefit-icon">
              <Icon name={item.icon} size={25} />
            </span>
            <div>
              <strong>{item.title}</strong>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      <section className="catalog shell">
        <div className="section-heading">
          <div>
            <div className="eyebrow">KATALOG MATERIAL POPULER</div>
            <h2>
              Material yang <span>paling sering diterima.</span>
            </h2>
            <p>Berbagai jenis logam, plastik, dan kertas yang siap kami tampung dengan harga wajar.</p>
          </div>
          <Link to="/material" className="section-tag" style={{ textDecoration: "none" }}>
            <Icon name="recycle" size={15} />
            Lihat semua {materials.length} material ↗
          </Link>
        </div>

        <div className="material-grid">
          {featuredMaterials.map((material) => (
            <MaterialCard
              key={material.id}
              material={material}
              onSelect={setSelectedMaterial}
            />
          ))}
        </div>

        <div className="catalog-more" style={{ marginTop: "35px" }}>
          <Link to="/material" className="button button-outline">
            Buka Katalog Lengkap ({materials.length} Jenis Rongsok)
            <Icon name="arrow" size={17} />
          </Link>
          <span>
            Punya material di luar daftar ini?{" "}
            <Link to="/kontak">Tanyakan langsung ke kami ↗</Link>
          </span>
        </div>
      </section>

      <section className="how-section shell">
        <div className="section-heading">
          <div>
            <div className="eyebrow">RUMAH LEBIH LEGA, MATERIAL LEBIH BERGUNA</div>
            <h2>
              Jual rongsok, <span>nggak perlu ribet.</span>
            </h2>
          </div>
          <p className="how-intro">
            Dari tumpukan di sudut rumah
            <br />
            ke tangan yang bisa mengolahnya.
          </p>
        </div>
        <div className="steps">
          {[
            {
              icon: "box" as IconName,
              title: "Pilah & cek material",
              text: "Pisahkan besi, plastik, kertas, dan material lainnya. Cek kategori yang ada di website.",
            },
            {
              icon: "chat" as IconName,
              title: "Kirim foto & tanya harga",
              text: "Hubungi Slemania Rongsok lewat WhatsApp atau sosial media. Sertakan foto, perkiraan berat, dan lokasi.",
            },
            {
              icon: "scale" as IconName,
              title: "Sepakati & timbang",
              text: "Konfirmasi harga, cara penyerahan, dan kemungkinan penjemputan langsung dengan Slemania Rongsok.",
            },
          ].map((step, i) => (
            <div className="step" key={step.title}>
              <div className="step-top">
                <span>
                  <Icon name={step.icon} size={26} />
                </span>
                <b>0{i + 1}</b>
              </div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "32px" }}>
          <Link to="/cara-jual" className="button button-dark" style={{ display: "inline-flex" }}>
            Pelajari panduan cara jual lengkap
            <Icon name="arrow" size={17} />
          </Link>
        </div>
      </section>

      <section className="estimate-section" style={{ marginBlock: "40px 60px" }}>
        <div className="shell estimate-layout" style={{ gridTemplateColumns: "1fr auto" }}>
          <div className="estimate-copy" style={{ maxWidth: "580px" }}>
            <div className="eyebrow">SIMULATOR NILAI JUAL</div>
            <h2>
              Mau tahu perkiraan uang <span>yang bisa kamu dapatkan?</span>
            </h2>
            <p>
              Gunakan kalkulator estimasi online kami untuk menghitung perkiraan pemasukan dari rongsokan sebelum menjualnya.
            </p>
            <div className="hero-buttons" style={{ marginTop: "24px" }}>
              <Link to="/estimasi" className="button button-orange">
                Buka Kalkulator Estimasi <Icon name="arrow" size={18} />
              </Link>
              <Link to="/kontak" className="text-link">
                Konsultasi WhatsApp ↗
              </Link>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#edf2e1",
              borderRadius: "14px",
              padding: "40px",
              color: "#5b6e45",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <Icon name="scale" size={60} />
              <div style={{ fontWeight: 650, marginTop: "12px", fontSize: "14px" }}>
                Hitung Mudah & Transparan
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
