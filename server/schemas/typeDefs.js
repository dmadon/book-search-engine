const {gql} = require('apollo-server-express');

const typeDefs = gql`
type Book {
    bookId: ID
    authors: [String]
    description: String        
    image: String
    link: String
    title: String
}

type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
}    

type Auth {
    token: ID!
    user: User
}

input SaveBookInput {
    authors: [String]
    description: String        
    image: String
    link: String
    title: String
    bookId:ID
}

type Query {
    me: User
}

type Mutation {
    login (email: String!, password: String!): Auth
    addUser (username: String!, email: String!, password: String!): Auth
    saveBook (input: SaveBookInput!): User
    removeBook (bookId: String!): User
}
`;

module.exports = typeDefs;