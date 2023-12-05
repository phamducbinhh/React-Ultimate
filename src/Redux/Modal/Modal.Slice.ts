import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ModalState {
  modalData: any
  isOpen: boolean
}

const initialState: ModalState = {
  modalData: {},
  isOpen: false
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    getDataToModal: (state, action: PayloadAction<any>) => {
      state.modalData = action.payload
    },
    openModal: (state) => {
      state.isOpen = true
    },
    closeModal: (state) => {
      state.isOpen = false
    }
  }
})

export const { getDataToModal, openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer
