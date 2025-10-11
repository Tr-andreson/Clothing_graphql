import { Suspense } from "react";

export interface ProductT {
  data: Data;
}

export interface Data {
  Products: Product[];
}

export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  imageKey: string;
  description: string;
  quantity: number;
  price: number;
}
export const HomePage = async () => {
  return (
    <div className="container">
      <h4>Products</h4>
      <Suspense fallback={<div>Loading ....</div>}>
        {/* <ProductPage /> */}
      </Suspense>

    </div >
  )

}
