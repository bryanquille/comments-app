import { useRef } from "react"
import UserComponent from "./UserComponent"
import { useCreateComment } from "../hooks/useCreateComment"

function Form() {
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const { sendComment, isPending } = useCreateComment()

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    const text = textareaRef.current?.value || ''
    if(!text?.trim() || isPending) return 
    sendComment(text, () => {
      if(textareaRef.current) textareaRef.current.value = '' 
    })
  }

  return (
    <form
      className={`w-11/12 max-w-3xl mt-auto p-4 rounded-xl text-center flex flex-col items-center shadow-md bg-white ${isPending ? 'opacity-40' : ''}`}
      onSubmit={handleSubmit}
    >
      <UserComponent />
      <textarea
        name="comment"
        id="comment"
        placeholder="Comparte tus ideas..."
        ref={textareaRef}
        maxLength={500}
        className=" w-full min-h-32 p-3 border border-gray-300 rounded-md shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>
      <button
        type="submit"
        className="cursor-pointer mt-4 ml-auto bg-[#2b6cee] text-white py-1.5 px-4 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        disabled={isPending}
      >
        {isPending ? 'Enviando...' : 'Enviar'}
      </button>
    </form>
  )
}

export default Form