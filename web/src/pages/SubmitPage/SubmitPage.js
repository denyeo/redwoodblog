// import { Link, routes } from '@redwoodjs/router'
import { Form, TextField, TextAreaField, Submit } from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'

const CREATE_POST = gql`
  mutation CreatePostMutation($input: CreatePostInput!) {
    createPost(input: $input) {
      id
    }
  }
`

const SubmitPage = () => {
  const [create] = useMutation(CREATE_POST)

  const onSubmit = (data) => {
    create({ variables: { input: data } })
    console.log(data)
  }

  return (
    <Form onSubmit={onSubmit}>
      <label htmlFor="authorName">Pick a nickname</label>
      <TextField name="authorName" required />

      <label htmlFor="title">Your submission's title</label>
      <TextAreaField name="title" required />

      <label htmlFor="body">Your submission</label>
      <TextAreaField name="body" required />

      <Submit>Submit your piece</Submit>
    </Form>
  )
}

export default SubmitPage
