"use client"
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client"
import { ApolloProvider } from "@apollo/client/react"

export const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.NEXT_PUBLIC_ENDPOINT,
  }),
  cache: new InMemoryCache(),
})


export const AppolProvider = ({ children }: any) => {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )

}
