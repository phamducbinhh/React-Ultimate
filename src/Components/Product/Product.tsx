import './Product.css'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Skeleton from 'react-loading-skeleton'
import { getDataToModal, openModal } from '~/Redux/Modal/Modal.Slice'
import { useAppDispatch } from '~/Redux/Hooks'

const Product = (props: any) => {
  const { image, price, sale, title, category, hoverImage, saleItem, newItem, id, desc, isLoading, itemClick } = props
  const dispatch = useAppDispatch()

  const handleModalView = (item: any) => {
    const html: any = document.querySelector('html')
    const action = getDataToModal(item)
    const actionOpenModal = openModal()
    dispatch(action)
    dispatch(actionOpenModal)
    html.classList.add('prevent-scroll')
  }

  return (
    <>
      {isLoading && <ProductSkeleton />}
      {!isLoading && (
        <Box className='product-wrapper'>
          <Box className='product-img'>
            <Link to={`/products/${id - 1}`}>
              <img src={image} alt='image' />
              <img className='secondary-img' src={hoverImage} alt='imge 2'></img>
            </Link>
            <Box className='product-action text-center'>
              <span title='Shopping Cart'>
                <i className='fal fa-cart-plus'></i>
              </span>
              <span title='Quick View' onClick={() => handleModalView(itemClick)}>
                <i className='fal fa-eye'></i>
              </span>
              <span className='active' title='Compare'>
                <i className='far fa-exchange-alt'></i>
              </span>
            </Box>
            <Box className='sale-tag'>
              {newItem && <span className='new'>new</span>}
              {sale && <span className='sale'>sale</span>}
            </Box>
          </Box>

          <Box className='product-content'>
            <Box className='pro-cat mb-10'>
              <a href='#!'>{category} </a>
            </Box>
            <h4>
              <Link to={`/products/${id - 1}`}>{title}</Link>
            </h4>
            <Box className='product-meta'>
              <Box className='pro-price'>
                <span>{sale ? saleItem.toFixed(2) : price.toFixed(2)} USD</span>
                {sale ? <span className='old-price'>$230.00 USD</span> : <></>}
              </Box>
              <Box className='pro-content'>
                <p>{desc}</p>
              </Box>
            </Box>
            <Box className='product-wishlist'>
              <span title='Shopping Cart'>
                <i className='fal fa-cart-plus'></i>
              </span>
              <span title='Quick View'>
                <i className='fal fa-eye'></i>
              </span>
              <span className='active'>
                <i className='far fa-heart' title='Wishlist'></i>
              </span>
            </Box>
          </Box>
        </Box>
      )}
    </>
  )
}

export const ProductSkeleton = () => {
  return (
    <Box className='product-wrapper'>
      <Skeleton height={325} />
      <Box className='product-content'>
        <Box className='pro-cat mb-10'>
          <Skeleton />
        </Box>
        <Skeleton />
        <Box className='product-meta'>
          <Box className='pro-price'>
            <Skeleton />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Product
