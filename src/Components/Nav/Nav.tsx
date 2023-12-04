import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import logo from './logo.png'
import { NavLink, Link } from 'react-router-dom'
import './Nav.css'

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
                      {/* <Link to={!isEmptyUser ? `/` : '/login'}>
                        <i className='far fa-user'></i> <span className={!isEmptyUser ? `cart-count` : ''}></span>{' '}
                      </Link>
                      {!isEmptyUser > 0 && (
                        <ul className='minicart'>
                          <h2>Welcome, {currentUser.fullName}</h2>
                          <li className='total-price log-out'>
                            <span onClick={() => logOut()} className='btn-app orange-btn'>
                              Log out
                            </span>
                          </li>
                        </ul>
                      )} */}
                    </li>
                    <li className='d-shop-cart'>
                      <Link to='/cart'>
                        <i className='far fa-shopping-cart'></i>
                        <span className='cart-count'>1</span>
                      </Link>

                      {/* <ul className='minicart'>
                        {totalCart > 0 ? (
                          cart.map((item, index) => {
                            return (
                              <li key={index}>
                                <div className='cart-img'>
                                  <Link to={`/details/${item.id - 1}`}>
                                    <img src={item.product.image} alt='Cart' />
                                  </Link>
                                </div>
                                <div className='cart-content'>
                                  <h3>
                                    <Link to={`/details/${item.id - 1}`}>{item.product.title}</Link>
                                  </h3>
                                  <div className='cart-price'>
                                    <span className='new'>
                                      ${item.product.sale ? item.product.salePrice : item.product.price} *{' '}
                                      {item.quantity}
                                    </span>{' '}
                                    = <span className='new ml-1 '>${item.totalPrice}</span>
                                  </div>
                                </div>
                                <div className='del-icon'>
                                  <span>
                                    <i className='far fa-trash-alt'></i>
                                  </span>
                                </div>
                              </li>
                            )
                          })
                        ) : (
                          <h2>Product Not Found</h2>
                        )}
                        <li>
                          <div className='total-price'>
                            <span>Total:</span>
                            <span>${totalPrice.toFixed(2)}</span>
                          </div>
                        </li>
                        <li className='go-to-cart'>
                          <ButtonApp value='shopping cart' direction='/cart' classColor='orange-btn'></ButtonApp>
                        </li>
                        <li className='go-to-cart'>
                          <ButtonApp value='check out' direction='/checkout' classColor='green-btn'></ButtonApp>
                        </li>
                      </ul> */}
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
              >
                <Box className='mobile-btn header-right'>
                  <ul>
                    {/* <li className='login-btn'>
                      <Link to={!isEmptyUser ? `/` : '/login'}>
                        <i className='far fa-user'></i> <span className={!isEmptyUser ? `cart-count` : ''}></span>{' '}
                      </Link>
                      {!isEmptyUser > 0 && (
                        <ul className='minicart'>
                          <h2>Welcome, {currentUser.fullName}</h2>
                          <li className='total-price log-out'>
                            <span onClick={() => logOut()} className='btn-app orange-btn'>
                              Log out
                            </span>
                          </li>
                        </ul>
                      )}
                    </li> */}
                    <li>
                      <i className='fas fa-bars hamburger-bars'></i>
                    </li>
                  </ul>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </nav>
    </>
  )
}

export default Nav
