import Banner from '~/Components/Banner'
import HomeCarousel from '~/Components/HomeCarousel'
import TopSellers from '~/Components/TopSellers/TopSellers'

const Home = () => {
  return (
    <>
      <HomeCarousel />
      <Banner />
      <TopSellers />
    </>
  )
}

export default Home
