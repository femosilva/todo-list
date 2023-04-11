import { BrowserRouter } from 'react-router-dom'
import UnauthenticatedApp from './UnauthenticatedApp'

const Routes = () => {
  return (
    <BrowserRouter>
      <UnauthenticatedApp />
    </BrowserRouter>
  )
}

export default Routes
