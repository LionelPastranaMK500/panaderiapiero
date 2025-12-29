import { motion } from "framer-motion";
import { CaretLeft, CaretRight } from "phosphor-react";

interface CarouselControl3DProps {
  direction: "left" | "right";
  onClick: () => void;
}

export const CarouselControl3D = ({
  direction,
  onClick,
}: CarouselControl3DProps) => {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="relative group"
    >
      <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        className="relative flex h-14 w-14 items-center justify-center rounded-full border border-bakery-gold/30 bg-white/5 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] shadow-[inset_0_0_20px_rgba(255,255,255,0.05)] ring-1 ring-white/10 transition-colors hover:border-bakery-gold"
      >
        {/* Reflejos de cristal 3D */}
        <div className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-40 pointer-events-none" />

        {direction === "left" ? (
          <CaretLeft size={24} weight="light" className="text-bakery-gold" />
        ) : (
          <CaretRight size={24} weight="light" className="text-bakery-gold" />
        )}
      </motion.button>
    </motion.div>
  );
};
