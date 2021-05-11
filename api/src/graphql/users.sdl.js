export const schema = gql`
  type User {
    id: Int!
    email: String!
    name: String!
    post: [Post]!
    createdAt: DateTime!
  }

  type Query {
    users: [User!]!
  }

  input CreateUserInput {
    email: String!
    name: String!
  }

  input UpdateUserInput {
    email: String
    name: String
  }
`
