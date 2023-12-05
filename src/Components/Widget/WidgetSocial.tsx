import Box from '@mui/material/Box'
import SocialMedia from '../SocialMedia'

const WidgetSocial = () => {
  return (
    <Box className='widget'>
      <Box className='widget-title-box'>
        <h3 className='widget-title'>Social Profile</h3>
      </Box>
      <SocialMedia typeColor='blue-background'></SocialMedia>
    </Box>
  )
}

export default WidgetSocial
