import './BannerImage.css'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BannerImage = (props: any) => {
  const { imgSrc } = props
  return (
    <div className='banner-image'>
      <img src={imgSrc} alt='banner-image' />
    </div>
  )
}

export default BannerImage
