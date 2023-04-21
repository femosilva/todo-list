import { Header } from 'components'
import Routes from 'routes'
import './theme/global.css'

import { TodoProvider } from 'context/TodoContext'

const App = () => (
  <TodoProvider>
    <Header />
    <Routes />
  </TodoProvider>
)

export default App
