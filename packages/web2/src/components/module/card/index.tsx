import Image from "next/image";

interface ProductCardProps {
  name: string;
  price: number;
  img: string;
}

export const ProductCard = ({ name, price, img }: ProductCardProps) => {
  return (
    <div className="space-y-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-4">
      <Image
        width={300}
        height={300}
        alt={name}
        src={img}
        className="rounded-lg object-cover"
      />
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold capitalize">{name}</h3>
        <p className="text-gray-700">${price}</p>
      </div>
    </div>
  );
};
