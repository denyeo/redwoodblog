import { prompts } from './prompts'

describe('prompts', () => {
  scenario('returns all prompts', async (scenario) => {
    const result = await prompts()

    expect(result.length).toEqual(Object.keys(scenario.prompt).length)
  })
})
