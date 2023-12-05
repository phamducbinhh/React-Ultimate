import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from '~/Redux/Hooks'
import { searchItem } from '~/Redux/Product/Product.Slice'

interface FormData {
  searchData: string
}

const WidgetSearch: React.FC = () => {
  const dispatch = useAppDispatch()
  const search = useAppSelector((state) => state.product.searchData)
  const { register, handleSubmit } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const action = searchItem(data.searchData)
    dispatch(action)
  }

  return (
    <div className='search-widget widget'>
      <h3 className='shop-title'>Search by</h3>
      <form onSubmit={handleSubmit(onSubmit)} className='shop-search'>
        <input defaultValue={search} placeholder='Your keyword...' type='text' {...register('searchData')} />
        <button type='submit'>
          <i className='fa fa-search'></i>
        </button>
      </form>
    </div>
  )
}

export default WidgetSearch
