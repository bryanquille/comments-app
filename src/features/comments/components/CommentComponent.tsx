import { useQueryClient } from "@tanstack/react-query"
import { LikeIcon } from "../../../components/Icons"
import type { Comment } from "../schemas/comment.schema"
import type { CommentWithIdType } from "../../../types"
import { useUpdateComments } from "../hooks/useUpdateComments"
import { useState } from "react"
import { toast } from "sonner"
import { useUser } from "../hooks/useUser"

function CommentComponent({ id, author, content, likes, timestamp }: Comment) {
  const queryClient = useQueryClient()
  const { user } = useUser()
  const [isLiked, setIsLiked] = useState(() => {
    const savedLikes = localStorage.getItem('user_likes')
    if (!savedLikes) return false
    const likesArray = JSON.parse(savedLikes)
    // console.log(likesArray)
    return likesArray.includes(id)
  })
  const { mutate } = useUpdateComments()

  const handleLike = (id: string | undefined) => {
    if (!id || isLiked) return
    setIsLiked(true)

    const userLiked = {
      name: `${user?.name.first} ${user?.name.last}`,
      email: `${user?.email}`,
      commentId: id
    }

    const savedLikes = localStorage.getItem('user_likes')
    if (!savedLikes) {
      localStorage.setItem('user_likes', JSON.stringify([userLiked]))
    } else {
      const likesArray = JSON.parse(savedLikes)
      console.log(likesArray)
    }

    const currentComments = queryClient.getQueryData<CommentWithIdType[]>(['comments']) || []
    const updatedComments = currentComments.map(comment => {
      if (comment.id === id) {
        const updatedLikes = comment.likes + 1
        return { ...comment, likes: updatedLikes }
      }
      return comment
    })

    mutate(updatedComments, {
      onSuccess: () => {
        setIsLiked(true)
      },
      onError: () => {
        toast.error('Error al dar "Me gusta"', { duration: 3000 })
        setIsLiked(false)
      }
    })
  }

  return (
    <div className="w-full mb-8 flex justify-start items-start gap-4">
      <img
        src={author.avatarUrl}
        alt="User image"
        className="w-12 h-12 rounded-full"
      />
      <div className="grow flex flex-col justify-start items-start gap-1">
        <div className="flex justify-start items-center gap-3">
          <strong className="font-semibold text-left">{author.name}</strong>
          {/* TODO: manage dates to show short time */}
          <time
            dateTime="2026-03-20T20:18:46.420Z"
            className="text-gray-500 text-left"
          >
            {timestamp}
          </time>
        </div>
        <p className="text-left">
          {content}
        </p>
        <div className="flex justify-start items-center gap-1">
          {/* Adding functionality to the like button */}
          <button
            type="button"
            className="cursor-pointer"
            onClick={() => handleLike(id)}
          >
            <LikeIcon className={`w-5 h-5 ${isLiked ? 'fill-blue-500' : 'fill-gray-400 hover:fill-blue-500'}`} />
          </button>
          <span className="text-gray-500">{likes}</span>
        </div>
      </div>
    </div>
  )
}

export default CommentComponent