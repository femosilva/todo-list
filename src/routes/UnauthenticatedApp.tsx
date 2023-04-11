import { Route, Routes } from 'react-router-dom'
import { Login } from 'pages'

const UnauthenticatedApp = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default UnauthenticatedApp
