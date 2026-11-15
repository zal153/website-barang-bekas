import { Link } from "react-router-dom";
import { Icon } from "../components/Icon";
import { useApp } from "../context/AppContext";
import type { IconName } from "../types";

export function CaraJualPage() {
  const { openContact } = useApp();

  const steps = [
    {
      num: "01",
      icon: "box" as IconName,
      title: "Pilah & Cek Material",
      desc: "Kumpulkan dan pisahkan rongsokan berdasarkan kelompoknya: besi, tembaga, botol plastik, kardus, atau elektronik. Pemilahan yang rapi membantu penilaian harga yang optimal.",
      tips: "Simpan dalam keadaan kering dan jangan dicampur dengan sampah basah/organik.",
    },
    {
      num: "02",
      icon: "chat" as IconName,
      title: "Kirim Foto & Tanya Harga",
      desc: "Hubungi Slemania Rongsok via WhatsApp. Kirimkan beberapa foto kondisi rongsokan, perkiraan berat total, dan lokasi tempat tinggalmu.",
      tips: "Admin akan memberikan kisaran harga terkini serta info penyerahan.",
    },
    {
      num: "03",
      icon: "scale" as IconName,
      title: "Sepakati & Timbang",
      desc: "Kamu bisa mengantarkan langsung ke lokasi kami atau mengajukan penjemputan armada untuk jumlah tertentu. Rongsokan ditimbang transparan di hadapanmu.",
      tips: "Pembayaran langsung dilakukan tunai atau transfer segera setelah penimbangan.",
    },
  ];

  const preparationTips = [
    {
      title: "Logam & Besi Tua",
      icon: "metal" as IconName,
      items: [
        "Pisahkan besi biasa dari tembaga, kuningan, atau aluminium.",
        "Bersihkan dari tempelan plastik, kayu, atau adukan semen.",
        "Potongan panjang sebaiknya diikat rapi agar mudah diangkut.",
      ],
    },
    {
      title: "Botol Plastik PET",
      icon: "bottle" as IconName,
      items: [
        "Kosongkan sisa cairan dalam botol hingga bersih.",
        "Lepaskan tutup dan label bila memungkinkan.",
        "Pipihkan/injak botol agar tidak memakan ruang penyimpanan.",
      ],
    },
    {
      title: "Kardus & Kertas Arsip",
      icon: "box" as IconName,
      items: [
        "Lipat kardus mendatar dan ikat menggunakan tali.",
        "Jaga kardus tetap kering, jangan biarkan terkena air hujan.",
        "Untuk kertas arsip pribadi, disarankan dipotong/dihancurkan.",
      ],
    },
    {
      title: "Barang Elektronik & Aki",
      icon: "monitor" as IconName,
      items: [
        "Jangan membongkar tabung CRT, kompresor, atau baterai sendiri.",
        "Aki bekas harus disimpan dalam posisi tegak agar air aki tidak tumpah.",
        "Kabel tembaga jangan dibakar untuk menjaga kualitas dan kesehatan lingkungan.",
      ],
    },
  ];

  return (
    <div style={{ paddingBottom: "75px" }}>
      <section className="how-section shell" style={{ paddingTop: "35px" }}>
        <div className="section-heading">
          <div>
            <div className="eyebrow">RUMAH LEBIH LEGA, MATERIAL LEBIH BERGUNA</div>
            <h2>
              Jual rongsok, <span>nggak perlu ribet.</span>
            </h2>
            <p className="how-intro">
              Panduan langkah mudah mengubah tumpukan barang bekas di rumahmu menjadi penghasilan tambahan.
            </p>
          </div>
          <span className="section-tag">
            <Icon name="recycle" size={15} />
            Alur 3 Langkah Praktis
          </span>
        </div>

        <div className="steps" style={{ marginTop: "30px" }}>
          {steps.map((step) => (
            <div className="step" key={step.title} style={{ display: "flex", flexDirection: "column" }}>
              <div className="step-top">
                <span>
                  <Icon name={step.icon} size={26} />
                </span>
                <b>{step.num}</b>
              </div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
              <div
                style={{
                  marginTop: "auto",
                  paddingTop: "14px",
                  fontSize: "11px",
                  color: "#6b7a58",
                  borderTop: "1px dashed #d5dec6",
                }}
              >
                <strong>Tip:</strong> {step.tips}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Preparation Section */}
      <section style={{ marginTop: "60px" }}>
        <div className="section-heading">
          <div>
            <div className="eyebrow">PANDUAN PERSIAPAN</div>
            <h2>
              Tips Memilah Material <span>Sebelum Dijual</span>
            </h2>
            <p>
              Material yang dipilah dengan baik dihargai lebih tinggi dan mempercepat proses penimbangan.
            </p>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px",
            marginTop: "24px",
          }}
        >
          {preparationTips.map((tip) => (
            <div
              key={tip.title}
              style={{
                background: "#f9faf5",
                border: "1px solid #e2e8d6",
                borderRadius: "10px",
                padding: "24px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                <span
                  style={{
                    background: "#e5edcc",
                    color: "#556b3e",
                    padding: "8px",
                    borderRadius: "6px",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <Icon name={tip.icon} size={20} />
                </span>
                <strong style={{ fontSize: "15px", color: "#37452d" }}>{tip.title}</strong>
              </div>
              <ul style={{ paddingLeft: "18px", margin: 0, fontSize: "12px", color: "#617053", lineHeight: "1.8" }}>
                {tip.items.map((item, idx) => (
                  <li key={idx} style={{ marginBottom: "6px" }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Pickup & Drop-off info */}
      <section
        style={{
          marginTop: "60px",
          background: "#f2f6ea",
          border: "1px solid #dfe6d2",
          borderRadius: "14px",
          padding: "36px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "28px",
          alignItems: "center",
        }}
      >
        <div>
          <div className="eyebrow">LAYANAN PENJEMPUTAN</div>
          <h3 style={{ fontSize: "22px", margin: "10px 0", color: "#334127" }}>
            Bisa Antar Sendiri atau Dijemput Armada Kami
          </h3>
          <p style={{ fontSize: "13px", color: "#657555", lineHeight: "1.7" }}>
            Punya rongsokan dalam jumlah besar seperti besi bongkaran, rangka gudang, atau kardus toko?
            Konsultasikan alamatmu, kami siap membantu dengan armada angkutan sesuai kesepakatan.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <Link to="/estimasi" className="button button-orange" style={{ justifyContent: "center" }}>
            Cek Estimasi Nilai Rongsokan <Icon name="arrow" size={17} />
          </Link>
          <button
            className="button button-dark"
            onClick={() => openContact("WhatsApp")}
            style={{ justifyContent: "center" }}
          >
            <Icon name="whatsapp" size={17} />
            Hubungi untuk Tanya Penjemputan
          </button>
        </div>
      </section>
    </div>
  );
}
