interface Options {
  method?: string
  body?: string
}

export async function APIRequest(URL: string, options?: Options) {
  const path = 'https://aleksey-portfolio-api.herokuapp.com' + URL

  const res = await fetch(path, {
    headers: { 'Content-Type': 'application/json' },
    ...options
  })

  const data = await res.json()
  return data
}