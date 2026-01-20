import { createContext } from 'react';
import { products } from '@/assets/frontend_assets/assets.js';
export const ShopContext = createContext();

const ShopContextProvider = ({ children }: { children: React.ReactNode }) => {
  const currency = '$';
  const delivery_fee = 10;

  const value = {
    products: products,
    currency: currency,
    delivery_fee: delivery_fee,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
