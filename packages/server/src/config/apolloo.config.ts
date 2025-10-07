import { ApolloServer } from "@apollo/server"
import { buildSchema } from "type-graphql"
import { expressMiddleware } from "@as-integrations/express4"
import { ApolloServerPluginCacheControl } from '@apollo/server/plugin/cacheControl';
import { MerchantResolver } from "@/graphql/resolvers/merchant/merchantResolver"
import { BrandResovler } from "@/graphql/resolvers/brand/brandResolver"
import { AuthResolver } from "@/graphql/resolvers/auth/authResolver";
import { ProductR } from "@/graphql/resolvers/product/ProudctR";

import { InMemoryLRUCache } from '@apollo/utils.keyvaluecache';
import cors from "cors"

export const ApollooConfig = async (app: any) => {
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [AuthResolver, ProductR, MerchantResolver, BrandResovler],
      validate: true
    }),
    cache: new InMemoryLRUCache({
      maxSize: Math.pow(2, 20) * 100,
      ttl: 300,
    }),
    // plugins: [
    //   ApolloServerPluginCacheControl({
    //     defaultMaxAge: 200,
    //   }),
    //   ApolloServerPluginUsageReporting({
    //     fieldLevelInstrumentation: 0.5
    //   })
    // ]
  })
  apolloServer.addPlugin(app)

  await apolloServer.start()
  app.use('/graphql',
    cors<cors.CorsRequest>({ origin: ["http://localhost:3000"] }),
    expressMiddleware(apolloServer, {
      context: async ({ req }) => ({ token: req.headers.token }),
    }),
  );



}

