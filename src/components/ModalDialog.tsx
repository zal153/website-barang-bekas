import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";
import { Icon } from "./Icon";
import { money } from "../utils/format";

export function ModalDialog() {
  const {
    selectedMaterial,
    contactChannel,
    closeModal,
    contactUrl,
    contactMessage,
    copyState,
    copyMessage,
    openContact,
    addEstimateRow,
    isEstimateValid,
    includeEstimate,
  } = useApp();

  const dialogRef = useRef<HTMLDialogElement>(null);
  const navigate = useNavigate();
  const modalOpen = Boolean(selectedMaterial || contactChannel);

  useEffect(() => {
    if (modalOpen) dialogRef.current?.showModal();
    else dialogRef.current?.close();
  }, [modalOpen]);

  const canSendMessage = includeEstimate ? isEstimateValid : true;

  return (
    <dialog
      ref={dialogRef}
      className={`modal ${selectedMaterial ? "material-modal" : ""}`}
      aria-label={
        selectedMaterial
          ? `Detail ${selectedMaterial.name}`
          : `Hubungi melalui ${contactChannel}`
      }
      onCancel={closeModal}
      onClose={closeModal}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
    >
      <button
        className="modal-close icon-button"
        aria-label="Tutup dialog"
        onClick={closeModal}
      >
        <Icon name="close" />
      </button>

      {selectedMaterial ? (
        <>
          <div className={`detail-visual ${selectedMaterial.color}`}>
            {selectedMaterial.image ? (
              <img src={selectedMaterial.image} alt={selectedMaterial.name} />
            ) : (
              <Icon name={selectedMaterial.icon} size={80} />
            )}
          </div>
          <div className="modal-content">
            <div className="eyebrow">{selectedMaterial.category} · MATERIAL RONGSOK</div>
            <h2>{selectedMaterial.name}</h2>
            <p>{selectedMaterial.examples}</p>
            <div className="detail-price">
              <span>CONTOH HARGA SIMULASI</span>
              <strong>
                {selectedMaterial.price ? (
                  <>
                    {money(selectedMaterial.price)}
                    <small> / kg</small>
                  </>
                ) : (
                  "Tanyakan ke pengepul"
                )}
              </strong>
            </div>
            <div className="detail-tip">
              <Icon name="check" size={19} />
              <div>
                <strong>Sebelum diserahkan</strong>
                <p>{selectedMaterial.prep}</p>
              </div>
            </div>
            <div className="detail-tip">
              <Icon name="info" size={19} />
              <div>
                <strong>Perlu diperhatikan</strong>
                <p>{selectedMaterial.note}</p>
              </div>
            </div>
            <p className="detail-disclaimer">
              Penerimaan material dan harga beli sebenarnya belum dikonfirmasi. Foto hanya
              ilustrasi material.
            </p>
            <button
              className="button button-dark full-width"
              onClick={() => {
                if (selectedMaterial.price) {
                  addEstimateRow(selectedMaterial.id);
                  closeModal();
                  navigate("/estimasi");
                } else {
                  openContact("WhatsApp", selectedMaterial);
                }
              }}
            >
              {selectedMaterial.price
                ? "Hitung estimasi material ini"
                : "Tanyakan material ini"}
              <Icon name="arrow" size={17} />
            </button>
          </div>
        </>
      ) : (
        contactChannel && (
          <div className="modal-content contact-modal-content">
            <span className="modal-symbol">
              <Icon
                name={
                  contactChannel === "WhatsApp"
                    ? "whatsapp"
                    : contactChannel === "Instagram"
                      ? "instagram"
                      : contactChannel === "Facebook"
                        ? "facebook"
                        : contactChannel === "YouTube"
                          ? "youtube"
                          : "tiktok"
                }
                size={28}
              />
            </span>
            <div className="eyebrow">HUBUNGI PENGEPUL</div>
            <h2>Lanjut lewat {contactChannel}.</h2>
            {contactUrl(contactChannel) ? (
              <>
                <p>
                  Kirim foto material dan lokasi agar Slemania Rongsok bisa membantu menilai
                  rongsokanmu.
                </p>
                {contactChannel === "WhatsApp" && !canSendMessage ? (
                  <p className="unconfigured-note">
                    Lengkapi berat yang valid pada kalkulator terlebih dahulu agar pesan estimasi
                    tidak keliru.
                  </p>
                ) : (
                  <a
                    className="button button-dark full-width"
                    href={contactUrl(contactChannel)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buka {contactChannel}
                    <Icon name="arrow" size={17} />
                  </a>
                )}
              </>
            ) : (
              <>
                <div className="unconfigured-note">
                  <Icon name="info" size={19} />
                  <p>
                    <strong>Kontak resmi belum tersedia.</strong>
                    {contactChannel === "WhatsApp"
                      ? " Nomor WhatsApp Slemania Rongsok belum dicantumkan."
                      : ` Tautan akun ${contactChannel} Slemania Rongsok belum dicantumkan.`}{" "}
                    Tautan Slemania Rongsok akan aktif setelah kontak resmi dicantumkan.
                  </p>
                </div>
                <p>
                  Kamu tetap bisa menyiapkan pesan berikut untuk dikirim setelah kontak tersedia.
                </p>
              </>
            )}
            {canSendMessage ? (
              <>
                <label className="message-label" htmlFor="contact-message">
                  Pesan yang bisa kamu kirim
                </label>
                <textarea
                  id="contact-message"
                  className="contact-message"
                  value={contactMessage}
                  readOnly
                  rows={8}
                />
                <button className="button button-outline full-width" onClick={copyMessage}>
                  <Icon name="copy" size={17} />
                  Salin pesan estimasi
                </button>
                <p className="copy-status" role="status">
                  {copyState}
                </p>
              </>
            ) : (
              <button
                className="button button-outline full-width"
                onClick={() => {
                  closeModal();
                  navigate("/estimasi");
                }}
              >
                Lengkapi estimasi berat
                <Icon name="arrow" size={17} />
              </button>
            )}
            <p className="privacy-note">
              Tidak ada data atau permintaan penjemputan yang dikirim melalui website ini.
            </p>
          </div>
        )
      )}
    </dialog>
  );
}
