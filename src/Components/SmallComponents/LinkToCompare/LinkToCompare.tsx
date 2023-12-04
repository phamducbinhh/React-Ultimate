import { Link } from 'react-router-dom'

const LinkToCompare = () => {
  return (
    <Link className='icon-page compare' to='/compare'>
      <i className='fas fa-compress-alt'></i>
      <span className='count'>0</span>
    </Link>
  )
}

export default LinkToCompare
