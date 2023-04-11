import { Route, Routes } from 'react-router-dom'
import { Home } from 'pages'

const UnauthenticatedApp = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  )
}

export default UnauthenticatedApp
