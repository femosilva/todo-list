import { Header } from 'components'
import Routes from 'routes'
import './theme/global.css'

import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyles } from 'theme'
import { TodoProvider } from 'context/TodoContext'

const App = () => (
  <ThemeProvider theme={theme}>
    <TodoProvider>
      <GlobalStyles />
      <Header />
      <Routes />
    </TodoProvider>
  </ThemeProvider>
)

export default App
