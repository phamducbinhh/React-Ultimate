import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useAppDispatch } from '~/Redux/Hooks'
import { fetchListProductDetails } from '~/Redux/Product/Product.Slice'

const ProductDetail: React.FC = () => {
  const route = useParams()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchListProductDetails({ id: Number(route.id) }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div>details</div>
}

export default ProductDetail
