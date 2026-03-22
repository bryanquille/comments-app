import Header from "./components/Header"
import Form from "./features/comments/components/Form"
import Comment from "./features/comments/components/CommentComponent"
import { useGetComments } from "./features/comments/hooks/useGetComments"

function App() {
  const { comments, isFetching, isError, error } = useGetComments()

  return (
    <>
      <Header />
      <hr className="mt-4 mx-auto w-10/12 max-w-3xl border-gray-300" />
      <div className="w-11/12 max-w-3xl mt-6 text-center">
        {
          isFetching
            ? <div className="text-center mt-10">Cargando comentarios...</div>
            : isError
              ? <div className="text-red-500 text-center mt-10">Error: {error?.message}</div>
              : comments?.map(comment => {
                return (
                  <Comment
                    key={comment.id}
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