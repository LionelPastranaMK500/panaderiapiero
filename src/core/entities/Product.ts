export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "bread" | "pastry" | "coffee";
  image: string; // URL de la imagen
  ingredients: string[];
  isSpecialty: boolean;
}
