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
