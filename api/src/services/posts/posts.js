import { db } from 'src/lib/db'

export const posts = () => {
  return db.post.findMany()
}

export const Post = {
  author: (_obj, { root }) =>
    db.post.findUnique({ where: { id: root.id } }).author(),
  prompt: (_obj, { root }) =>
    db.post.findUnique({ where: { id: root.id } }).prompt(),
}

export const createPost = ({ input }) => {
  return db.post.create({ data: {
    title: input.title,
    body: input.body,
    author: {
      connectOrCreate: {
        where: {
          name: input.authorName
        },
        create: {
          name: input.authorName
        }
      }
    }
  },
  include: {
    author: true
  } })
}