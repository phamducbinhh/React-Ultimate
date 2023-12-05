import './FeatureTitle.css'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { Link } from 'react-router-dom'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FeatureTitle = ({ title, page }: any) => {
  return (
    <div className='feature-title'>
      <Container sx={{ maxWidth: { md: 1755 } }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid sx={{ alignItems: 'center' }} container spacing={2}>
            <Grid item xs={12}>
              <Box>
                <div className='breadcrumb-text'>
                  <h1>{title}</h1>
                  <ul className='breadcrumb-menu'>
                    <li>
                      <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                      <span>{page}</span>
                    </li>
                  </ul>
                </div>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  )
}

export default FeatureTitle
