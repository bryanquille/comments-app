import type { UserType } from "../../../types"

type UserSelectorPropsTypes = {
  users: UserType[]
}

function UserSelector({ users }: UserSelectorPropsTypes) {
  return (
    <select
      name="users"
      id="users"
    >
      {users.map(user => {
        return (
          <option value={user.id} key={user.id}>
            {`${user.name.first} ${user.name.last}`}
          </option>
        )
      })}
    </select>
  )
}

export default UserSelector