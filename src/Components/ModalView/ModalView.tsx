import { useEffect, useState } from 'react'
import './ModalView.css'
import { useAppDispatch } from '~/Redux/Hooks'
import { closeModal } from '~/Redux/Modal/Modal.Slice'
import ProductDetailItem from '../ProductDetailItem/ProductDetailItem'

const ModalView = ({ item, toggleModal }: any) => {
  const dispatch = useAppDispatch()
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }, [])

  const handleCloseModal = () => {
    const html: any = document.querySelector('html')
    const action = closeModal()
    dispatch(action)
    html.classList.remove('prevent-scroll')
  }

  return (
    <>
      <div onClick={() => handleCloseModal()} className='modal-background'></div>
      <div className={toggleModal ? 'modal-product fade' : 'modal-product'}>
        <div className='modal-dialog'>
          {item && (
            <div className='modal-content'>
              <ProductDetailItem item={item} isLoading={isLoading}></ProductDetailItem>
              <i onClick={() => handleCloseModal()} className='fa fa-times modal-icon'></i>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default ModalView
