import Banner from '~/Components/Banner'
import HomeCarousel from '~/Components/HomeCarousel'
import TopSellers from '~/Components/TopSellers/TopSellers'
import UpComingProduct from '~/Components/UpComingProduct'

const Home = () => {
  return (
    <>
      <HomeCarousel />
      <Banner />
      <TopSellers />
      <UpComingProduct />
    </>
  )
}

export default Home
