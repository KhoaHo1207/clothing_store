import { ShopContext } from '@/contexts/ShopContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  id: string;
  image: string[];
  name: string;
  price: number;
}
export default function ProductItem({ id, image, name, price }: Props) {
  const { currency } = useContext(ShopContext);
  return (
    <Link to={`/product/${id}`} className="text-gray-700 cursor-pointer">
      <div className="overflow-hidden">
        <img src={image[0]} alt={name} className="hover:scale-110 transition ease-in-out" />
      </div>

      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">
        {currency} {price}
      </p>
    </Link>
  );
}
