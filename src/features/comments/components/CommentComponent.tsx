import { LikeIcon } from "../../../components/Icons"
import { useLikeComment } from "../hooks/useLikeComment"
import type { Comment } from "../schemas/comment.schema"
import { formatCommentDate } from "../utils/date"

function CommentComponent({ id, author, content, likes, timestamp }: Comment) {
  const { isLiked, handleLike } = useLikeComment(id)  

  return (
    <div className="w-full mb-8 flex justify-start items-start gap-4">
      <img
        src={author.avatarUrl}
        alt="User image"
        className="w-12 h-12 rounded-full"
      />
      <div className="grow flex flex-col justify-start items-start gap-2">
        <div className="flex flex-col justify-start items-start md:flex-row md:items-center md:gap-3">
          <strong className="font-semibold text-left">{author.name}</strong>
          <time
            dateTime="2026-03-20T20:18:46.420Z"
            className="text-gray-500 text-left text-sm md:text-base"
          >
            {formatCommentDate(timestamp)}
          </time>
        </div>
        <p className="text-left">
          {content}
        </p>
        <div className="flex justify-start items-center gap-1">
          <button
            type="button"
            className="cursor-pointer"
            onClick={() => handleLike(id)}
          >
            <LikeIcon className={`w-5 h-5 ${isLiked ? 'fill-blue-500' : 'fill-gray-400 hover:fill-blue-500'}`} />
          </button>
          <span className="text-gray-500 dark:text-gray-400">{likes}</span>
        </div>
      </div>
    </div>
  )
}

export default CommentComponent