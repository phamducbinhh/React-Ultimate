import { configureStore } from '@reduxjs/toolkit'
import productReducer from './Product/Product.Slice'
import blogReducer from './Blogs/Blog.Slice'
export const store = configureStore({
  reducer: {
    product: productReducer,
    blog: blogReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
