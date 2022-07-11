import { APIRequest } from "../../business/api/APIRequest"

test('APIRequest', async () => {
  const data = await APIRequest('/projects')
  expect(data).toHaveProperty('projects')
})