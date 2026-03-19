import { Slug } from './slug'

test('should be able to create a slug from a string', () => {
  const slug = Slug.createFromText('How to create a slug?')

  expect(slug.value).toBe('how-to-create-a-slug')
})
