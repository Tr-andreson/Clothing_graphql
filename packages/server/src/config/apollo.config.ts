
import { ApolloServer } from "apollo-server-express"
import { ProductResolver } from "../graphql/resolvers/product/productResolver"
import { buildSchema } from "type-graphql"
import { AuthResolver } from "../graphql/resolvers/auth/authResolver"
import { UserResolver } from "../graphql/resolvers/user/userResolver"

export const apolloConfig = async (app: any) => {


  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [ProductResolver, AuthResolver, UserResolver],
      validate: false
    }),
    context: ({ req, res }) => ({ req, res }),
  })

  await apolloServer.start()

  apolloServer.applyMiddleware({
    app,
    cors: false
  })

}
