import { observer } from 'mobx-react-lite'
import { usersMobxStorage } from '../../mobx'

export const MobxView = observer(() => {
  const handleDeleteUser = (index: number) => {
    usersMobxStorage.deleteUser(index)
  }

  return (
    <div>
      <span>mobx</span>

      {usersMobxStorage.users.map(({ id, name }, index) => (
        <div key={id}>
          <span>{name}</span>
          <button onClick={() => handleDeleteUser(index)}>x</button>
        </div>
      ))}
    </div>
  )
})
