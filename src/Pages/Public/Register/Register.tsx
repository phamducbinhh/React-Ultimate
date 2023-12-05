import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import FeatureTitle from '~/Components/FeatureTitle'
import './Register.css'
import ButtonApp from '~/Components/ButtonApp'
import React from 'react'

const Register: React.FC = () => {
  return (
    <>
      <FeatureTitle title='Login' page='Login' />
      <Box className='form-area'>
        <Container>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container justifyContent='center'>
              <Grid item md={9} xs={12}>
                <Box className='basic-login'>
                  <h3>Signup From Here</h3>
                  <form>
                    <Box className='text-field'>
                      <label htmlFor='fullname'>
                        Full Name <span className='required'>*</span>
                      </label>
                      <input type='text' placeholder='Enter fullname...'></input>
                    </Box>
                    <Box className='text-field'>
                      <label htmlFor='username'>
                        Username <span className='required'>*</span>
                      </label>
                      <input type='text' placeholder='Enter username...'></input>
                    </Box>
                    <Box className='text-field'>
                      <label htmlFor='email'>
                        Email <span className='required'>*</span>
                      </label>
                      <input type='text' placeholder='Enter email...'></input>
                    </Box>
                    <Box className='text-field'>
                      <label htmlFor='password'>
                        Password <span className='required'>*</span>
                      </label>
                      <input type='password' placeholder='Enter password...'></input>
                    </Box>
                    <Box className='text-field'>
                      <label htmlFor='confirmPassword'>
                        Confirm Password <span className='required'>*</span>
                      </label>
                      <input type='password' placeholder='Enter confirm password...'></input>
                    </Box>
                    <button type='submit' className='btn-app green-btn'>
                      Register
                    </button>
                    <div className='or-divide'>
                      <span>or</span>
                    </div>
                    <ButtonApp classColor='orange-btn' value='Login' direction='/login'></ButtonApp>
                  </form>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default Register
