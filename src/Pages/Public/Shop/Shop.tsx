import { Box, Container, Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import FeatureTitle from '~/Components/FeatureTitle'
import ShopArea from '~/Components/ShopArea'
import WidgetSearch from '~/Components/ShopWidget/WidgetSearch'
import { useAppDispatch, useAppSelector } from '~/Redux/Hooks'
import { fetchListProduct } from '~/Redux/Product/Product.Slice'

const Shop = () => {
  const dispatch = useAppDispatch()
  const items = useAppSelector<any[]>((state) => state.product.listProduct)
  const [filteredItems, setFilteredItems] = useState<any[]>(items)
  const isLoading = useAppSelector<any>((state) => state.product.isLoading)
  const search = useAppSelector((state) => state.product.searchData)

  const settings = {
    gridView: 6
  }

  useEffect(() => {
    dispatch(fetchListProduct())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    //Search Item
    if (search.trim() === '') {
      setFilteredItems(items)
    } else {
      const updatedItems = items.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
      setFilteredItems(updatedItems)
    }
  }, [search, items])

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
                <ShopArea data={filteredItems} settings={settings} isLoading={isLoading} />
              </Grid>
              <Grid
                item
                md={4}
                xs={12}
                sx={{
                  marginTop: {
                    xs: '50px',
                    md: '0px'
                  }
                }}
              >
                <Box className='shop-widget'>
                  <WidgetSearch />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default Shop
