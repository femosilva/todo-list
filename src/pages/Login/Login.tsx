import { Column } from 'components'

const Login = () => {
  return (
    <Column minHeight='100vh' alignItems='center' justifyContent='center'>
      <Column mb={20}>
        <label>* Email: </label>
        <input />
      </Column>
      <Column mb={20}>
        <label>* Password: </label>
        <input />
      </Column>
      <button>Entrar</button>
    </Column>
  )
}

export default Login
