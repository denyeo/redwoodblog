import { db } from 'src/lib/db'

export const prompts = () => {
  return db.prompt.findMany()
}

export const Prompt = {
  post: (_obj, { root }) =>
    db.prompt.findUnique({ where: { id: root.id } }).post(),
}
