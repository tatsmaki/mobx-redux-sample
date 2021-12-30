export const ADD_USER = 'ADD_USER'

export const addUser = (name: string) => ({
  type: ADD_USER as typeof ADD_USER,
  user: {
    id: Math.random(),
    name,
  },
})

export const DELETE_USER = 'DELETE_USER'

export const deleteUser = (index: number) => ({
  type: DELETE_USER as typeof DELETE_USER,
  index,
})
