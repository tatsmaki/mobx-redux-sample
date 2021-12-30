import { Provider } from 'react-redux'

import { usersReduxStorage } from '../../redux'
import { CreateUser } from '../CreateUser/CreateUser'

import { MobxView } from '../MobxView/MobxView'
import { ReduxView } from '../ReduxView/ReduxView'

export const App = () => {
  return (
    <div>
      <Provider store={usersReduxStorage}>
        <CreateUser />

        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <MobxView />

          <ReduxView />
        </div>
      </Provider>
    </div>
  )
}
