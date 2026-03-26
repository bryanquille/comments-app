import { useQueryClient } from "@tanstack/react-query"
import { useUserSession } from "../../users/hooks/useUserSession"
import { useEffect, useState } from "react"
import { useUpdateComments } from "./useUpdateComments"
import type { Comment } from "../schemas/comment.schema"
import { toast } from "sonner"

export const useLikeComment = (id: string | undefined) => {
  const queryClient = useQueryClient()
  const { currentUser: user } = useUserSession()
  const [isLiked, setIsLiked] = useState(false)
  const { mutate } = useUpdateComments()

  // Checking for liked comments to update the like button UI
  useEffect(() => {
    const updateUILikedComments = (userLikedYet: boolean) => {
      if (userLikedYet) {
        setIsLiked(true)
        return
      }
      setIsLiked(false)
    }
    const currentComments = queryClient.getQueryData<Comment[]>(['comments']) || []
    const likedComment = currentComments.find(comment => comment.id === id)
    const userLikedYet = likedComment?.whoLiked?.includes(user.id)
    if (userLikedYet !== undefined) updateUILikedComments(userLikedYet)
  }, [queryClient, user.id, id])

  const handleLike = (id: string | undefined) => {
    const currentComments = queryClient.getQueryData<Comment[]>(['comments']) || []

    const likedComment = currentComments.find(comment => comment.id === id)
    const userLikedYet = likedComment?.whoLiked?.includes(user.id)

    // Optimistic UI update
    if (userLikedYet) setIsLiked(false)
    else setIsLiked(true)

    // Updating comments likes and list of who likes
    const updatedComments = currentComments.map(comment => {
      if (comment.id === id && comment.whoLiked?.includes(user.id)) {
        const updatedLikes = comment.likes - 1
        const whoLikedArray = [...comment.whoLiked]
        const whoLikedIdIndex = whoLikedArray.indexOf(user.id)
        whoLikedArray.splice(whoLikedIdIndex, 1)
        return { ...comment, likes: updatedLikes, whoLiked: whoLikedArray }
      }
      if (comment.id === id) {
        const updatedLikes = comment.likes + 1
        const updatedWhoLiked = comment.whoLiked?.concat(user.id)
        return { ...comment, likes: updatedLikes, whoLiked: updatedWhoLiked }
      }
      return comment
    })

    mutate(updatedComments, {
      onSuccess: () => {
        if (userLikedYet) {
          setIsLiked(false)
          return
        }
        setIsLiked(true)
      },
      onError: () => {
        toast.error('Error al dar click en "Me gusta"', { duration: 3000 })
        if (userLikedYet) {
          setIsLiked(true)
          return
        }
        setIsLiked(false)
      }
    })
  }
  return {
    isLiked,
    handleLike,
  }
}
