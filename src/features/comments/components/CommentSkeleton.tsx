function CommentSkeleton() {
  return (
    <div className="w-full mb-8 flex justify-start items-start gap-4 animate-pulse">
      <span
        className="w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-600"
      ></span>
      <div className="grow flex flex-col justify-start items-start gap-1">
        <div className="flex justify-start items-center gap-3">
          <span
            className="w-24 h-5 rounded-sm bg-gray-300 dark:bg-gray-600"
          ></span>
          <span
            className="w-36 h-5 rounded-sm bg-gray-300 dark:bg-gray-600"
          ></span>
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-1.5">
          <span
            className="w-full h-5 rounded-sm bg-gray-300 dark:bg-gray-600"
          ></span>
          <span
            className="w-full h-5 rounded-sm bg-gray-300 dark:bg-gray-600"
          ></span>
          <span
            className="w-3/4 h-5 rounded-sm bg-gray-300 dark:bg-gray-600"
          ></span>
        </div>
        <div className="flex justify-start items-center gap-1">
          <span
            className="w-24 h-5 rounded-sm bg-gray-300 dark:bg-gray-600"
          ></span>
        </div>
      </div>
    </div>
  )
}

export default CommentSkeleton