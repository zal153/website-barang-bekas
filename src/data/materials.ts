import type { IconName, Material } from "../types";
import { localImg } from "../utils/assets";

export const materials: Material[] = [
  {
    id: "iron",
    name: "Besi tua",
    category: "Logam",
    price: 4500,
    unit: "kg",
    examples: "Potongan besi, rangka, pipa, dan perkakas rusak.",
    prep: "Pisahkan dari plastik, kayu, dan material nonlogam.",
    note: "Ketebalan, karat, dan campuran material memengaruhi harga.",
    image: localImg("IMG_0066.jpg"), // besi tua batangan
    icon: "metal",
    color: "stone",
  },
  {
    id: "plastic",
    name: "Botol plastik PET",
    category: "Plastik",
    price: 3000,
    unit: "kg",
    examples: "Botol air mineral dan kemasan minuman PET.",
    prep: "Kosongkan, keringkan, lalu pisahkan tutup dan label bila memungkinkan.",
    note: "Botol bening yang bersih biasanya dinilai berbeda dari botol berwarna.",
    image: localImg("IMG_0055.jpg"), // botol plastik PET
    icon: "bottle",
    color: "blue",
  },
  {
    id: "cardboard",
    name: "Kardus bekas",
    category: "Kertas",
    price: 1500,
    unit: "kg",
    examples: "Kardus paket, dus kemasan, dan lembaran karton bergelombang.",
    prep: "Lipat, ikat, dan simpan dalam keadaan kering.",
    note: "Kardus basah atau berminyak perlu dikonfirmasi terlebih dahulu.",
    image: localImg("IMG_0058.jpg"), // kardus tertumpuk
    icon: "box",
    color: "sand",
  },
  {
    id: "aluminum",
    name: "Aluminium",
    category: "Logam",
    price: 28000,
    unit: "kg",
    examples: "Kaleng aluminium, potongan kusen, dan peralatan aluminium rusak.",
    prep: "Pisahkan komponen besi, karet, dan plastik yang menempel.",
    note: "Aluminium kaleng, cor, dan profil memiliki penilaian berbeda.",
    image: localImg("IMG_0057.jpg"), // profil aluminium
    icon: "metal",
    color: "silver",
  },
  {
    id: "copper",
    name: "Tembaga",
    category: "Logam",
    price: 180000,
    unit: "kg",
    examples: "Potongan pipa tembaga dan kabel tembaga yang sudah terpisah.",
    prep: "Pisahkan dari material lain. Jangan membakar kabel untuk melepas isolasi.",
    note: "Harga bergantung pada kemurnian dan sisa isolasi kabel.",
    image: localImg("IMG_0048.jpg"), // kawat tembaga
    icon: "metal",
    color: "copper",
  },
  {
    id: "paper",
    name: "Kertas & koran",
    category: "Kertas",
    price: 1500,
    unit: "kg",
    examples: "Koran lama, kertas HVS, buku, dan arsip yang tidak terpakai.",
    prep: "Pastikan kering. Hancurkan dokumen pribadi sebelum diserahkan.",
    note: "Kertas berlapis plastik dan tisu tidak termasuk kategori ini.",
    image: localImg("IMG_0061.jpg"), // kertas/dokumen bekas
    icon: "box",
    color: "paper",
  },
  {
    id: "electronic",
    name: "Rongsok elektronik",
    category: "Elektronik",
    price: 0,
    unit: "unit",
    examples: "Perangkat elektronik rusak dan komponen elektronik bekas.",
    prep: "Hapus data pribadi. Jangan bongkar baterai, tabung CRT, atau komponen berbahaya.",
    note: "Wajib dicek pengepul terlebih dahulu. Tidak dihitung per kg dalam simulasi ini.",
    image: localImg("IMG_0064.jpg"), // PCB & komponen elektronik
    icon: "monitor",
    color: "sage",
  },
  {
    id: "tin-cap-badak",
    name: "Kaleng Cap Badak",
    category: "Logam",
    price: 20000,
    unit: "kg",
    examples: "Kaleng bekas Cap Badak dan kaleng logam sejenis.",
    prep: "Kosongkan dan pisahkan dari plastik atau material lain.",
    note: "Harga bergantung pada kebersihan dan jenis campuran logam.",
    image: localImg("IMG_0057.jpg"),
    icon: "metal",
    color: "silver",
  },
  {
    id: "battery",
    name: "Aki bekas",
    category: "Elektronik",
    price: 15000,
    unit: "kg",
    examples: "Aki kendaraan dan aki timbal-asam bekas.",
    prep: "Jangan dibongkar atau dibuang cairannya. Simpan tegak dan tanyakan cara penyerahan.",
    note: "Material berbahaya wajib dikonfirmasi terlebih dahulu sebelum diserahkan.",
    image: localImg("IMG_0064.jpg"),
    icon: "monitor",
    color: "sage",
  },
  {
    id: "brass",
    name: "Kuningan",
    category: "Logam",
    price: 100000,
    unit: "kg",
    examples: "Kran, fitting, dan potongan logam kuningan bekas.",
    prep: "Pisahkan dari besi, plastik, dan material lain yang menempel.",
    note: "Harga bergantung pada kemurnian dan campuran material.",
    image: localImg("IMG_0048.jpg"),
    icon: "metal",
    color: "copper",
  },
  {
    id: "cement",
    name: "Semen",
    category: "Lainnya",
    price: 2500,
    unit: "kg",
    examples: "Sisa semen dan semen yang masih dalam kemasan.",
    prep: "Simpan tetap kering dan pisahkan dari kemasan atau material lain.",
    note: "Konfirmasi penerimaan dan kondisi semen terlebih dahulu.",
    image: localImg("IMG_0058.jpg"),
    icon: "box",
    color: "sand",
  },
];

export const categories: { label: string; icon: IconName }[] = [
  { label: "Semua material", icon: "recycle" },
  { label: "Logam", icon: "metal" },
  { label: "Plastik", icon: "bottle" },
  { label: "Kertas", icon: "box" },
  { label: "Elektronik", icon: "monitor" },
  { label: "Lainnya", icon: "box" },
];

export const getMaterial = (id: string): Material => {
  const found = materials.find((m) => m.id === id);
  if (!found) {
    return materials[0];
  }
  return found;
};
