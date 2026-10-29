import { ProductsJson } from "@/utils"
import { ProductCard } from "@/components/module/card"


export const ProductModule = () => {
  return (
		<div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
		{ProductsJson.map((_ , key) => {
			return (
					<div key={key}>
						<ProductCard name={_.name} price={_.price} img={_.image} />
					</div>
			)
		})}
    </div>
  )
}
