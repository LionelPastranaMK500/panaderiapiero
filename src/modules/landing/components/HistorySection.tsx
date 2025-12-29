import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const HistorySection = () => {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yImage = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  const yText = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={ref} className="relative z-10 overflow-hidden py-32 md:py-48">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          {/* 1. La Imagen con Parallax */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem]">
              <motion.div
                style={{ y: yImage }}
                className="absolute inset-[-10%] h-[120%] w-full"
              >
                <img
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1000"
                  alt="Manos amasando"
                  className="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
                />
              </motion.div>

              {/* Overlay elegante */}
              <div className="absolute inset-0 bg-bakery-wood/20 dark:bg-bakery-wood/40 mix-blend-multiply" />
            </div>

            {/* Elemento decorativo flotante */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1 }}
              className="absolute -bottom-10 -left-10 hidden md:block rounded-full bg-bakery-flour p-8 shadow-2xl dark:bg-bakery-wood border border-bakery-gold/20"
            >
              <div className="text-center font-serif">
                <span className="block text-4xl font-bold text-bakery-gold">
                  24h
                </span>
                <span className="text-xs uppercase tracking-widest opacity-60">
                  Fermentación
                </span>
              </div>
            </motion.div>
          </div>

          {/* 2. El Texto con Storytelling */}
          <motion.div
            style={{ y: yText }}
            className="w-full md:w-1/2 text-left"
          >
            <span className="font-sans text-xs uppercase tracking-[0.4em] text-bakery-gold opacity-80">
              Nuestra Filosofía
            </span>
            <h2 className="mt-6 font-serif text-5xl md:text-7xl text-bakery-gold leading-tight">
              el tiempo es
              <br />
              nuestro ingrediente.
            </h2>
            <div className="mt-8 space-y-6 font-sans text-lg opacity-70 leading-relaxed max-w-md">
              <p>
                No usamos atajos. En un mundo de inmediatez, nosotros elegimos
                la espera. Cada hogaza comienza su vida 48 horas antes de llegar
                a tus manos.
              </p>
              <p>
                Solo tres ingredientes: Harina orgánica, agua purificada y
                nuestra masa madre de cultivo propio, alimentada diariamente
                desde 2015.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-4">
              <div className="h-[1px] w-20 bg-bakery-gold" />
              <span className="font-serif italic text-bakery-gold">
                Desde el origen
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
