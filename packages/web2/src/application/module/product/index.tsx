"use client"

import Image from "next/image";
import { useCart } from "@/store";
import { Button } from "@/components/ui/button";

export const ProductModule = () => {

  const handleAddToCart = useCart((state: any) => state.increasePopulation)
  return (

    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          width={400}
          height={600}
          alt="Product Image"
          src="/img/1.png"
          className="rounded-lg object-contain"
        />
      </div>

      <div className="w-full md:w-1/2 space-y-4">
        <h4 className="text-3xl font-semibold mb-4">Heading</h4>
        <p className="text-gray-600">
          Product description or details will go here.
        </p>
        <Button onClick={handleAddToCart}>Add to Cart</Button>
      </div>
    </div>

  )

}
