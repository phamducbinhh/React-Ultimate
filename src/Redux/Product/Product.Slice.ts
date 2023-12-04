import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import ApiService from '~/Apis/api.public'

export const fetchListProduct = createAsyncThunk('product/fetchListProduct', async (): Promise<any> => {
  try {
    const response = await ApiService.getProducts()
    return response
  } catch (e: any) {
    console.error(e.message)
    throw e
  }
})

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    listProduct: [],
    isLoading: false,
    sortData: 'all'
  },
  reducers: {
    sortItem: (state, action) => {
      state.sortData = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchListProduct.fulfilled, (state, action) => {
      state.listProduct = action.payload
    })
  }
})

export const { sortItem } = productSlice.actions

export default productSlice.reducer
