import { useRef } from "react"
import UserComponent from "./UserComponent"

function Form() {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newComment = {
      id: crypto.randomUUID(),
      author: {
        name: 'Usuario',
        avatarUrl: 'link',
      },
      content: textareaRef.current?.value,
      timestamp: new Date(),
      likes: 0,
    }
    console.log(newComment)
  }

  return (
    <form
      className="w-11/12 max-w-3xl mt-auto p-4 rounded-xl text-center flex flex-col items-center shadow-md bg-neutral-50"
      onSubmit={handleSubmit}
    >
      <UserComponent />
      <textarea
        name="comment"
        id="comment"
        placeholder="Comparte tus ideas..."
        ref={textareaRef}
        className=" w-full min-h-32 p-3 border border-gray-300 rounded-md shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>
      <button
        type="submit"
        className="cursor-pointer mt-4 ml-auto bg-[#2b6cee] text-white py-1.5 px-4 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Enviar
      </button>
    </form>
  )
}

export default Form