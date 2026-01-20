declare module '@/assets/frontend_assets/assets.js' {
  export interface Product {
    _id: string;
    name: string;
    description: string;
    price: number;
    image: string[];
    category: string;
    subCategory: string;
    sizes: string[];
    date: number;
    bestseller: boolean;
  }

  export const assets: Record<string, string>;
  export const products: Product[];
}

declare module '@/assets/frontend_assets/assets' {
  export * from '@/assets/frontend_assets/assets.js';
}
