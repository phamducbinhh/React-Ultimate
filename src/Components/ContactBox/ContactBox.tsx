import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import './ContactBox.css'

const ContactBox = ({ icon, heading, firstText, secondText }: any) => {
  return (
    <Grid item md={4} xs={12}>
      <Box className='contact-box'>
        <i className={icon}></i>
        <h3>{heading}</h3>
        <p>{firstText}</p>
        {secondText ? <p>{secondText}</p> : null}
      </Box>
    </Grid>
  )
}

export default ContactBox
