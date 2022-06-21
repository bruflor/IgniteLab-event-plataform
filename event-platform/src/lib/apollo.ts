import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4ohluec0ceo01w7hbsw9s07/master",
  cache: new InMemoryCache(),
});
