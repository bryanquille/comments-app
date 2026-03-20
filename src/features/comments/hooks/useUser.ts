import { useQuery } from "@tanstack/react-query"
import { gethUser } from "../services/user"

export const useUser = () => {
    const { data: user, isFetching, error } = useQuery({
    queryKey: ['user'],
    queryFn: gethUser,
    refetchOnWindowFocus: false,
  })
  return {
    user,
    isFetching,
    error
  }
}
