export const schema = gql`
  type Post {
    id: Int!
    author: User
    authorId: Int
    roundId: Int
    prompt: Prompt
    promptId: Int
    title: String!
    body: String!
    createdAt: DateTime!
  }

  type Query {
    posts: [Post!]!
  }

  input CreatePostInput {
    # authorId: Int
    # roundId: Int
    # promptId: Int
    title: String!
    body: String!
    authorName: String!
    # author: String!
  }

  input UpdatePostInput {
    authorId: Int
    roundId: Int
    promptId: Int
    title: String
    body: String
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post
  }
`
