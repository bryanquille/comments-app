import { ForumIcon } from "./Icons"
import ThemeButton from "./ThemeButton"

function Header() {
  return (
    <header
      className="w-11/12 max-w-3xl flex flex-col justify-center items-center gap-2 md:flex-row md:justify-evenly"
    >
      <h1 className="flex justify-center items-center gap-2 font-bold text-2xl lg:text-4xl text-center">
        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-neutral-200 dark:bg-[#0E1522] dark:border dark:border-blue-900">
          <ForumIcon className="fill-[#2b6cee]" />
        </div>
        <span>App de comentarios</span>
      </h1>
      <ThemeButton />
    </header>
  )
}

export default Header