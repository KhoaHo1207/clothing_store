import { ShopContext } from '@/contexts/ShopContext';
import { useContext, useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import Title from './Title';
import type { Product } from '@/types';

export default function BestSeller() {
  const { products } = useContext(ShopContext) as { products: Product[] };
  console.log('All Products:', products);
  const [bestSeller, setBestSeller] = useState<Product[]>([]);

  useEffect(() => {
    const bestProduct = products.filter(item => item.bestseller === true);
    console.log('Best Seller Products:', bestProduct);
    setBestSeller(bestProduct.slice(0, 5));
  }, []);
  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1="BEST" text2="COLLECTIONS" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the.
        </p>
      </div>

      {/* Rendering Products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.map((item, index) => (
          <ProductItem
            key={index}
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}
