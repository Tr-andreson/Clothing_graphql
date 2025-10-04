import { ApolloServer } from "@apollo/server"
import { AuthResolver } from "../graphql/resolvers/auth/authResolver"
import { ProductR } from "../graphql/resolvers/product/ProudctR"
import { buildSchema } from "type-graphql"
import { expressMiddleware } from "@as-integrations/express4"


export const ApollooConfig = async (app: any) => {
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [AuthResolver, ProductR]
    })
  })
  apolloServer.addPlugin(app)

  await apolloServer.start()
  app.use('/graphql',
    expressMiddleware(apolloServer, {
      context: async ({ req }) => ({ token: req.headers.token }),
    }),
  );



}

