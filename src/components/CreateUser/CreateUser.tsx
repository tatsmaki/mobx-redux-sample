import { useState, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'

import { usersMobxStorage } from '../../mobx'
import { addUser } from '../../redux/storages/users/actions'

export const CreateUser = () => {
  const dispatch = useDispatch()

  const [name, setName] = useState('')

  const handleNameInput = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleAddUser = () => {
    usersMobxStorage.addUser(name)

    dispatch(addUser(name))

    setName('')
  }

  return (
    <div>
      <input placeholder="Name" value={name} onChange={handleNameInput} />
      <button disabled={!name} onClick={handleAddUser}>
        Add User
      </button>
    </div>
  )
}
