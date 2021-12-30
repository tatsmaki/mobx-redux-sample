import { ADD_USER, addUser, DELETE_USER, deleteUser } from './actions'

type User = {
  id: number
  name: string
}

export type State = {
  users: Array<User>
}

const INIT_STATE = {
  users: [],
}

type Action = ReturnType<typeof addUser | typeof deleteUser>

export const usersReducer = (state: State = INIT_STATE, action: Action) => {
  switch (action.type) {
    case ADD_USER: {
      return {
        ...state,
        users: [...state.users, action.user],
      }
    }

    case DELETE_USER: {
      return {
        ...state,
        users: [
          ...state.users.slice(0, action.index),
          ...state.users.slice(action.index + 1),
        ],
      }
    }

    default: {
      return state
    }
  }
}
