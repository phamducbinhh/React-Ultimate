import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import './ShopWidget.css'
import { priceItem } from '~/Redux/Product/Product.Slice'
import { useAppDispatch, useAppSelector } from '~/Redux/Hooks'

const WidgetPrice: React.FC = () => {
  const dispatch = useAppDispatch()
  const valueRange = useAppSelector<number[]>((state) => state.product.priceData)
  const [value, setValue] = useState<number[]>(valueRange)

  const handlePrice = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[])
    const action = priceItem(newValue as number[])
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
