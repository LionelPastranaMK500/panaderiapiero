import { motion } from "framer-motion";

export const Loader = () => {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bakery-flour dark:bg-bakery-wood">
      {/* Contenedor del Logo o Icono animado */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="relative flex items-center justify-center"
      >
        {/* Un círculo elegante que simula el levado de la masa o un plato */}
        <div className="h-24 w-24 rounded-full border-t-2 border-bakery-gold animate-spin" />

        {/* Texto central con la fuente Serif de autoridad */}
        <span className="absolute font-serif text-sm font-bold tracking-widest text-bakery-gold uppercase">
          Bakery
        </span>
      </motion.div>

      {/* Barra de progreso sutil */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "120px" }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="mt-8 h-[1px] bg-bakery-gold/30 overflow-hidden"
      >
        <div className="h-full bg-bakery-gold w-full" />
      </motion.div>
    </div>
  );
};
