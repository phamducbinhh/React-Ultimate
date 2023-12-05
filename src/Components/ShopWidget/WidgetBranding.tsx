import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '~/Redux/Hooks'
import { brandingItem } from '~/Redux/Product/Product.Slice'

const WidgetBranding: React.FC = () => {
  const dispatch = useAppDispatch()
  const items = useAppSelector<any[]>((state) => state.product.listProduct || [])
  const brandingData = useAppSelector<any[]>((state) => state.product.brandingData || [])
  const [uniqueBrands, setUniqueBrands] = useState<any[]>([])

  useEffect(() => {
    // Remove Duplicate Properties
    const arrayValue: any[] = []
    const getAllValueByProperties = Object.values(
      items.reduce((acc, cur) => Object.assign(acc, { [cur.branding]: cur }), {})
    )
    let newArray = getAllValueByProperties.filter((item: any) => arrayValue.push(item.branding))
    // Convert 2D to 1D array if it has subarray inside
    const get1DArray = (arr: string[][]): string[] => {
      return arr.join().split(',')
    }
    // Remove duplicate item in 1D array
    newArray = get1DArray(arrayValue).filter(function (elem, index, self) {
      return index === self.indexOf(elem)
    })
    newArray = newArray.sort((a: any, b: any) => a.localeCompare(b))
    setUniqueBrands(newArray)
  }, [items])

  // Get Value From Input Checkbox
  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    let updatedList = [...brandingData]
    if (event.target.checked) {
      updatedList = [...brandingData, event.target.value]
    } else {
      updatedList.splice(brandingData.indexOf(event.target.value), 1)
    }
    dispatch(brandingItem(updatedList))
  }

  return (
    <div className='widget'>
      <h3 className='shop-title'>Branding</h3>
      {uniqueBrands.length > 0 &&
        uniqueBrands.map((item, index) => {
          return (
            <div className='checkbox-widget' key={index}>
              <input
                checked={brandingData.indexOf(item) >= 0}
                className='branding-radio'
                onChange={(e) => handleCheck(e)}
                type='checkbox'
                id={item}
                name='test'
                value={item}
              />
              <label htmlFor={item}> {item}</label>
            </div>
          )
        })}
    </div>
  )
}

export default WidgetBranding
