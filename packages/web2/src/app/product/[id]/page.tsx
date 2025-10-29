import { ProductModule } from "@/application/module/product";
import Link from "next/link";

interface ProductPageProps {
  params: { id: string };
}

const ProductPage = async ({ params }: ProductPageProps) => {

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/">
        <h4>Back</h4>
      </Link>
      <ProductModule />
    </div>
  );
};

export default ProductPage;
