import { business } from "../business";
import { Icon } from "../components/Icon";
import { useApp } from "../context/AppContext";
import type { Channel, IconName } from "../types";

export function KontakFaqPage() {
  const { openContact } = useApp();

  const channels: { name: Channel; icon: IconName; text: string }[] = [
    {
      name: "WhatsApp",
      icon: "whatsapp",
      text: "Diskusi material, penawaran harga, dan jadwalkan penjemputan",
    },
    {
      name: "Instagram",
      icon: "instagram",
      text: "Tanya informasi atau kirim DM seputar rongsokan",
    },
    {
      name: "Facebook",
      icon: "facebook",
      text: "Terhubung dengan komunitas dan pembaruan Slemania Rongsok",
    },
    {
      name: "YouTube",
      icon: "youtube",
      text: "Tonton video edukasi dan dokumentasi pemilahan rongsok",
    },
    {
      name: "TikTok",
      icon: "tiktok",
      text: "Ikuti konten harian dan tips seputar barang bekas",
    },
  ];

  const faqs = [
    {
      q: "Apakah rongsokan harus masih bisa dipakai atau berfungsi?",
      a: "Tidak harus! Nilai utama rongsokan dinilai berdasarkan jenis dan bobot materialnya (misal berat besi, tembaga, atau plastik) untuk didaur ulang kembali, bukan fungsi pakainya.",
    },
    {
      q: "Apakah harga di website sudah merupakan harga beli pasti?",
      a: "Harga di website merupakan referensi simulasi terkini. Harga final dapat menyesuaikan dengan kondisi kebersihan barang, kadar kemurnian logam, serta fluktuasi harga pasar rongsok saat penimbangan.",
    },
    {
      q: "Apakah rongsokan bisa dijemput langsung ke rumah atau lokasi proyek?",
      a: "Bisa! Untuk jumlah atau berat tertentu (misal besi tebal, bongkaran bangunan, atau kardus volume besar), kami menyediakan armada jemput. Silakan kirimkan foto dan share location via WhatsApp.",
    },
    {
      q: "Material apa saja yang wajib ditanyakan atau tidak boleh dibongkar sendiri?",
      a: "Perangkat elektronik komersial, tabung gas/freon bertekanan, baterai aki asam timbal, dan limbah medis atau kimia wajib dikonfirmasi terlebih dahulu. Jangan dibongkar atau dibakar sendiri karena berbahaya.",
    },
    {
      q: "Bagaimana sistem pembayarannya?",
      a: "Pembayaran dilakukan langsung dan transparan begitu penimbangan selesai di tempat, bisa secara tunai (cash) maupun transfer antar rekening bank.",
    },
    {
      q: "Berapa minimal berat rongsokan yang diterima jika antar sendiri?",
      a: "Jika mengantarkan langsung ke pangkalan Slemania Rongsok, tidak ada batas minimal! Berapapun jumlah rongsokanmu akan kami timbang dan hargai.",
    },
  ];

  return (
    <div style={{ paddingBlock: "35px 65px" }}>
      <section className="contact-section shell" style={{ marginBottom: "65px" }}>
        <div className="contact-copy">
          <div className="eyebrow">KAMI BANTU CEK RONGSOKANMU</div>
          <h2>
            Ragu ini bisa dijual?
            <br />
            <span>Tanya Slemania Rongsok dulu.</span>
          </h2>
          <p>
            Kirimkan foto barang, perkiraan berat, atau lokasi penjemputan.
            <br />
            Kami siap merespons dengan ramah melalui kanal komunikasi favoritmu.
          </p>
          <div className="contact-footnote">
            <Icon name="info" size={15} />
            <span>
              {business.whatsapp ||
              business.instagramUrl ||
              business.facebookUrl ||
              business.youtubeUrl ||
              business.tiktokUrl
                ? "Layanan konsultasi online aktif setiap hari kerja."
                : "Nomor dan akun resmi Slemania Rongsok belum dicantumkan."}
            </span>
          </div>
        </div>

        <div className="contact-options">
          {channels.map((c) => (
            <button
              className={`contact-option ${c.name === "WhatsApp" ? "primary-contact" : ""}`}
              key={c.name}
              onClick={() => openContact(c.name)}
            >
              <span className="channel-icon">
                <Icon name={c.icon} size={24} />
              </span>
              <div>
                <strong>{c.name}</strong>
                <span>{c.text}</span>
              </div>
              <span className="external-arrow">↗</span>
            </button>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section shell">
        <div>
          <div className="eyebrow">SEBELUM MENGHUBUNGI</div>
          <h2>
            Pertanyaan yang
            <br />
            <span>sering diajukan.</span>
          </h2>
          <p style={{ fontSize: "12px", color: "#81916f", marginTop: "14px", lineHeight: "1.8", maxWidth: "340px" }}>
            Pelajari jawaban seputar syarat rongsokan, estimasi harga, penjemputan armada, dan sistem pembayaran kami.
          </p>
        </div>

        <div className="faq-items">
          {faqs.map((faq) => (
            <details key={faq.q}>
              <summary>
                {faq.q}
                <Icon name="plus" size={17} />
              </summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
