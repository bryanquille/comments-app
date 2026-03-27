import { useDarkMode } from "../hooks/useDarkMode"
import { useHeightElement } from "../hooks/useHeightElement"
import { MoonIcon, SunIcon } from "./Icons"

function ThemeButton() {
  const { isDark, toggleTheme } = useDarkMode()
  const { element, elementHeight } = useHeightElement()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      ref={element as React.RefObject<HTMLButtonElement>}
      className="cursor-pointer relative p-1 flex justify-center items-center gap-2 border-2 border-blue-900 rounded-full"
    >
      <span
      className={`absolute rounded-full bg-blue-600 ${isDark ? '-translate-x-1/2' : 'translate-x-1/2'} transform transition-all duration-150`}
        style={{width: elementHeight, height: elementHeight}}
      ></span>
      <SunIcon className="fill-amber-500" />
      <MoonIcon className="fill-white" />
    </button>
  )
}

export default ThemeButton