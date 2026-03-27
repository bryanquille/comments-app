import { useUserSession } from "../hooks/useUserSession"

function UserComponent() {
  const { currentUser: user, allUsers: users, changeUser } = useUserSession()

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const userId = e.target.value
    changeUser(userId)
  }

  return (
    <div
      className="w-full mb-3 flex justify-start items-center gap-2"
    >
      <img
        src={user.avatarUrl}
        alt="Imagen del usuario"
        className="w-10 h-10 rounded-full"
      />
      <select
        name="users"
        id="users"
        onChange={handleChange}
      >
        {users.map(user => {
          return (
            <option
              value={user.id}
              key={user.id}
              className="text-blue-950"
            >
              {`${user.name.first} ${user.name.last}`}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default UserComponent