import { ProductModule } from "@/application/module/product";

interface ProductPageProps {
  params: { id: string };
}

const ProductPage = async ({ params }: ProductPageProps) => {
  return (
    <div className="p-4">
      <ProductModule />
    </div>
  );
};

export default ProductPage;
