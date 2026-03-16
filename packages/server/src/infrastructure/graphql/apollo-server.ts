import { BrandResovler, AuthResolver, UserResolver, UserAddressResolver, UserProfileResovler, UserResolverGraph, MerchantResolver, PaymentResolver, ProductResolver } from "@/presentation/api/graphql/resolver";
import { ApolloServer } from "@apollo/server";
import { InMemoryLRUCache } from '@apollo/utils.keyvaluecache';
import { expressMiddleware } from "@as-integrations/express4";
import cors from "cors";
import { Express } from "express";
import { buildSchema } from "type-graphql";

export const apolloConfig = async (app: Express | any) => {
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [ProductResolver, UserResolver, UserAddressResolver, UserProfileResovler, PaymentResolver, AuthResolver, BrandResovler, MerchantResolver, UserResolverGraph],
      validate: true,
    }),
    cache: new InMemoryLRUCache({
      maxSize: Math.pow(2, 20) * 100,
      ttl: 300,
    }),
  })
  apolloServer.addPlugin(app)
  apolloServer

  await apolloServer.start()
  app.use('/graphql',
    cors<cors.CorsRequest>({ origin: ["http://localhost:3000"] }),
    expressMiddleware(apolloServer, {
      context: async ({ req, res }) => ({ token: req.headers.token, res }),
    }),
  );



}

