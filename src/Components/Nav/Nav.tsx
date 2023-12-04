import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import logo from './logo.png'
import { NavLink, Link } from 'react-router-dom'
import './Nav.css'
import ButtonApp from '../ButtonApp'

const Nav = () => {
  return (
    <>
      <nav className='nav'>
        <Container sx={{ maxWidth: { md: 1724 } }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid sx={{ alignItems: 'center' }} container spacing={2}>
              <Grid item md={2}>
                <Box>
                  <Link to='/'>
                    <img src={logo} alt='logo' />
                  </Link>
                </Box>
              </Grid>
              <Grid
                sx={{
                  display: {
                    xs: 'none',
                    md: 'block'
                  }
                }}
                item
                md={7}
              >
                <ul className='nav-list'>
                  <li>
                    <NavLink to='/'>Home</NavLink>
                  </li>
                  <li>
                    <NavLink to='/shop'>Shop</NavLink>
                  </li>
                  <li>
                    <NavLink to='/products'>Products</NavLink>
                  </li>
                  <li>
                    <NavLink to='/blogs'>Blog</NavLink>
                  </li>
                  <li>
                    <NavLink to='/contact'>Contact</NavLink>
                  </li>
                </ul>
              </Grid>
              <Grid
                sx={{
                  display: {
                    xs: 'none',
                    md: 'block'
                  }
                }}
                item
                md={3}
              >
                <Box className='header-right'>
                  <ul>
                    <li>
                      <a className='search-btn'>
                        <i className='fas fa-search'></i>
                      </a>
                    </li>
                    <li className='login-btn'>
                      <Link to={'/login'}>
                        <i className='far fa-user'></i>
                      </Link>
                    </li>
                    <li className='d-shop-cart'>
                      <Link to='/cart'>
                        <i className='fa-solid fa-cart-shopping'></i>
                        <span className='cart-count'>1</span>
                      </Link>

                      <ul className='minicart'>
                        <h2>Product Not Found</h2>
                        <li>
                          <div className='total-price'>
                            <span>Total:</span>
                            <span>0</span>
                          </div>
                        </li>
                        <li className='go-to-cart'>
                          <ButtonApp value='shopping cart' direction='/cart' classColor='orange-btn'></ButtonApp>
                        </li>
                        <li className='go-to-cart'>
                          <ButtonApp value='check out' direction='/checkout' classColor='green-btn'></ButtonApp>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </Box>
              </Grid>
              <Grid
                sx={{
                  display: {
                    xs: 'block',
                    md: 'none'
                  },
                  marginLeft: 'auto'
                }}
                item
                md={10}
              ></Grid>
            </Grid>
          </Box>
        </Container>
      </nav>
    </>
  )
}

export default Nav
