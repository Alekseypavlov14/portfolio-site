import { APIRequest } from "../../utils/APIRequest"

test('APIRequest', async () => {
  const data = await APIRequest('/projects')
  expect(data).toHaveProperty('projects')
})