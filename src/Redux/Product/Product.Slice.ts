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

export const fetchListProductDetails = createAsyncThunk(
  'Blog/fetchListProductDetails',
  async (payload: any): Promise<any> => {
    try {
      const response = await ApiService.getOneProduct(payload.id)
      if (response) {
        return response
      }
    } catch (e: any) {
      console.error(e.message)
      throw e
    }
  }
)

interface ProductState {
  listProduct: any[]
  listProductDetails: any[]
  isLoading: boolean
  sortData: string
  searchData: string
  priceData: any[]
  brandingData: any[]
  sizeData: any[]
  categoriesData: any[]
}

const initialState: ProductState = {
  listProduct: [],
  listProductDetails: [],
  isLoading: false,
  sortData: 'all',
  searchData: '',
  priceData: [0, 1000],
  brandingData: [],
  sizeData: [],
  categoriesData: []
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
    },
    brandingItem: (state, action) => {
      state.brandingData = action.payload
    },
    sizeItem: (state, action) => {
      state.sizeData = action.payload
    },
    categoriesItem: (state, action) => {
      state.categoriesData = action.payload
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
      .addCase(fetchListProductDetails.fulfilled, (state, action) => {
        state.listProductDetails = action.payload
      })
  }
})

export const { sortItem, searchItem, priceItem, brandingItem, sizeItem, categoriesItem } = productSlice.actions

export default productSlice.reducer
