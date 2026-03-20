import type { User } from "../../../types"

export const gethUser = async (): Promise<User> => {
  const response = await fetch('https://randomuser.me/api/')
  if (!response.ok) {
    throw new Error('Error en la petición')
  }
  const data = await response.json()
  return data.results[0]
}
