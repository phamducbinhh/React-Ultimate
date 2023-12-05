import { Box, Container, Grid } from '@mui/material'
import { useEffect } from 'react'
import FeatureTitle from '~/Components/FeatureTitle'
import ShopArea from '~/Components/ShopArea'
import { useAppDispatch, useAppSelector } from '~/Redux/Hooks'
import { fetchListProduct } from '~/Redux/Product/Product.Slice'

const Shop = () => {
  const dispatch = useAppDispatch()
  const items = useAppSelector<any[]>((state) => state.product.listProduct)
  const isLoading = useAppSelector<any>((state) => state.product.isLoading)

  const settings = {
    gridView: 6
  }

  useEffect(() => {
    dispatch(fetchListProduct())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <FeatureTitle title='Our Shop' page='Shop' />
      <Box className='shop-layout' sx={{ padding: '100px 0' }}>
        <Container sx={{ maxWidth: { md: 1200 } }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{
                xs: 0,
                md: 3
              }}
            >
              <Grid item md={8} xs={12}>
                <ShopArea data={items} settings={settings} isLoading={isLoading} />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default Shop
