import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from '../../redux/storages/users/actions'

import { usersSelector } from '../../redux/storages/users/selectors'

export const ReduxView = () => {
  const dispatch = useDispatch()
  const users = useSelector(usersSelector)

  const handleDeleteUser = (index: number) => {
    dispatch(deleteUser(index))
  }

  return (
    <div>
      <span>redux</span>

      {users.map(({ id, name }, index) => (
        <div key={id}>
          <span>{name}</span>
          <button onClick={() => handleDeleteUser(index)}>x</button>
        </div>
      ))}
    </div>
  )
}
