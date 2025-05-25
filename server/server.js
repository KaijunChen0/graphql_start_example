import { ApolloServer } from "@apollo/server";
// to allow start apollo server standalone wothout using other backend framework
import { startStandaloneServer } from "@apollo/server/standalone";


const typeDefs = `#graphql
  # this is a comment
  # this is a type/class name for 'Query'
  type Query {
    # field: type(here string is a built-in type)
    greeting: String
  }
`;

const resolvers = {
  Query: {
    // 在解析器中greeting是一个返回string的函数
    // client request 'greeting', graphql to implement
    greeting: () => 'Hello world!',
  }
};

// use `ApolloServer` class  to use server
// Apollo server put graphql schema and implementation together
const server = new ApolloServer({typeDefs: typeDefs, resolvers: resolvers});
const {url} = await startStandaloneServer(server, {listen: {port: 9000}});
console.log(`Server running at ${url}`);
//so far, we set up all steps for server(schema, resolver, apollo server and start standaloneserver)