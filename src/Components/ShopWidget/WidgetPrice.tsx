import { useState } from 'react'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'

import './ShopWidget.css'
import { useAppDispatch, useAppSelector } from '~/Redux/Hooks'
import { priceItem } from '~/Redux/Product/Product.Slice'

const WidgetPrice = () => {
  const dispatch = useAppDispatch()
  const valueRange = useAppSelector((state) => state.product.priceData)
  const [value, setValue] = useState(valueRange)

  const handlePrice = (newValue: any) => {
    setValue(newValue)
    const action = priceItem(newValue)
    dispatch(action)
  }
  return (
    <div className='slider-widget widget'>
      <h3 className='shop-title'>Filter selection</h3>
      <Box>
        <Slider
          className='price-range'
          min={0}
          max={1000}
          value={value}
          onChange={handlePrice}
          valueLabelDisplay='auto'
        />
        <span>${value[0]} - </span>
        <span>${value[1]}</span>
      </Box>
    </div>
  )
}

export default WidgetPrice
