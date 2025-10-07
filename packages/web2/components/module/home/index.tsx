import Image from "next/image"

export interface ProductT {
  data: Data;
}

export interface Data {
  Products: Product[];
}

export interface Product {
  name: string;
  imageUrl: string;
  imageKey: string;
  description: string;
  quantity: number;
  price: number;
}
export const HomePage = async () => {
  let url = "http://localhost:8000/graphql"
  const graphqlQuery = `
    query Products {
       Products {
        name
        imageUrl
        imageKey
        description
        quantity
        price
    }
  }`;

  let response = await fetch(url, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query: graphqlQuery,
    }),
  })

  let responseJson: ProductT = await response.json()

  if (!responseJson) return <div>No Products</div>
  return (
    <div className="container">
      <h4>Products</h4>
      <div className="grid grid-cols-3 gap-4">
        {responseJson.data.Products.map((_, key) => {
          return (
            <div key={key}>
              <Image
                className="h-[500px] w-full"
                width={200}
                height={200}
                alt="Alt Image"
                src={_.imageUrl} />
              <h4>{_.name}</h4>
              <h5>{_.description}</h5>
            </div>
          )
        })}


      </div>

    </div>
  )

}
