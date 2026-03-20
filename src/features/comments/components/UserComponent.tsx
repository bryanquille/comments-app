import { useUser } from "../hooks/useUser"

function UserComponent() {
  const { user, isFetching, error } = useUser()

  return (
    <div
      className="w-full mb-3 flex justify-start items-center gap-2"
    >
      {
        error
          ? <p>Ocurrio un error al cargar el usuario</p>
          : isFetching
            ? <>
              <span
                className="w-10 h-10 rounded-full bg-gray-200"
              ></span>
              <span
                className="w-32 h-6 rounded-sm bg-gray-200"
              ></span>
            </>
            : <>
              <img
                src={user?.picture?.medium}
                alt="Imagen del usuario"
                className="w-10 h-10 rounded-full"
              />
              <p>{`${user?.name?.first} ${user?.name?.last}`}</p>
            </>
      }
    </div>
  )
}

export default UserComponent