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
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <Router>
      <SmoothScroll>
        <div className="relative min-h-screen bg-bakery-flour dark:bg-bakery-wood text-bakery-wood dark:text-bakery-flour transition-colors duration-500">
          {/* AQUÍ ESTÁ LA TEXTURA GLOBAL */}
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
