import { ProductCard } from 'components/module/product/ui/productCard';

const ProductPage = ({ params }: { params: { product: string } }) => {


  return (
    <>
      <ProductCard id={params.product} />
    </>
  )
}

export default ProductPage
