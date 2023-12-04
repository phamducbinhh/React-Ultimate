import Banner from '~/Components/Banner'
import HomeCarousel from '~/Components/HomeCarousel'
import Newsletter from '~/Components/Newsletter'
import TopSellers from '~/Components/TopSellers/TopSellers'
import UpComingProduct from '~/Components/UpComingProduct'
import ApiService from '~/Apis/api.public'
import { useEffect } from 'react'

const Home = () => {
  const actionGetListProductPages = async (): Promise<any> => {
    try {
      const response = await ApiService.getProducts()
      console.log('🚀 ~ file: Home.tsx:12 ~ actionGetListProductPages ~ response:', response)
    } catch (e: any) {
      console.error(e)
      throw e
    }
  }
  useEffect(() => {
    console.log(import.meta.env.VITE_APP_BASE_URL)
    actionGetListProductPages()
  }, [])
  return (
    <>
      <HomeCarousel />
      <Banner />
      <TopSellers />
      <UpComingProduct />
      <Newsletter />
    </>
  )
}

export default Home
