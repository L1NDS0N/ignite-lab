import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4pjhei91rg701xn1u2d5dgf/master',
  cache: new InMemoryCache(),
});
