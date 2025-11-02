"use client"
import Image from "next/image";
import { useRouter } from "next/navigation"

interface ProductCardProps {
  name: string;
  price: number;
  img: string;
}

export const ProductCard = ({ name, price, img }: ProductCardProps) => {
  const router = useRouter()

  const handleClick = () => {
    router.push("/product/test")
  }

  return (
    <div
      onClick={handleClick}
      className="space-y-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-4 cursor-pointer">
      <div className="relative w-full h-52 md:h-64 lg:h-96">
        <Image
          fill
          alt={name}
          src={img}
          className="rounded-lg object-contain"
        />
      </div>

      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold capitalize">{name}</h3>
        <p className="text-gray-700">${price}</p>
      </div>
    </div>
  );
};
