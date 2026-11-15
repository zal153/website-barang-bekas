import { createContext, useContext, useState, useRef, useEffect, ReactNode } from "react";
import { business } from "../business";
import { materials, getMaterial } from "../data/materials";
import type { Channel, EstimateRow, Material } from "../types";
import { money } from "../utils/format";

type AppContextType = {
  selectedMaterial: Material | null;
  setSelectedMaterial: (m: Material | null) => void;
  contactChannel: Channel | null;
  contactMaterial: Material | null;
  includeEstimate: boolean;
  openContact: (channel: Channel, material?: Material | null, withEstimate?: boolean) => void;
  closeModal: () => void;
  estimateRows: EstimateRow[];
  updateEstimateRow: (id: number, key: "material" | "weight", value: string) => void;
  addEstimateRow: (materialId?: string) => void;
  removeEstimateRow: (id: number) => void;
  validWeight: (weight: string) => boolean;
  isEstimateValid: boolean;
  totalEstimate: number;
  totalWeight: number;
  contactMessage: string;
  copyState: string;
  copyMessage: () => Promise<void>;
  contactUrl: (name: Channel) => string;
};

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [selectedMaterial, setSelectedMaterial] = useState<Material | null>(null);
  const [contactChannel, setContactChannel] = useState<Channel | null>(null);
  const [contactMaterial, setContactMaterial] = useState<Material | null>(null);
  const [includeEstimate, setIncludeEstimate] = useState(false);
  const [copyState, setCopyState] = useState("");
  const [estimateRows, setEstimateRows] = useState<EstimateRow[]>([
    { id: 1, material: "iron", weight: "10" },
  ]);
  const nextId = useRef(2);

  const closeModal = () => {
    setSelectedMaterial(null);
    setContactChannel(null);
    setContactMaterial(null);
    setCopyState("");
    setIncludeEstimate(false);
  };

  const validWeight = (weight: string) =>
    Number.isFinite(Number(weight)) && Number(weight) > 0 && Number(weight) <= 100000;

  const isEstimateValid = estimateRows.every((row) => validWeight(row.weight));

  const totalEstimate = estimateRows.reduce(
    (sum, row) =>
      sum + (validWeight(row.weight) ? Number(row.weight) * getMaterial(row.material).price : 0),
    0,
  );

  const totalWeight = estimateRows.reduce(
    (sum, row) => sum + (validWeight(row.weight) ? Number(row.weight) : 0),
    0,
  );

  const contactMessage = contactMaterial
    ? `Halo Admin, saya ingin menanyakan penerimaan ${contactMaterial.name.toLowerCase()}. Apakah material ini bisa dijual? Mohon informasi penilaian harga dan cara penyerahannya. Saya akan mengirim foto kondisi serta lokasi melalui chat.`
    : includeEstimate
      ? `Halo Admin, saya ingin menjual rongsokan.\n\n${estimateRows
          .map((row) => `• ${getMaterial(row.material).name}: ${row.weight} kg`)
          .join("\n")}\n\nEstimasi simulasi website: ${money(
          totalEstimate,
        )} (bukan harga penawaran final).\nMohon konfirmasi material yang diterima, harga terkini, dan pilihan penyerahan/penjemputan. Saya akan mengirim foto serta lokasi melalui chat.`
      : "Halo Admin, saya ingin menanyakan apakah rongsokan saya bisa dijual. Mohon informasi material yang diterima, harga, dan cara penyerahannya. Saya siap mengirim foto, perkiraan berat, dan lokasi.";

  const contactUrl = (name: Channel) => {
    if (name === "WhatsApp") {
      return business.whatsapp
        ? `https://wa.me/${business.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
            contactMessage,
          )}`
        : "";
    }
    if (name === "Instagram") return business.instagramUrl;
    if (name === "Facebook") return business.facebookUrl;
    if (name === "YouTube") return business.youtubeUrl;
    return business.tiktokUrl;
  };

  const openContact = (name: Channel, material: Material | null = null, withEstimate = false) => {
    setSelectedMaterial(null);
    setContactMaterial(material);
    setIncludeEstimate(withEstimate);
    setCopyState("");
    setContactChannel(name);
  };

  const copyMessage = async () => {
    try {
      await navigator.clipboard.writeText(contactMessage);
      setCopyState("Pesan berhasil disalin.");
    } catch {
      setCopyState("Tidak bisa menyalin otomatis. Pilih dan salin teks pesan di atas.");
    }
  };

  const updateEstimateRow = (id: number, key: "material" | "weight", value: string) => {
    setEstimateRows((prev) =>
      prev.map((row) => (row.id === id ? { ...row, [key]: value } : row)),
    );
  };

  const addEstimateRow = (materialId?: string) => {
    setEstimateRows((prev) => [
      ...prev,
      { id: nextId.current++, material: materialId || "cardboard", weight: "" },
    ]);
  };

  const removeEstimateRow = (id: number) => {
    setEstimateRows((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <AppContext.Provider
      value={{
        selectedMaterial,
        setSelectedMaterial,
        contactChannel,
        contactMaterial,
        includeEstimate,
        openContact,
        closeModal,
        estimateRows,
        updateEstimateRow,
        addEstimateRow,
        removeEstimateRow,
        validWeight,
        isEstimateValid,
        totalEstimate,
        totalWeight,
        contactMessage,
        copyState,
        copyMessage,
        contactUrl,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
