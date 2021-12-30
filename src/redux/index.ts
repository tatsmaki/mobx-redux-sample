import { createStore } from 'redux'
import { usersReducer } from './storages/users/reducer'

export const usersReduxStorage = createStore(usersReducer)
