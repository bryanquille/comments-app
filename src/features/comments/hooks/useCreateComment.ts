import { useQueryClient } from "@tanstack/react-query"
import { useUser } from "./useUser"
import { useUpdateComments } from "./useUpdateComments"
import { CommentSchema } from "../schemas/comment.schema"
import type { CommentWithIdType } from "../../../types"

export const useCreateComment = () => {
  const queryClient = useQueryClient()
  const { user } = useUser()
  const { mutate, isPending } = useUpdateComments()

  const sendComment = (content: string, onSuccessCallback?: () => void) => {
    const currentComments = queryClient.getQueryData<CommentWithIdType[]>(['comments']) || []

    const newComment: CommentWithIdType = {
      id: crypto.randomUUID(),
      author: {
        name: `${user?.name.first} ${user?.name.last}`,
        avatarUrl: user?.picture.medium || '',
      },
      content: content || '',
      timestamp: new Date().toISOString(),
      likes: 0,
    }
    CommentSchema.parse(newComment)

    const updateComments = [...currentComments, newComment]
    mutate(updateComments, {
      onSuccess: () => {
        if(onSuccessCallback) onSuccessCallback()
        queryClient.invalidateQueries({ queryKey: ['user'] })
      },
      onError: (err) => {
        console.log('Error al enviar:', err)
      }
    })
  }

  return {
    sendComment,
    isPending,
  }
}
