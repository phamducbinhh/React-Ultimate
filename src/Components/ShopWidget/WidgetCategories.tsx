import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '~/Redux/Hooks'
import { categoriesItem } from '~/Redux/Product/Product.Slice'

const WidgetCategories: React.FC = () => {
  const dispatch = useAppDispatch()
  const items = useAppSelector<any[]>((state) => state.product.listProduct || [])
  const categoriesData = useAppSelector<any[]>((state) => state.product.categoriesData || [])

  const [uniqueCategories, setUniqueCategories] = useState<any[]>([])

  useEffect(() => {
    // Remove Duplicate Properties
    const arrayValue: any[] = []
    const getAllValueByProperties = Object.values(
      items.reduce((acc, cur) => Object.assign(acc, { [cur.category]: cur }), {})
    )
    let newArray = getAllValueByProperties.filter((item: any) => arrayValue.push(item.category))
    // Convert 2D to 1D array if it has subarray inside
    const get1DArray = (arr: string[][]): string[] => {
      return arr.join().split(',')
    }
    // Remove duplicate item in 1D array
    newArray = get1DArray(arrayValue).filter(function (elem, index, self) {
      return index === self.indexOf(elem)
    })
    newArray = newArray.sort((a: any, b: any) => a.localeCompare(b))
    setUniqueCategories(newArray)
  }, [items])

  // Get Value From Input Checkbox
  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    let updatedList = [...categoriesData]
    if (event.target.checked) {
      updatedList = [...categoriesData, event.target.value]
    } else {
      updatedList.splice(categoriesData.indexOf(event.target.value), 1)
    }
    dispatch(categoriesItem(updatedList))
  }

  return (
    <div className='widget'>
      <h3 className='shop-title'>Product Size</h3>
      {uniqueCategories.length > 0 &&
        uniqueCategories.map((item, index) => {
          return (
            <div className='checkbox-widget' key={index}>
              <input
                checked={categoriesData.indexOf(item) >= 0}
                onChange={handleCheck}
                type='checkbox'
                id={item}
                name={item}
                value={item}
              />
              <label htmlFor={item}> {item}</label>
            </div>
          )
        })}
    </div>
  )
}

export default WidgetCategories
