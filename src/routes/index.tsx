import { useUser } from 'providers/user'
import { BrowserRouter } from 'react-router-dom'

import AuthenticatedApp from './AuthenticatedApp'
import UnauthenticatedApp from './UnauthenticatedApp'

const Routes = () => {
  const { user } = useUser()

  return <BrowserRouter> {user ? <AuthenticatedApp /> : <UnauthenticatedApp />} </BrowserRouter>
}

export default Routes
