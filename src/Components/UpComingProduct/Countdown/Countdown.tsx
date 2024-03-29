import './Countdown.css'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Countdown = (props: any) => {
  const { timerDays, timerHours, timerMinutes, timerSeconds } = props
  return (
    <div className='countdown'>
      <span className='countdown-item'>
        <span>{timerDays}</span>
        <p>Days</p>
      </span>
      <span className='countdown-item'>
        <span>{timerHours}</span>
        <p>Hours</p>
      </span>
      <span className='countdown-item'>
        <span>{timerMinutes}</span>
        <p>Minutes</p>
      </span>
      <span className='countdown-item'>
        <span>{timerSeconds}</span>
        <p>Seconds</p>
      </span>
    </div>
  )
}
export default Countdown
