import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateComments } from "../services/comments"

export const useUpdateComments = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: updateComments,
    onMutate: async (newCommentsList) => {
      await queryClient.cancelQueries({ queryKey: ['comments'] })
      const previousComments = queryClient.getQueriesData<Comment[]>({ queryKey: ['commments'] })
      queryClient.setQueriesData({ queryKey: ['comments'] }, newCommentsList)
      return { previousComments }
    },
    onError: (error, _newCommentsList, context) => {
      if(context?.previousComments) {
        queryClient.setQueriesData({ queryKey: ['comments'] }, context.previousComments)
      }
      console.log('Hubo un error al enviar los comentarios.', error)
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['comments'] });
    },
  })
}