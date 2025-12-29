import { motion } from "framer-motion";
import type { Product } from "../../../core/entities/Product";

export const GlassProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="group relative w-full h-full p-2">
      {" "}
      {/* Padding para que la sombra no se corte */}
      <motion.div
        whileHover={{ y: -10 }}
        transition={{ duration: 0.4 }}
        className="relative flex flex-col overflow-hidden rounded-[2rem] border border-bakery-gold/10 bg-bakery-flour/50 backdrop-blur-md shadow-sm transition-all duration-500 hover:border-bakery-gold/40 hover:shadow-lg dark:bg-bakery-wood/40"
      >
        {/* IMAGEN: Aspect Ratio 4/5 para verticalidad elegante */}
        <div className="relative aspect-[4/5] w-full overflow-hidden p-2">
          <img
            src={product.image}
            alt={product.name}
            draggable="false"
            className="h-full w-full object-cover rounded-[1.5rem] select-none shadow-inner"
          />

          {product.isSpecialty && (
            <span className="absolute top-4 right-4 rounded-full bg-bakery-gold/90 px-3 py-1 font-sans text-[10px] font-bold uppercase tracking-widest text-bakery-wood backdrop-blur-md shadow-lg">
              Estrella
            </span>
          )}
        </div>

        {/* CONTENIDO */}
        <div className="flex flex-col px-5 pb-6 pt-2 text-left">
          <h3 className="font-serif text-xl md:text-2xl text-bakery-gold lowercase truncate">
            {product.name}
          </h3>

          <p className="mt-2 text-xs md:text-sm leading-relaxed opacity-60 line-clamp-2 min-h-[2.5em]">
            {product.description}
          </p>

          <div className="mt-4 flex items-center justify-between border-t border-bakery-gold/10 pt-4">
            <span className="font-serif text-lg md:text-xl text-bakery-gold">
              ${product.price.toFixed(2)}
            </span>
            <button className="flex h-8 w-8 items-center justify-center rounded-full border border-bakery-gold/30 text-bakery-gold transition-colors hover:bg-bakery-gold hover:text-bakery-wood">
              +
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
