import { useQueryClient } from "@tanstack/react-query"
import { useUpdateComments } from "./useUpdateComments"
import { CommentSchema, type Comment } from "../schemas/comment.schema"
import { toast } from "sonner"
import { useUserSession } from "../../users/hooks/useUserSession"

export const useCreateComment = () => {
  const queryClient = useQueryClient()
  const { currentUser: user } = useUserSession()
  const { mutate, isPending } = useUpdateComments()

  const sendComment = (content: string, onSuccessCallback?: () => void) => {
    const currentComments = queryClient.getQueryData<Comment[]>(['comments']) || []

    const newComment = {
      id: crypto.randomUUID(),
      author: {
        authorId: user.id,
        name: `${user?.name.first} ${user?.name.last}`,
        avatarUrl: user.avatarUrl,
      },
      content: content,
      timestamp: new Date().toISOString(),
      likes: 0,
      whoLiked: []
    }
    CommentSchema.parse(newComment)

    const updateComments = [...currentComments, newComment]
    mutate(updateComments, {
      onSuccess: () => {
        toast.success('Comentario enviado')
        if(onSuccessCallback) onSuccessCallback()
        queryClient.invalidateQueries({ queryKey: ['user'] })
      },
      onError: (err) => {
        toast.error('Error al enviar comentario', {duration: 3000})
        console.log('Error al enviar:', err)
      }
    })
  }

  return {
    sendComment,
    isPending,
  }
}
