import { Row, Text } from 'components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <Row justifyContent='space-between' justifyItems='center' py='3rem' px='4.5rem'>
      <Text variant='big' fontWeight='bold'>
        todo
      </Text>
      <FontAwesomeIcon icon={faPlus} bounce size='2xl' />
    </Row>
  )
}
export default Header
