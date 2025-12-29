import { useState, useRef } from "react";
import { motion, type Variants, AnimatePresence } from "framer-motion";
import ParallaxTilt from "react-parallax-tilt";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/swiper-bundle.css";

import { useThemeStore } from "../../store/themeStore";

// Iconos de Phosphor (Usamos 'Plant' en lugar de Grains/Gradient)
import {
  Star,
  Envelope,
  Tree,
  Clock,
  Fire,
  HandPalm,
  Leaf,
  FacebookLogo,
  WhatsappLogo,
  User,
  PencilSimple,
  X,
} from "phosphor-react";

// Componentes internos
import { ParticlesBackground } from "../../shared/ParticlesBackground";
import { GlassProductCard } from "../../shared/components/ui/GlassProductCard";
import { CarouselControl3D } from "../../shared/components/ui/CarouselControl3D";
import { HistorySection } from "../landing/components/HistorySection";
import { FEATURED_PRODUCTS } from "./components/products";

// --- COMPONENTE DEL FORMULARIO 3D (MODAL MEJORADO) ---
const ContactFormModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const { isDarkMode } = useThemeStore();

  return (
    <AnimatePresence>
      {isOpen && (
        // Corrección v4: z-100 nativo
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
          {/* A. Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-bakery-wood/60 dark:bg-black/80 backdrop-blur-sm cursor-pointer transition-colors duration-500"
          />

          {/* B. La Tarjeta 3D */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative w-full max-w-md z-10"
          >
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 md:-right-12 text-white/70 hover:text-bakery-gold transition-colors p-2 cursor-pointer"
            >
              <X size={28} weight="bold" />
            </button>

            <ParallaxTilt
              tiltMaxAngleX={4}
              tiltMaxAngleY={4}
              perspective={1000}
              scale={1.02}
              glareEnable={true}
              glareMaxOpacity={0.4}
              glareColor={isDarkMode ? "#C5A059" : "#ffffff"}
              glarePosition="all"
              className="w-full"
            >
              <form
                action="https://formspree.io/f/xgvkyyaj"
                method="POST"
                className="
                  relative overflow-hidden rounded-3xl shadow-2xl 
                  bg-bakery-flour/95 dark:bg-bakery-wood/95 
                  border border-bakery-gold/20 
                  p-8 md:p-10
                  text-bakery-wood dark:text-bakery-flour
                  transition-colors duration-500
                "
              >
                <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />

                <div className="relative z-10 text-center mb-10">
                  <div className="inline-flex items-center justify-center p-3 rounded-full bg-bakery-gold/10 text-bakery-gold mb-4">
                    <Envelope size={24} weight="duotone" />
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-bakery-gold mb-2">
                    Hablemos de Pan
                  </h3>
                  <p className="font-sans text-xs uppercase tracking-widest opacity-60">
                    Pedidos especiales & Consultas
                  </p>
                </div>

                <div className="space-y-6 relative z-10">
                  {/* --- INPUT: NOMBRE --- */}
                  <div className="relative group">
                    <User
                      size={20}
                      className="absolute top-3.5 left-0 text-bakery-gold/40 group-focus-within:text-bakery-gold transition-colors duration-300"
                    />
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder=" "
                      required
                      className="peer block w-full py-3 pl-8 bg-transparent border-0 border-b-2 border-bakery-wood/10 dark:border-bakery-flour/10 
                      text-sm font-sans focus:border-bakery-gold focus:ring-0 focus:outline-none 
                      transition-all duration-300 placeholder-transparent"
                    />
                    {/* Corrección v4: origin-left */}
                    <label
                      htmlFor="name"
                      className="absolute left-8 top-3 text-sm opacity-50 pointer-events-none transition-all duration-300
                      peer-focus:-translate-y-5 peer-focus:scale-75 peer-focus:text-bakery-gold peer-focus:opacity-100
                      peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100
                      origin-left"
                    >
                      Tu nombre
                    </label>
                  </div>

                  {/* --- INPUT: EMAIL --- */}
                  <div className="relative group">
                    <Envelope
                      size={20}
                      className="absolute top-3.5 left-0 text-bakery-gold/40 group-focus-within:text-bakery-gold transition-colors duration-300"
                    />
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder=" "
                      required
                      className="peer block w-full py-3 pl-8 bg-transparent border-0 border-b-2 border-bakery-wood/10 dark:border-bakery-flour/10 
                      text-sm font-sans focus:border-bakery-gold focus:ring-0 focus:outline-none 
                      transition-all duration-300 placeholder-transparent"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-8 top-3 text-sm opacity-50 pointer-events-none transition-all duration-300
                      peer-focus:-translate-y-5 peer-focus:scale-75 peer-focus:text-bakery-gold peer-focus:opacity-100
                      peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100
                      origin-left"
                    >
                      Tu correo electrónico
                    </label>
                  </div>

                  {/* --- INPUT: MENSAJE --- */}
                  <div className="relative group">
                    <PencilSimple
                      size={20}
                      className="absolute top-3.5 left-0 text-bakery-gold/40 group-focus-within:text-bakery-gold transition-colors duration-300"
                    />
                    <textarea
                      name="message"
                      id="message"
                      rows={3}
                      placeholder=" "
                      required
                      className="peer block w-full py-3 pl-8 bg-transparent border-0 border-b-2 border-bakery-wood/10 dark:border-bakery-flour/10 
                      text-sm font-sans focus:border-bakery-gold focus:ring-0 focus:outline-none 
                      transition-all duration-300 placeholder-transparent resize-none leading-relaxed"
                    ></textarea>
                    <label
                      htmlFor="message"
                      className="absolute left-8 top-3 text-sm opacity-50 pointer-events-none transition-all duration-300
                      peer-focus:-translate-y-5 peer-focus:scale-75 peer-focus:text-bakery-gold peer-focus:opacity-100
                      peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100
                      origin-left"
                    >
                      ¿Qué tienes en mente?
                    </label>
                  </div>

                  {/* Botón Submit */}
                  <button
                    type="submit"
                    className="
                      mt-6 w-full py-4 rounded-xl 
                      bg-bakery-gold text-bakery-wood 
                      font-sans font-bold text-sm tracking-widest uppercase
                      shadow-lg shadow-bakery-gold/20 
                      hover:shadow-bakery-gold/40 hover:bg-white hover:scale-[1.02]
                      active:scale-[0.98]
                      transition-all duration-300 cursor-pointer
                    "
                  >
                    Enviar Mensaje
                  </button>
                </div>
              </form>
            </ParallaxTilt>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// --- PÁGINA PRINCIPAL ---
const LandingPage = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const products = [...FEATURED_PRODUCTS, ...FEATURED_PRODUCTS];

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const top = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top, behavior: "auto" });
    }
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const features = [
    {
      icon: <Tree size={20} />, // Usamos Plant para "Trigo"
      title: "Trigo Puro",
      subtitle: "Selección especial",
    },
    {
      icon: <Clock size={20} />,
      title: "48 Horas",
      subtitle: "Fermentación lenta",
    },
    {
      icon: <HandPalm size={20} />,
      title: "A Mano",
      subtitle: "Sin maquinaria",
    },
    { icon: <Leaf size={20} />, title: "Orgánico", subtitle: "100% Natural" },
    {
      icon: <Fire size={20} />,
      title: "Horneado Diario",
      subtitle: "Fresco de verdad",
    },
  ];

  return (
    <main className="relative w-full overflow-x-hidden">
      <ContactFormModal
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />

      {/* --- FONDO GLOBAL --- */}
      <div className="fixed inset-0 z-0 h-full w-full pointer-events-none bg-bakery-flour dark:bg-bakery-wood transition-colors duration-500">
        <ParticlesBackground />
        {/* Corrección v4: w-200, h-200 */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-200 h-200 rounded-full bg-bakery-gold/5 blur-[120px]" />
      </div>

      {/* --- 1. HERO SECTION --- */}
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
            onClick={() => scrollToSection("catalog")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-16 cursor-pointer rounded-full border border-bakery-gold px-10 py-4 font-sans text-xs uppercase tracking-[0.3em] text-bakery-gold hover:bg-bakery-gold hover:text-bakery-wood transition-all"
          >
            Ver Vitrina
          </motion.button>
        </motion.div>
      </section>

      {/* --- 2. HISTORIA --- */}
      {/* Corrección v4: bg-linear-to-b */}
      <div className="relative z-10 bg-linear-to-b from-transparent via-bakery-wood/5 to-transparent dark:via-black/20">
        <HistorySection />
      </div>

      {/* --- 3. CATÁLOGO --- */}
      <section id="catalog" className="relative z-10 py-24 md:py-32">
        <div className="absolute inset-0 bg-bakery-wood/5 dark:bg-bakery-flour/5 -z-10 skew-y-3 transform origin-top-left scale-110" />

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
            // Corrección v4: Sintaxis de importancia al final
            className="pb-20! px-4! md:px-10! w-full"
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

      {/* --- 4. TESTIMONIOS --- */}
      <section className="relative z-10 py-24 border-t border-bakery-gold/10">
        <div className="container mx-auto px-6 text-center">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-bakery-gold opacity-60">
            La comunidad
          </span>
          <h2 className="mt-4 mb-16 font-serif text-3xl md:text-5xl text-bakery-gold">
            Voces del pueblo
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "No tiene local gigante, pero tiene el mejor sabor que he probado en años.",
              "Lo pido por WhatsApp y me llega calientito para el desayuno. Un lujo.",
              "Se nota que le pone cariño. Ese pan de campo es de otro planeta.",
            ].map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-bakery-gold/10 hover:border-bakery-gold/30 transition-colors cursor-default"
              >
                <div className="flex justify-center gap-1 mb-6 text-bakery-gold">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} weight="fill" size={14} />
                  ))}
                </div>
                <p className="font-serif italic text-lg opacity-80 leading-relaxed">
                  "{text}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. FILOSOFÍA & CARDS --- */}
      <section className="relative z-10 py-32 bg-bakery-gold/5 dark:bg-black/20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-bakery-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

        <div className="container mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-16 md:gap-24"
          >
            {/* IZQUIERDA: Texto */}
            <div className="w-full md:w-1/2 space-y-8 text-center md:text-left">
              <motion.div variants={fadeInUp}>
                <span className="font-sans text-xs uppercase tracking-[0.3em] text-bakery-gold opacity-80">
                  Taller Casero
                </span>
                <h2 className="mt-4 font-serif text-5xl md:text-7xl text-bakery-gold leading-[0.9]">
                  sin vitrinas <br />
                  <span className="opacity-50">solo pasión.</span>
                </h2>
              </motion.div>

              <motion.p
                variants={fadeInUp}
                className="font-sans text-lg opacity-70 max-w-md mx-auto md:mx-0 leading-relaxed"
              >
                Trabajamos bajo un esquema de producción consciente y limitada.
                No somos una fábrica; somos un taller donde cada hogaza respeta
                sus tiempos naturales, sin prisas ni atajos.
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="font-serif italic text-bakery-gold/80 text-lg"
              >
                Salidas de horno: 05:30 am — 07:00 am aprox.
              </motion.p>

              <motion.div variants={fadeInUp} className="pt-6">
                {/* BOTÓN CON EFECTO */}
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="group relative inline-flex items-center gap-3 bg-bakery-gold text-bakery-wood px-10 py-4 rounded-full font-bold text-sm overflow-hidden transition-all hover:pr-12 cursor-pointer shadow-lg hover:shadow-bakery-gold/20"
                >
                  <Envelope size={22} weight="bold" />
                  <span className="relative z-10">Contactar al Panadero</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
              </motion.div>
            </div>

            {/* DERECHA: Grid 5 Cards */}
            <motion.div
              variants={fadeInUp}
              className="w-full md:w-1/2 max-w-sm"
            >
              <div className="grid grid-cols-2 gap-4">
                {features.slice(0, 4).map((feat, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-center p-6 rounded-2xl bg-bakery-wood/5 dark:bg-white/5 border border-bakery-gold/10 hover:border-bakery-gold/30 transition-all text-center gap-2 aspect-square"
                  >
                    <div className="text-bakery-gold mb-1">{feat.icon}</div>
                    <h4 className="font-serif font-bold text-bakery-gold text-lg leading-none">
                      {feat.title}
                    </h4>
                    <p className="font-sans text-[10px] uppercase tracking-wider opacity-60">
                      {feat.subtitle}
                    </p>
                  </div>
                ))}

                <div className="col-span-2 flex flex-col items-center justify-center p-6 rounded-2xl bg-bakery-gold text-bakery-wood shadow-lg shadow-bakery-gold/10 transition-transform hover:scale-[1.02] gap-2">
                  <div className="text-bakery-wood mb-1">
                    {features[4].icon}
                  </div>
                  <h4 className="font-serif font-bold text-xl leading-none">
                    {features[4].title}
                  </h4>
                  <p className="font-sans text-[10px] uppercase tracking-wider opacity-80">
                    {features[4].subtitle}
                  </p>
                  <p className="font-sans text-[10px] opacity-60 mt-1">
                    Llega a tu puerta
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="relative z-10 py-12 border-t border-bakery-gold/10 bg-bakery-flour dark:bg-bakery-wood transition-colors duration-500">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-serif text-2xl font-bold tracking-tighter text-bakery-gold">
            ARTESANOS
          </div>
          <div className="flex gap-6">
            <a
              href="#"
              className="opacity-50 hover:opacity-100 hover:text-bakery-gold transition-all"
              aria-label="Facebook"
            >
              <FacebookLogo size={24} weight="fill" />
            </a>
            <a
              href="#"
              className="opacity-50 hover:opacity-100 hover:text-bakery-gold transition-all"
              aria-label="WhatsApp"
            >
              <WhatsappLogo size={24} weight="fill" />
            </a>
          </div>
          <p className="font-serif italic text-xs opacity-40 text-bakery-wood dark:text-bakery-flour">
            © 2025 Artesanos. De mi horno a tu mesa.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default LandingPage;
