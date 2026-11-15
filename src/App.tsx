import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { MaterialPage } from "./pages/MaterialPage";
import { CaraJualPage } from "./pages/CaraJualPage";
import { EstimasiPage } from "./pages/EstimasiPage";
import { KontakFaqPage } from "./pages/KontakFaqPage";
import { NotFoundPage } from "./pages/NotFoundPage";

// Handle backward compatibility for old anchor links (#material, #cara-kerja, #estimasi, #kontak)
function HashRedirectHandler() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash === "#material") {
      navigate("/material", { replace: true });
    } else if (hash === "#cara-kerja" || hash === "#cara-jual") {
      navigate("/cara-jual", { replace: true });
    } else if (hash === "#estimasi") {
      navigate("/estimasi", { replace: true });
    } else if (hash === "#kontak" || hash === "#faq") {
      navigate("/kontak", { replace: true });
    }
  }, [location.hash, navigate]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <HashRedirectHandler />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="material" element={<MaterialPage />} />
            <Route path="cara-jual" element={<CaraJualPage />} />
            <Route path="estimasi" element={<EstimasiPage />} />
            <Route path="kontak" element={<KontakFaqPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}
