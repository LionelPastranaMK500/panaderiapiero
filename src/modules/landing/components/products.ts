import type { Product } from "../../../core/entities/Product";

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Masa Madre Rústica",
    description:
      "Corteza crujiente y miga alveolada con 24h de fermentación lenta.",
    price: 8.5,
    category: "bread",
    image:
      "https://images.unsplash.com/photo-1585478259715-876a6a81fc08?q=80&w=500",
    ingredients: ["Harina Orgánica", "Agua", "Sal de Mar"],
    isSpecialty: true,
  },
  {
    id: "2",
    name: "Croissant de Mantequilla",
    description:
      "Laminado artesanal con mantequilla de Normandía y técnica francesa.",
    price: 3.25,
    category: "pastry",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=500",
    ingredients: ["Harina de Fuerza", "Mantequilla", "Levadura"],
    isSpecialty: false,
  },
];
