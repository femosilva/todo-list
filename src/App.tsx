import Routes from 'routes'

import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyles } from 'theme'

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Routes />
  </ThemeProvider>
)

export default App
