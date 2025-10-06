// old code not used
// import { ApolloServer } from "apollo-server-express"
// import { buildSchema } from "type-graphql"
// import { AuthResolver } from "../graphql/resolvers/auth/authResolver"
// import { ProductR } from "src/graphql/resolvers/product/ProudctR"
//
// export const apolloConfig = async (app: any) => {
//   const apolloServer = new ApolloServer({
//     schema: await buildSchema({
//       resolvers: [AuthResolver, ProductR],
//       validate: false
//     }),
//     context: ({ req, res }) => ({ req, res }),
//     formatError: (err) => {
//       // Map known errors to codes
//       if (err.message.includes("Unauthorized")) {
//         err.extensions.code = "UNAUTHENTICATED";
//         (err.extensions as any).http = { status: 401 };
//       } else {
//         (err.extensions as any).http = { status: 500 };
//       }
//       return err;
//     },
//   })
//
//   await apolloServer.start()
//
//   apolloServer.applyMiddleware({
//     app,
//     cors: false
//   })
//
// }
