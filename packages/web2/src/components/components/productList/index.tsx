// app/products/[id]/page.tsx
import { ProductByIdDocument, ProductByIdQuery, ProductByIdQueryVariables } from "@/gql/graphql";
import { getClient } from "@/providers/apollo-provider/apolloServer";

interface Props {
  params: Promise<{ id: string }>
}

export default async function ProductById({ params }: Props) {
  const { id } = await params
  const client = getClient();

  const variables: ProductByIdQueryVariables = { id };

  const { data } = await client.query<ProductByIdQuery, ProductByIdQueryVariables>({
    query: ProductByIdDocument,
    variables,
    fetchPolicy: "no-cache", // SSR: always fetch fresh
  });

  return (
    <div className="p-4">
      <h1>{data?.ProductById?.[0].name}</h1>
    </div>
  );
}
