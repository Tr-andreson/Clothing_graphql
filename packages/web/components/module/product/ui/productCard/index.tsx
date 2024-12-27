
import { useProduct } from "../../hooks/useProduct"


export const ProductCard = ({ id }: { id: string }) => {
  const { data, fetching } = useProduct({ id });

  if (fetching) return (
    <div>Fetching .........</div>
  )
  return (


    <div>
      <h4 className='text-sm font-bold'>
        {data?.getSingleProductById.sku}
      </h4>
      {data?.getSingleProductById.name}
      <img loading='eager' src={data?.getSingleProductById.imageUrl} />
    </div>
  )
}
