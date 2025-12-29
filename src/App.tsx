/* src/App.tsx */
import { BrowserRouter as Router } from "react-router-dom";
import { useEffect } from "react";
import { useThemeStore } from "./store/themeStore";
import { SmoothScroll } from "./shared/components/layout/SmoothScroll";
import { AppRoutes } from "./routes/AppRoutes";
import { Header } from "./shared/components/layout/Header";
import { Toaster } from "sonner";

function App() {
  const { isDarkMode } = useThemeStore();

  useEffect(() => {
    // Esto activa el modo oscuro en Tailwind
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <Router>
      <SmoothScroll>
        {/* LÓGICA DE INVERSIÓN:
           - DÍA (Sin dark): Fondo Harina (#F9F7F2) | Texto Madera (#2D241E)
           - NOCHE (Con dark): Fondo Madera (#2D241E) | Texto Harina (#F9F7F2)
        */}
        <div className="relative min-h-screen transition-colors duration-500 bg-bakery-flour text-bakery-wood dark:bg-bakery-wood dark:text-bakery-flour">
          <div className="bg-noise" />

          <Header />
          <AppRoutes />
          <Toaster position="bottom-right" richColors />
        </div>
      </SmoothScroll>
    </Router>
  );
}

export default App;
