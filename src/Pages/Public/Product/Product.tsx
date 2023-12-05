import React, { useEffect } from 'react'
import FeatureTitle from '~/Components/FeatureTitle'
import ShopArea from '~/Components/ShopArea'
import { useAppDispatch, useAppSelector } from '~/Redux/Hooks'
import { fetchListProduct } from '~/Redux/Product/Product.Slice'

const Product: React.FC = () => {
  const dispatch = useAppDispatch()
  const items = useAppSelector<any[]>((state) => state.product.listProduct)
  const isLoading = useAppSelector<any>((state) => state.product.isLoading)
  const settings = {
    gridView: 4
  }

  useEffect(() => {
    dispatch(fetchListProduct())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <FeatureTitle title='Our Shop' page='Shop' />
      <ShopArea data={items} settings={settings} isLoading={isLoading} />
    </>
  )
}

export default Product
