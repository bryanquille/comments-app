import mockUsers from '../data/mock-users.json'
import { useQuery, useQueryClient } from "@tanstack/react-query"

export const useUserSession = () => {
  const allUsers = mockUsers.users
  const queryClient = useQueryClient()

  const { data: currentUser } = useQuery({
    queryKey: ['active-user'],
    queryFn: () => allUsers[0],
    initialData: allUsers[0],
    staleTime: Infinity
  })

  const changeUser = (userId: string) => {
    const user = mockUsers.users.find(u => u.id === userId)
    if (user) queryClient.setQueryData(['active-user'], user)
  }

  return {
    allUsers,
    currentUser,
    changeUser,
  }
}
