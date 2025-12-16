import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express4";
import { buildSchema } from "type-graphql";
import { ProductR } from "@/graphql/resolvers/product/ProudctR";
import PaymentResolver from "@/presentation/api/graphql/resolver/payment";
import { UserResolver } from "@/presentation/api/graphql/resolver/user";
import { UserAddressResolver } from "@/presentation/api/graphql/resolver/user_address";
import { UserProfileResovler } from "@/presentation/api/graphql/resolver/user_profile";
import { InMemoryLRUCache } from '@apollo/utils.keyvaluecache';
import cors from "cors";
import { Express } from "express";

export const apolloConfig = async (app: Express | any) => {
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [ProductR, UserResolver, UserAddressResolver, UserProfileResovler, PaymentResolver],
      validate: true,
    }),
    cache: new InMemoryLRUCache({
      maxSize: Math.pow(2, 20) * 100,
      ttl: 300,
    }),
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

