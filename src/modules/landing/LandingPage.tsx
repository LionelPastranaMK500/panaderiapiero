import { motion } from "framer-motion";
import { ParticlesBackground } from "../../shared/ParticlesBackground";
import { GlassProductCard } from "../../shared/components/ui/GlassProductCard";
import { FEATURED_PRODUCTS } from "./components/products";
import { CarouselControl3D } from "../../shared/components/ui/CarouselControl3D";
import { HistorySection } from "../landing/components/HistorySection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { useRef } from "react";
import "swiper/swiper-bundle.css";

const LandingPage = () => {
  const swiperRef = useRef<SwiperType>(null);
  const products = [
    ...FEATURED_PRODUCTS,
    ...FEATURED_PRODUCTS,
    ...FEATURED_PRODUCTS,
  ];

  const scrollToCatalog = () => {
    const section = document.getElementById("catalog");
    if (section) {
      const top = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top, behavior: "auto" });
    }
  };

  return (
    <main className="relative w-full overflow-x-hidden">
      <div className="fixed inset-0 z-0 h-full w-full pointer-events-none bg-bakery-flour dark:bg-bakery-wood transition-colors duration-500">
        <ParticlesBackground />
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-bakery-gold/5 blur-[120px]" />
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="font-sans text-[10px] md:text-xs uppercase tracking-[0.5em] text-bakery-gold opacity-60">
            Artesanal & Puro
          </span>
          <h1 className="mt-4 font-serif text-6xl md:text-9xl text-bakery-gold lowercase tracking-tighter leading-none">
            masa madre.
          </h1>
          <motion.button
            onClick={scrollToCatalog}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-16 rounded-full border border-bakery-gold px-10 py-4 font-sans text-xs uppercase tracking-[0.3em] text-bakery-gold hover:bg-bakery-gold hover:text-bakery-wood transition-all"
          >
            Ver Vitrina
          </motion.button>
        </motion.div>
      </section>

      {/* 2. NUEVA SECCIÓN DE HISTORIA (PARALLAX) */}
      {/* La insertamos aquí para crear contexto antes de vender */}
      <div className="relative z-10 bg-gradient-to-b from-transparent via-bakery-wood/5 to-transparent dark:via-black/20">
        <HistorySection />
      </div>

      {/* 3. SECCIÓN CATÁLOGO */}
      <section id="catalog" className="relative z-10 py-24 md:py-32">
        {/* Fondo decorativo exclusivo del catálogo (Spotlight invertido) */}
        <div className="absolute inset-0 bg-bakery-wood/5 dark:bg-bakery-flour/5 -z-10 skew-y-3 transform origin-top-left scale-110" />{" "}
        {/* Fondo sutil para separar */}
        <div className="container mx-auto px-6 mb-12 flex items-end justify-between">
          <div className="max-w-lg">
            <h2 className="font-serif text-4xl md:text-6xl text-bakery-gold lowercase">
              la vitrina—
            </h2>
            <p className="font-sans text-sm opacity-60 mt-2 tracking-wide text-bakery-wood dark:text-bakery-flour">
              Piezas limitadas horneadas esta mañana.
            </p>
          </div>

          <div className="hidden md:flex gap-6">
            <CarouselControl3D
              direction="left"
              onClick={() => swiperRef.current?.slidePrev()}
            />
            <CarouselControl3D
              direction="right"
              onClick={() => swiperRef.current?.slideNext()}
            />
          </div>
        </div>
        <div className="pl-6 md:pl-0">
          <Swiper
            modules={[Navigation, A11y]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={24}
            slidesPerView={1.15}
            grabCursor={true}
            speed={800}
            breakpoints={{
              640: { slidesPerView: 2.2, spaceBetween: 32 },
              1024: { slidesPerView: 3.2, spaceBetween: 40 },
              1280: { slidesPerView: 4, spaceBetween: 48 },
            }}
            className="!pb-20 !px-4 md:!px-10 w-full"
          >
            {products.map((product, idx) => (
              <SwiperSlide key={`${product.id}-${idx}`} className="h-auto">
                <GlassProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex md:hidden justify-center gap-8 mt-6">
          <CarouselControl3D
            direction="left"
            onClick={() => swiperRef.current?.slidePrev()}
          />
          <CarouselControl3D
            direction="right"
            onClick={() => swiperRef.current?.slideNext()}
          />
        </div>
      </section>

      {/* Footer Simple */}
      <footer className="relative z-10 py-12 text-center border-t border-bakery-gold/10">
        <p className="font-serif italic text-xs opacity-40">
          © 2025 Artesanos del Pan. Lima, Perú.
        </p>
      </footer>
    </main>
  );
};

export default LandingPage;
