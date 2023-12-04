import { Link } from 'react-router-dom'
import './ButtonApp.css'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ButtonApp = (props: any) => {
  const { value, classColor, direction } = props
  return (
    <>
      {direction ? (
        <Link to={`${direction}`} className={`btn-app ${classColor}`}>
          {' '}
          {value}
        </Link>
      ) : (
        <Link to='/#!' className={`btn-app ${classColor}`}>
          {value}
        </Link>
      )}
    </>
  )
}

export default ButtonApp
