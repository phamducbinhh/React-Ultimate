import { useEffect } from 'react'
import Banner from '~/Components/Banner'
import BrandNewItems from '~/Components/BrandNewItems'
import HomeCarousel from '~/Components/HomeCarousel'
import NewFeed from '~/Components/NewFeed'
import Newsletter from '~/Components/Newsletter'
import TopSellers from '~/Components/TopSellers/TopSellers'
import UpComingProduct from '~/Components/UpComingProduct'
import { useAppDispatch, useAppSelector } from '~/Redux/Hooks'
import { fetchListProduct } from '~/Redux/Product/Product.Slice'

const Home = () => {
  const dispatch = useAppDispatch()
  const products = useAppSelector<any[]>((state) => state.product.listProduct)
  const isLoading = useAppSelector<any>((state) => state.product.isLoading)

  useEffect(() => {
    dispatch(fetchListProduct())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <HomeCarousel />
      <Banner />
      <TopSellers />
      <BrandNewItems data={products} isLoading={isLoading}></BrandNewItems>
      <UpComingProduct />
      <NewFeed />
      <Newsletter />
    </>
  )
}

export default Home
