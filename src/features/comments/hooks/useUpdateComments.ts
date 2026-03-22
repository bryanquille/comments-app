import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateComments } from "../services/comments"

export const useUpdateComments = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: updateComments,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments'] })
      console.log('¡Comentarios enviado exitosamente!')
    },
    onError: (error) => {
      console.log('Hubo un error al enviar los comentarios.', error)
    }
  })
}