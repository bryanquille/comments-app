import { ForumIcon } from "./Icons"

function Header() {
  return (
    <header>
      <h1 className="flex justify-center items-center gap-2 font-bold text-2xl lg:text-4xl text-center">
        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-neutral-200">
          <ForumIcon className="fill-[#2b6cee]" />
        </div>
        <span>App de comentarios</span>
      </h1>
    </header>
  )
}

export default Header