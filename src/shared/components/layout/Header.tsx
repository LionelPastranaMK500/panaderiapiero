import { motion } from "framer-motion";
import { Sun, Moon } from "phosphor-react";
import { useThemeStore } from "../../../store/themeStore";

export const Header = () => {
  const { isDarkMode, toggleTheme } = useThemeStore();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 z-50 flex w-full items-center justify-between px-8 py-6 backdrop-blur-md"
    >
      {/* Logo con fuente Serif de autoridad */}
      <div className="font-serif text-2xl font-bold tracking-tighter text-bakery-gold">
        ARTESANOS
      </div>

      {/* Switch de Tema Minimalista */}
      <button
        onClick={toggleTheme}
        className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-bakery-gold/20 bg-bakery-flour/10 transition-all hover:border-bakery-gold dark:bg-bakery-wood/10"
        aria-label="Cambiar atmósfera"
      >
        <motion.div
          initial={false}
          animate={{ rotate: isDarkMode ? 0 : 180, scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        >
          {isDarkMode ? (
            <Sun size={20} weight="light" className="text-bakery-gold" />
          ) : (
            <Moon size={20} weight="light" className="text-bakery-wood" />
          )}
        </motion.div>

        {/* Resplandor sutil al hacer hover */}
        <div className="absolute inset-0 rounded-full bg-bakery-gold/0 transition-colors group-hover:bg-bakery-gold/5" />
      </button>
    </motion.header>
  );
};
