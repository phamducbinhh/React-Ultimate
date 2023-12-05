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
  priceData: any[]
}

const initialState: ProductState = {
  listProduct: [],
  isLoading: false,
  sortData: 'all',
  searchData: '',
  priceData: [0, 1000]
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
    },
    priceItem: (state, action) => {
      state.priceData = action.payload
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

export const { sortItem, searchItem, priceItem } = productSlice.actions

export default productSlice.reducer
