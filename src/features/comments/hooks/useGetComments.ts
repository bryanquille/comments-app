import { useQuery } from "@tanstack/react-query"
import { getComments } from "../services/comments"

export const useGetComments = () => {
  const { data: comments, isFetching, error, isError } = useQuery({
    queryKey: ['comments'],
    queryFn: getComments,
    refetchOnWindowFocus: false,
  })

  return {
    comments,
    isFetching,
    error,
    isError
  }
}
