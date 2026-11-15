import { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "../components/Icon";
import { MaterialCard } from "../components/MaterialCard";
import { useApp } from "../context/AppContext";
import { categories, materials } from "../data/materials";

export function MaterialPage() {
  const [category, setCategory] = useState("Semua material");
  const [query, setQuery] = useState("");
  const { setSelectedMaterial, openContact } = useApp();

  const filtered = materials.filter(
    (m) =>
      (category === "Semua material" || m.category === category) &&
      `${m.name} ${m.examples} ${m.category}`.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <section className="catalog shell" style={{ paddingBlock: "35px 70px" }}>
      <div className="section-heading">
        <div>
          <div className="eyebrow">KENALI RONGSOKANMU</div>
          <h2>
            Bukan sampah. <span>Masih ada nilainya.</span>
          </h2>
          <p>
            Cari materialmu, siapkan dengan benar, lalu konsultasikan langsung ke Slemania Rongsok.
          </p>
        </div>
        <span className="section-tag">
          <Icon name="recycle" size={15} />
          Total {materials.length} Material Terdaftar
        </span>
      </div>

      <div className="catalog-toolbar">
        <div className="categories" aria-label="Kategori material">
          {categories.map((c) => (
            <button
              className={`category ${category === c.label ? "active" : ""}`}
              key={c.label}
              aria-pressed={category === c.label}
              onClick={() => setCategory(c.label)}
            >
              <Icon name={c.icon} size={17} />
              {c.label}
            </button>
          ))}
        </div>

        <label className="search-field">
          <Icon name="search" size={17} />
          <input
            aria-label="Cari material"
            placeholder="Cari besi, kardus, plastik, aki..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button aria-label="Hapus pencarian" onClick={() => setQuery("")}>
              <Icon name="close" size={15} />
            </button>
          )}
        </label>
      </div>

      <div className="price-disclaimer">
        <Icon name="info" size={15} />
        <p>
          <strong>Harga di bawah adalah contoh simulasi, bukan harga beli resmi.</strong> Harga
          aktual dan penerimaan material mengikuti pasar terkini dan wajib dikonfirmasi ke Slemania Rongsok.
        </p>
      </div>

      <div className="material-grid">
        {filtered.map((material) => (
          <MaterialCard
            key={material.id}
            material={material}
            onSelect={setSelectedMaterial}
          />
        ))}
      </div>

      {!filtered.length && (
        <div className="empty-state">
          <Icon name="search" size={32} />
          <h3>Material belum ditemukan.</h3>
          <p>Coba gunakan kata kunci lain, atau tanyakan langsung ke Slemania Rongsok.</p>
          <button
            className="button button-outline"
            onClick={() => {
              setQuery("");
              setCategory("Semua material");
            }}
          >
            Tampilkan semua material
          </button>
        </div>
      )}

      <div className="catalog-more" style={{ marginTop: "40px" }}>
        <button className="button button-dark" onClick={() => openContact("WhatsApp")}>
          <Icon name="whatsapp" size={18} />
          Tanyakan material lain ke WhatsApp
        </button>
        <span>
          Mau hitung perkiraan hasil jual?{" "}
          <Link to="/estimasi">Gunakan kalkulator estimasi ↗</Link>
        </span>
      </div>
    </section>
  );
}
