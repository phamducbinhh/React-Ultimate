import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import ApiService from '~/Apis/api.public'

export const FetchListProduct = createAsyncThunk('product/fetchListProduct', async (): Promise<any> => {
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
    listProduct: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(FetchListProduct.fulfilled, (state, action) => {
      state.listProduct = action.payload
    })
  }
})

export default productSlice.reducer
