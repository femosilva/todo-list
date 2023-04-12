import { Header } from 'components'
import Routes from 'routes'

import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyles } from 'theme'

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Header />
    <Routes />
  </ThemeProvider>
)

export default App
