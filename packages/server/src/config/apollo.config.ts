
import { ApolloServer } from "apollo-server-express"
import { buildSchema } from "type-graphql"
import { AuthResolver } from "../graphql/resolvers/auth/authResolver"

export const apolloConfig = async (app: any) => {
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [AuthResolver],
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
