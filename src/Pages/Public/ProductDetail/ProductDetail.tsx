import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import FeatureTitle from '~/Components/FeatureTitle'
import Product, { ProductSkeleton } from '~/Components/Product/Product'
import ProductDetailItem from '~/Components/ProductDetailItem/ProductDetailItem'
import { useAppDispatch, useAppSelector } from '~/Redux/Hooks'
import { fetchListProduct, fetchListProductDetails } from '~/Redux/Product/Product.Slice'
import details from './pro-details.jpg'
import avatar from './user.png'
import './ProductDetail.css'

const ProductDetail: React.FC = () => {
  const route = useParams()
  const productID = Number(route.id)
  const dispatch = useAppDispatch()
  const item = useAppSelector<any>((state) => state.product.listProductDetails)
  const products = useAppSelector<any>((state) => state.product.listProduct)
  const [isLoading, setIsLoading] = useState(true)
  const [toggleState, setToggleState] = useState(1)

  useEffect(() => {
    const fetchData = async () => {
      try {
        await Promise.all([dispatch(fetchListProductDetails({ id: productID })), dispatch(fetchListProduct())])
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productID])

  // Get related product
  const data = productID < products.length && products.find((item: any) => item.id - 1 === productID)
  const relatedTo =
    productID < products.length &&
    products.filter((item: any) => item.category === data.category && item.id !== data.id)

  const toggleTab = (idx: number) => {
    setToggleState(idx)
  }

  return (
    <>
      <FeatureTitle title='Our Shop' page='Shop Details' />
      <>
        {(productID < products.length || isLoading) && (
          <>
            <ProductDetailItem item={item} isLoading={isLoading}></ProductDetailItem>

            <Box className='desc-review-text'>
              <Container>
                <ul className='product-nav'>
                  <li onClick={() => toggleTab(0)} className={toggleState === 0 ? 'nav-link active' : 'nav-link'}>
                    <span>Description</span>
                  </li>
                  <li onClick={() => toggleTab(1)} className={toggleState === 1 ? 'nav-link active' : 'nav-link'}>
                    <span>Reviews {item.comments ? `(${Object.values(item.comments).length})` : `(0)`}</span>
                  </li>
                </ul>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={4}>
                    <Grid item md={8} xs={12}>
                      <Box className='tab-content'>
                        <Box className={toggleState === 0 ? 'active disappear-text' : 'disappear-text'}>
                          <Box className='desc-text normal-text'>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                              sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                              est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                              doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
                              quasi architecto beatae vitae dicta sunt explicabo.
                            </p>
                            <p>
                              {' '}
                              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                              consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
                              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                              numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                            </p>
                          </Box>
                        </Box>
                        <Box className={toggleState === 1 ? 'active disappear-text' : 'disappear-text'}>
                          <Box className='desc-text'>
                            {item.comments ? (
                              Object.values(item.comments).map((item: any, idx: number) => {
                                return (
                                  <Box key={idx} className='product-commnets'>
                                    <Box className='product-commnets-list'>
                                      <div className='pro-comments-img'>
                                        <img src={avatar} alt='img' />
                                      </div>
                                      <Box className='pro-commnets-text'>
                                        <h4>
                                          {item.fullName} - <span>{item.date}</span>
                                        </h4>
                                        <p>{item.comment}</p>
                                      </Box>
                                    </Box>
                                  </Box>
                                )
                              })
                            ) : (
                              <p>There's no review yet</p>
                            )}
                            {/* {isEmptyUser && (
                              <h2>
                                {' '}
                                Please <Link to='/login'>login</Link> to comment this product post
                              </h2>
                            )}
                            {!isEmptyUser && <ProductComments></ProductComments>} */}
                          </Box>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item md={4} xs={12}>
                      <Box className='product-detail-banner'>
                        <img src={details} alt='detail' />
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Container>
            </Box>

            <Box className='related-products'>
              <Container>
                <Box className='newsfeed-wrapper'>
                  <Box sx={{ textAlign: 'center', marginBottom: '40px' }} className='area-title'>
                    <h2>Related Products</h2>
                    <p>Check it out every updates</p>
                  </Box>
                  <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                      {isLoading &&
                        Array(4)
                          .fill(0)
                          .map((_, index) => {
                            return (
                              <Grid item md={3} sm={6} xs={12} key={index}>
                                <ProductSkeleton />
                              </Grid>
                            )
                          })}
                      {!isLoading &&
                        relatedTo.slice(0, 4).map((relatedItem: any) => {
                          return (
                            <Grid key={relatedItem.id} item md={3} sm={6} xs={12}>
                              <Product
                                arr={products}
                                itemClick={relatedItem}
                                id={relatedItem.id}
                                image={relatedItem.image}
                                price={relatedItem.price}
                                title={relatedItem.title}
                                category={relatedItem.category}
                                hoverImage={relatedItem.hoverImage}
                                saleItem={relatedItem.salePrice}
                                newItem={relatedItem.newItem}
                                isLoading={isLoading}
                              ></Product>
                            </Grid>
                          )
                        })}
                    </Grid>
                  </Box>
                </Box>
              </Container>
            </Box>
          </>
        )}
        {productID >= products.length && (
          <Typography
            variant='h1'
            sx={{ fontSize: '40px', textAlign: 'center', paddingTop: '100px', paddingBottom: '80px' }}
          >
            Product Not Found
          </Typography>
        )}
      </>
    </>
  )
}

export default ProductDetail
