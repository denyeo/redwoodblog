export const QUERY = gql`
  query BlogPostsQuery {
    posts {
      id
      title
      author {
        name
      }
      prompt {
        text
      }
      roundId
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ posts }) => {
  return posts.map((post) => (
    <div>
      <h3>{post.id} {post.title}</h3>
      <p>{post.body}</p>
    </div>
  ))
}
