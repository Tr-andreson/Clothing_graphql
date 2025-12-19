import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express4";
import { buildSchema } from "type-graphql";
import PaymentResolver from "@/presentation/api/graphql/resolver/payment";
import { UserResolver } from "@/presentation/api/graphql/resolver/user";
import { UserAddressResolver } from "@/presentation/api/graphql/resolver/user_address";
import { UserProfileResovler } from "@/presentation/api/graphql/resolver/user_profile";
import { InMemoryLRUCache } from '@apollo/utils.keyvaluecache';
import cors from "cors";
import { Express } from "express";
import { ProductR } from "@/presentation/api/graphql/resolver/product/ProudctR";
import { AuthResolver } from "@/presentation/api/graphql/resolver/auth/authResolver";
import { BrandResovler } from "@/presentation/api/graphql/resolver/brand/brandResolver";
import { MerchantResolver } from "@/presentation/api/graphql/resolver/merchant/merchantResolver";
import { UserResolverGraph } from "@/presentation/api/graphql/resolver/user-old/userResolver";

export const apolloConfig = async (app: Express | any) => {
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [ProductR, UserResolver, UserAddressResolver, UserProfileResovler, PaymentResolver, AuthResolver, BrandResovler, MerchantResolver, ProductR, UserResolverGraph],
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

