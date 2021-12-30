import { makeObservable, observable, action } from 'mobx'

type User = {
  id: number
  name: string
}

export class UsersStorage {
  users: Array<User> = []

  constructor() {
    makeObservable(this, {
      users: observable,
      addUser: action,
      deleteUser: action,
    })
  }

  addUser = (name: string) => {
    const newUser = { id: Math.random(), name }

    this.users.push(newUser)
  }

  deleteUser = (index: number) => {
    this.users.splice(index, 1)
  }
}
