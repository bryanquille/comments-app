import Header from "./components/Header"
import Form from "./features/comments/components/Form"
import { useGetComments } from "./features/comments/hooks/useGetComments"
import CommentComponent from "./features/comments/components/CommentComponent"
import CommentSkeleton from "./features/comments/components/CommentSkeleton"
import { Toaster } from "sonner"

function App() {
  const { comments, isLoading, isError, error } = useGetComments()

  return (
    <>
      <Toaster position="bottom-center" richColors />
      <Header />
      <hr className="mt-4 mx-auto w-10/12 max-w-3xl border-gray-300" />
      <div className="w-11/12 max-w-3xl mt-6 text-center">
        {
          isLoading
            ? <>
              <CommentSkeleton />
              <CommentSkeleton />
              <CommentSkeleton />
            </>
            : isError
              ? <p className="text-red-500 text-center mt-10">Error: {error?.message}</p>
              : comments?.length === 0
                ? <p className="text-gray-500 text-center mt-10">No hay comentarios aún. ¡Sé el primero en comentar!</p>
                : comments?.map(comment => {
                  return (
                    <CommentComponent
                      key={comment.id}
                      id={comment.id}
                      author={comment.author}
                      content={comment.content}
                      likes={comment.likes}
                      timestamp={comment.timestamp}
                    />
                  )
                })
        }
      </div>
      <Form />
    </>
  )
}

export default App