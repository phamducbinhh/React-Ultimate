import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import ApiService from '~/Apis/api.public'

export const fetchListBlog = createAsyncThunk('Blog/fetchListBlog', async (): Promise<any> => {
  try {
    const response = await ApiService.getBlogs()
    if (response) {
      return response
    }
  } catch (e: any) {
    console.error(e.message)
    throw e
  }
})

interface BlogState {
  listBlog: any[]
  isLoading: boolean
}

const initialState: BlogState = {
  listBlog: [],
  isLoading: false
}

export const blogSlice = createSlice({
  name: 'Blog',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchListBlog.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchListBlog.fulfilled, (state, action) => {
        state.listBlog = action.payload
        state.isLoading = false
      })
      .addCase(fetchListBlog.rejected, (state) => {
        state.isLoading = false
      })
  }
})

export default blogSlice.reducer
