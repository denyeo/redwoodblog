export const schema = gql`
  type Prompt {
    id: Int!
    roundId: Int!
    text: String!
    post: [Post]!
  }

  type Query {
    prompts: [Prompt!]!
  }

  input CreatePromptInput {
    roundId: Int!
    text: String!
  }

  input UpdatePromptInput {
    roundId: Int
    text: String
  }
`
