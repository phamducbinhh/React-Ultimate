import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

// Định nghĩa một slice Redux cho giỏ hàng
export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    // Lấy các sản phẩm trong giỏ hàng từ localStorage, mặc định là một mảng rỗng nếu không có
    cartItems: localStorage.getItem('AddToCart') ? JSON.parse(localStorage.getItem('AddToCart') as string) : [],
    total: 0, // Khởi tạo tổng số lượng
    totalPriceProducts: localStorage.getItem('TotalAmount')
      ? JSON.parse(localStorage.getItem('TotalAmount') as string)
      : 0 // Khởi tạo tổng giá
  },
  reducers: {
    // Hành động để thêm một sản phẩm vào giỏ hàng
    addToCart: (state, action) => {
      const newItem = action.payload
      // Kiểm tra nếu sản phẩm đã có trong giỏ hàng
      const index = state.cartItems.findIndex((x: any) => x.id === newItem.id)
      if (index >= 0) {
        // Nếu có, cập nhật số lượng
        state.cartItems[index].quantity += newItem.quantity
      } else {
        // Nếu không, thêm sản phẩm vào giỏ hàng
        state.cartItems.push(newItem)
      }
      // Hiển thị toast thành công
      toast.success(`Thêm sản phẩm vào giỏ hàng`, {
        position: 'top-left',
        theme: 'colored',
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      })
      // Cập nhật localStorage với các sản phẩm trong giỏ hàng
      localStorage.setItem('AddToCart', JSON.stringify(state.cartItems))
      localStorage.setItem('TotalAmountProduct', JSON.stringify(state.totalPriceProducts))
    },
    // Hành động để đặt tổng số lượng trong giỏ hàng
    setTotal: (state) => {
      state.total = state.cartItems.reduce((count: number, item: any) => count + item.quantity, 0)
      // Cập nhật localStorage với các sản phẩm trong giỏ hàng
      localStorage.setItem('AddToCart', JSON.stringify(state.cartItems))
    },
    // Hành động để đặt tổng giá của các sản phẩm trong giỏ hàng
    setTotalPrice: (state) => {
      state.totalPriceProducts = state.cartItems.reduce((count: number, item: any) => count + item.totalPrice, 0)
      // Cập nhật localStorage với các sản phẩm trong giỏ hàng và tổng giá
      localStorage.setItem('AddToCart', JSON.stringify(state.cartItems))
      localStorage.setItem('TotalAmountProduct', JSON.stringify(state.totalPriceProducts))
    },
    // Hành động để giảm số lượng của một sản phẩm trong giỏ hàng đi một
    decreaseByOne: (state, action) => {
      const newItem = action.payload
      const index = state.cartItems.findIndex((x: any) => x.id === newItem.id)
      if (state.cartItems[index].quantity > 1) {
        state.cartItems[index].quantity -= 1
        // Cập nhật totalPrice cho sản phẩm
        state.cartItems[index].totalPrice = state.cartItems[index].product.sale
          ? state.cartItems[index].quantity * state.cartItems[index].product.salePrice
          : state.cartItems[index].quantity * state.cartItems[index].product.price
        // Hiển thị toast lỗi
        toast.error(`Giảm 1 sản phẩm`, {
          position: 'top-left',
          theme: 'colored',
          autoClose: 2500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        })
      }
      // Cập nhật localStorage với các sản phẩm trong giỏ hàng và tổng giá
      localStorage.setItem('AddToCart', JSON.stringify(state.cartItems))
      localStorage.setItem('TotalAmountProduct', JSON.stringify(state.totalPriceProducts))
    },
    // Hành động để tăng số lượng của một sản phẩm trong giỏ hàng lên một
    increaseByOne: (state, action) => {
      const newItem = action.payload
      const index = state.cartItems.findIndex((x: any) => x.id === newItem.id)
      if (index >= 0) {
        state.cartItems[index].quantity += 1
        // Cập nhật totalPrice cho sản phẩm
        state.cartItems[index].totalPrice = state.cartItems[index].product.sale
          ? state.cartItems[index].quantity * state.cartItems[index].product.salePrice
          : state.cartItems[index].quantity * state.cartItems[index].product.price
      } else {
        // Nếu sản phẩm không có trong giỏ hàng, thêm nó với số lượng là 1
        const addOneProduct = {
          id: newItem.id,
          product: { ...newItem },
          quantity: 1,
          totalPrice: newItem.sale ? newItem.salePrice : newItem.price
        }
        state.cartItems.push(addOneProduct)
      }
      // Hiển thị toast thành công
      toast.success(`Thêm 1 sản phẩm`, {
        position: 'top-left',
        theme: 'colored',
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      })
      // Cập nhật localStorage với các sản phẩm trong giỏ hàng và tổng giá
      localStorage.setItem('AddToCart', JSON.stringify(state.cartItems))
      localStorage.setItem('TotalAmountProduct', JSON.stringify(state.totalPriceProducts))
    },
    // Hành động để xóa một sản phẩm khỏi giỏ hàng
    removeItem: (state, action) => {
      const newItem = action.payload
      const index = state.cartItems.findIndex((x: any) => x.id === newItem.id)

      const filterItem = state.cartItems.filter((item: any) => item.id !== newItem.id)

      if (index >= 0) {
        // Giảm totalPrice khi xóa một sản phẩm
        state.totalPriceProducts -= state.cartItems[index].totalPrice
        // Cập nhật localStorage với giá mới
        localStorage.setItem('TotalAmountProduct', JSON.stringify(state.totalPriceProducts))
      }
      // Cập nhật cartItems để loại bỏ sản phẩm
      state.cartItems = filterItem
      // Hiển thị toast lỗi
      toast.error(`Xóa sản phẩm`, {
        position: 'top-left',
        theme: 'colored',
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      })
      // Cập nhật localStorage với cartItems mới
      localStorage.setItem('AddToCart', JSON.stringify(state.cartItems))
    }
  }
})

// Xuất các hành động được tạo ra bởi createSlice
export const { addToCart, setTotal, setTotalPrice, decreaseByOne, increaseByOne, removeItem } = cartSlice.actions

// Xuất reducer được tạo ra bởi createSlice
export default cartSlice.reducer
