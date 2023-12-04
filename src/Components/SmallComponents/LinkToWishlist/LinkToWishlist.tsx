import { Link } from 'react-router-dom'
import './LinkToWishlist.css'

const LinkToWishlist = () => {
  return (
    <Link className='icon-page' to='/wishlist'>
      <i className='fas fa-heart'></i>
      <span className='count'>1</span>
    </Link>
  )
}

export default LinkToWishlist
