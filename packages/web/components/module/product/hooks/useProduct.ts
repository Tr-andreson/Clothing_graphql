import { useFetchProductByIdQuery } from "__generated__/graphql"

export const useProduct = ({ id }: { id: string }) => {

  const [product] = useFetchProductByIdQuery({
    variables: { getSingleProductByIdId: id }
  })

  const { data, fetching } = product

  return {
    data,
    fetching,
  }
}
