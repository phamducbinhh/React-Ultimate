import './AppHeading.css'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AppHeading = (props: any) => {
  const { headingText } = props
  return (
    <div className='app-heading'>
      <h2>{headingText}</h2>
      <p>Browse the huge variety of our products</p>
    </div>
  )
}

export default AppHeading
