import { ProductByIdDocument, ProductByIdQuery, ProductsDocument } from "@/gql/graphql";
import { getClient } from "@/providers/apollo-provider/apolloServer";
import Image from "next/image"


export const Product = async () => {
  const client = getClient()
  const { data } = await client.query<ProductByIdQuery>({
    query: ProductByIdDocument
  })

  return (
    <div>
      {/*   return ( */}
      {/*     <div key={key} className="grid grid-cols-3  gap-4"> */}
      {/*       <Image */}
      {/*         className="h-[500px] w-full  hover:cursor-pointer col-span-1" */}
      {/*         width={400} */}
      {/*         height={400} */}
      {/*         alt="Alt Image" */}
      {/*         src={_.imageUrl} */}
      {/*       /> */}
      {/*       <div className="col-span-2"> */}
      {/*         <h3 className="cardHeading">{_.name}</h3> */}
      {/*         <h4>{_.description}</h4> */}
      {/*         <p>{_.price}</p> */}
      {/*       </div> */}
      {/**/}
      {/*     </div> */}
      {/*   ) */}
      {/* })} */}
    </div>
  )
}
