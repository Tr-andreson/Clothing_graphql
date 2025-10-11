// import ProductById from "@/components/components/productList";
// import { Suspense } from "react";

const ProductPage = async ({ params }: { params: { id: string } }) => {
  console.log(params, "params debug");
  return (
    <div className="container">
      <h4>Product Page</h4>
    </div>

  )

}


export default ProductPage
