import './UpComingItem.css'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const UpComingItem = (props: any) => {
  const { firstText, secondText } = props
  return (
    <div className='upcoming-item'>
      <i className='fal fa-layer-group'></i>
      <div>
        <h4>{firstText}</h4>
        <span>{secondText}</span>
      </div>
    </div>
  )
}

export default UpComingItem
