import { Link } from "react-router-dom";
import { Icon } from "../components/Icon";
import { useApp } from "../context/AppContext";
import { materials, getMaterial } from "../data/materials";
import { money } from "../utils/format";

export function EstimasiPage() {
  const {
    estimateRows,
    updateEstimateRow,
    addEstimateRow,
    removeEstimateRow,
    validWeight,
    isEstimateValid,
    totalEstimate,
    totalWeight,
    openContact,
  } = useApp();

  return (
    <div
      style={{
        background: "#f2f4e9",
        borderBottom: "1px solid #e6eadb",
        minHeight: "calc(100vh - 160px)",
        paddingBlock: "45px 65px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="shell estimate-layout" style={{ width: "100%" }}>
        <div className="estimate-copy">
          <div className="eyebrow">TAHU NILAINYA, SEBELUM MENJUAL</div>
          <h2>
            Rongsokan segini,
            <br />
            <span>kira-kira jadi berapa?</span>
          </h2>
          <p>
            Pilih material dan masukkan perkiraan beratnya. Kalkulator ini membantu memberi
            gambaran perkiraan nilai jual rongsokanmu secara transparan.
          </p>
          <div className="estimate-tips">
            <span>
              <Icon name="check" size={16} />
              Bisa hitung beberapa jenis material sekaligus
            </span>
            <span>
              <Icon name="check" size={16} />
              Pisahkan material agar penilaian timbangan tepat
            </span>
            <span>
              <Icon name="check" size={16} />
              Harga akhir disepakati saat penimbangan resmi oleh Slemania Rongsok
            </span>
          </div>
          <div className="estimate-warning">
            <Icon name="info" size={19} />
            <p>
              Elektronik, baterai/aki, dan limbah khusus perlu konfirmasi langsung. Jangan dibongkar
              atau dibakar sendiri demi keselamatan.
            </p>
          </div>
          <div style={{ marginTop: "24px" }}>
            <Link to="/material" className="text-link">
              Lihat daftar semua harga material ↗
            </Link>
          </div>
        </div>

        <div className="calculator">
          <div className="calculator-heading">
            <span className="calculator-symbol">
              <Icon name="scale" size={22} />
            </span>
            <div>
              <h3>Hitung estimasi rongsokan</h3>
              <p>Harga contoh · bukan penawaran resmi</p>
            </div>
            <span className="simulation-tag">SIMULASI</span>
          </div>

          <div className="calculator-labels">
            <span>Jenis material</span>
            <span>Perkiraan berat</span>
          </div>

          <div className="calculator-rows">
            {estimateRows.map((row, index) => (
              <div className="calculator-row-wrap" key={row.id}>
                <div className="calculator-row">
                  <select
                    aria-label={`Material ${index + 1}`}
                    value={row.material}
                    onChange={(e) => updateEstimateRow(row.id, "material", e.target.value)}
                  >
                    {materials
                      .filter((m) => m.price > 0)
                      .map((m) => (
                        <option value={m.id} key={m.id}>
                          {m.name} ({money(m.price)}/{m.unit})
                        </option>
                      ))}
                  </select>
                  <label
                    className={`weight-input ${!validWeight(row.weight) ? "invalid" : ""}`}
                  >
                    <input
                      type="number"
                      min="0.01"
                      max="100000"
                      step="any"
                      value={row.weight}
                      aria-label={`Berat material ${index + 1}`}
                      aria-invalid={!validWeight(row.weight)}
                      placeholder="0"
                      onChange={(e) => updateEstimateRow(row.id, "weight", e.target.value)}
                    />
                    <span>kg</span>
                  </label>
                  {estimateRows.length > 1 && (
                    <button
                      className="remove-row"
                      aria-label={`Hapus baris material ${index + 1}`}
                      onClick={() => removeEstimateRow(row.id)}
                    >
                      <Icon name="close" size={16} />
                    </button>
                  )}
                </div>
                <div className="row-rate">
                  {money(getMaterial(row.material).price)} / kg
                  {!validWeight(row.weight) && (
                    <span>Masukkan berat lebih dari 0, maksimal 100.000 kg.</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <button
            className="add-material"
            onClick={() => addEstimateRow()}
          >
            <Icon name="plus" size={15} />
            Tambah material lain
          </button>

          <div className="estimate-result" aria-live="polite">
            <div>
              <span>Perkiraan nilai jual</span>
              <strong>{isEstimateValid ? money(totalEstimate) : "Lengkapi berat"}</strong>
              <p>
                {isEstimateValid
                  ? `${totalWeight.toLocaleString("id-ID")} kg dari ${estimateRows.length} jenis pilihan material`
                  : "Isi berat yang valid untuk semua material."}
              </p>
            </div>
            <Icon name="recycle" size={41} />
          </div>

          <p className="result-note">
            Hanya perkiraan dengan harga contoh. Berat bersih, jenis, kondisi material, dan
            harga pasar menentukan nilai akhir.
          </p>

          <button
            className="button button-dark calculator-cta"
            disabled={!isEstimateValid}
            onClick={() => openContact("WhatsApp", null, true)}
          >
            <Icon name="whatsapp" size={18} />
            Tanyakan estimasi ke Slemania Rongsok
            <Icon name="arrow" size={17} />
          </button>
        </div>
      </div>
    </div>
  );
}
