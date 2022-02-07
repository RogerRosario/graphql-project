// import { ApolloServer } from  "apollo-server"
import { ApolloServer, gql } from "apollo-server";
import "./db.js";
import Person from "./models/person.js";

const typeDefs = gql`
  type Person {
    id: ID
    name: String!
    lastName: String!
    age: String!
  }

  type Query {
    allPersons: [Person]
  }

  type Mutation {
    addPerson(name: String!, lastName: String!, age: String!): Person

    editPerson(id: ID!, name: String!, lastName: String!, age: String!): Person

    deletePerson(id: String!): String
  }
`;

const resolvers = {
  Query: {
    allPersons: async () => {
      return Person.find({});
    },
  },

  Mutation: {
    addPerson: (root, args) => {
      const person = new Person({ ...args });
      return person.save();
    },

    editPerson: async (root, args) => {
      const { id } = args;
      const { name, lastName, age } = { ...args };
      const person = await Person.findByIdAndUpdate(
        id,
        { name, lastName, age },
        { new: true }
      );
      return person;
      // const person = await Person.findOne({id: args.id})
      // person.name = args.name
      // person.lastName = args.lastName
      // person.age = args.age
      // return person.save();
    },

    deletePerson: async (root, args) => {
      const { id } = args;
      await Person.findByIdAndDelete(id);
      return "Deleted";
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`ready to serve at ${url}`);
});

// server.listen().then(({url}) => {
//     console.log(`Server ready at ${url}`);
// });
