import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import ApiService from '~/Apis/api.public'

export const fetchListProduct = createAsyncThunk('product/fetchListProduct', async (): Promise<any> => {
  try {
    const response = await ApiService.getProducts()
    if (response) {
      return response
    }
  } catch (e: any) {
    console.error(e.message)
    throw e
  }
})

interface ProductState {
  listProduct: any[]
  isLoading: boolean
  sortData: string
  searchData: string
}

const initialState: ProductState = {
  listProduct: [],
  isLoading: false,
  sortData: 'all',
  searchData: ''
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    sortItem: (state, action) => {
      state.sortData = action.payload
    },
    searchItem(state, action) {
      state.searchData = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchListProduct.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchListProduct.fulfilled, (state, action) => {
        state.listProduct = action.payload
        state.isLoading = false
      })
      .addCase(fetchListProduct.rejected, (state) => {
        state.isLoading = false
      })
  }
})

export const { sortItem, searchItem } = productSlice.actions

export default productSlice.reducer
