import { ForumIcon } from "./components/Icons"
import UserComponent from "./features/comments/components/UserComponent"

function App() {
  return (
    <>
      <h1 className="flex justify-center items-center gap-4 font-bold text-4xl text-center">
        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-neutral-100">
          <ForumIcon className="fill-[#2b6cee]" />
        </div>
        <span>App de comentarios</span>
      </h1>
      <hr className="mt-4 mx-auto w-10/12 max-w-3xl border-gray-300" />
      <div className="mt-6 text-center">
        Aqui se muestran los comentarios
      </div>
      <form className="w-11/12 max-w-3xl mt-auto p-5 rounded-xl text-center flex flex-col items-center shadow-md bg-neutral-50">
        <UserComponent />
        <textarea
          name="comment"
          id="comment"
          placeholder="Comparte tus ideas..."
          className=" w-full min-h-32 p-3 border border-gray-300 rounded-md shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button
          type="submit"
          className="cursor-pointer mt-4 ml-auto bg-blue-500 text-white py-1.5 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Enviar
        </button>
      </form>
    </>
  )
}

export default App