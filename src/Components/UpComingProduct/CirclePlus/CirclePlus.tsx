import './CirclePlus.css'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CirclePlus = (props: any) => {
  const { circleNumber } = props
  return (
    <div className={`circle-plus ${circleNumber}`}>
      <div className='circle-icon'>
        <i className='fal fa-plus'></i>
      </div>
      <div className='circle-text'>
        <p>Lodge Flush Mount</p>
      </div>
    </div>
  )
}

export default CirclePlus
