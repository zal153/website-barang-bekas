import { Link } from "react-router-dom";
import { Icon } from "../components/Icon";

export function NotFoundPage() {
  return (
    <div className="shell" style={{ textAlign: "center", padding: "100px 20px" }}>
      <div className="eyebrow">404 · HALAMAN TIDAK DITEMUKAN</div>
      <h1 style={{ fontSize: "36px", margin: "16px 0", color: "#37452c" }}>
        Halaman yang kamu cari tidak ada.
      </h1>
      <p style={{ color: "#748560", maxWidth: "500px", margin: "0 auto 30px" }}>
        Mungkin alamat URL salah ketik atau halaman telah dipindahkan. Silakan kembali ke Beranda atau jelajahi menu lainnya.
      </p>
      <Link to="/" className="button button-dark" style={{ display: "inline-flex" }}>
        <Icon name="recycle" size={18} />
        Kembali ke Beranda
      </Link>
    </div>
  );
}
