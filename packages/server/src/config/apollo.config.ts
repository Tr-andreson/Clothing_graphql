import { ApolloServer } from "@apollo/server"
import { buildSchema } from "type-graphql"
import { expressMiddleware } from "@as-integrations/express4"
import { MerchantResolver } from "@/graphql/resolvers/merchant/merchantResolver"
import { BrandResovler } from "@/graphql/resolvers/brand/brandResolver"
import { AuthResolver } from "@/graphql/resolvers/auth/authResolver";
import { ProductR } from "@/graphql/resolvers/product/ProudctR";
import { InMemoryLRUCache } from '@apollo/utils.keyvaluecache';
import cors from "cors"
import { UserResolver } from "@/presentation/api/graphql/resolver/user";
import { UserAddressResolver } from "@/presentation/api/graphql/resolver/user_address";
import { UserProfileResovler } from "@/presentation/api/graphql/resolver/user_profile"
import PaymentResolver from "@/presentation/api/graphql/resolver/payment"
import { UserResolverGraph } from "@/graphql/resolvers/user/userResolver"

export const apolloConfig = async (app: any) => {
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [AuthResolver,
        UserResolverGraph,
        ProductR, MerchantResolver, BrandResovler, UserResolver, UserAddressResolver, UserProfileResovler, PaymentResolver],
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

