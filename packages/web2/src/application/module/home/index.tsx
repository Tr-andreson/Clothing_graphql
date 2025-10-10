import { ProductsQuery } from "@/gql/graphql"
import { fetchGraphQL } from "@/infrastructure/network/graphqlClient"

export const HomeModule = async () => {
  const query = `
query Products {
    Products {
        id
        sku
        name
        slug
        imageUrl
        imageKey
        description
        quantity
        price
        taxable
        isActive
    }
}
`;
  const product = await fetchGraphQL<ProductsQuery>(query)
  return (
    <div>
      <h4>Home Module</h4>
      {product.Products.map((_) => {
        return (
          <div>
            <h4>{_.name}</h4>
          </div>
        )
      })}
    </div>
  )

}
