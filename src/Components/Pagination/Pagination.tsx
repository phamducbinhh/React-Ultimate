import React, { useEffect, useState } from 'react'
import './Pagination.css'

interface PaginationProps {
  itemsPerPage: number
  total: number
  paginate: (pageNumber: number) => void
  currentProducts?: any[] // Thay any bằng kiểu dữ liệu thực tế của mảng currentProducts
}

const Pagination: React.FC<PaginationProps> = ({ itemsPerPage, total, paginate, currentProducts }) => {
  const [active, setActive] = useState(1)
  const pageNumbers: number[] = []

  // Tính toán tổng số trang dựa trên số lượng sản phẩm và số sản phẩm trên mỗi trang
  for (let i = 1; i <= Math.ceil(total / itemsPerPage); i++) {
    pageNumbers.push(i)
  }

  // Xử lý sự kiện khi click để chuyển trang và đánh dấu trang đang active
  const handleActive = (index: number) => {
    setActive(index)
  }

  // Kiểm tra nếu không có sản phẩm nào hoặc trang không tồn tại, quay về trang 1
  useEffect(() => {
    if (currentProducts === undefined || currentProducts.length === 0) {
      setActive(1)
    }
  }, [currentProducts])

  // Xử lý sự kiện khi click để chuyển đến trang trước đó
  const previousNumber = (active: number) => {
    if (active > 1) {
      setActive(active - 1)
      paginate(active - 1)
    }
  }

  // Xử lý sự kiện khi click để chuyển đến trang kế tiếp
  const nextNumber = (active: number) => {
    if (active <= pageNumbers.length - 1) {
      setActive(active + 1)
      paginate(active + 1)
    }
  }

  return (
    <ul className='pagination'>
      {/* Nút chuyển đến trang trước */}
      <li>
        <a onClick={() => previousNumber(active)} href='#!'>
          <i className='fal fa-angle-left'></i>
        </a>
      </li>

      {/* Hiển thị các nút trang */}
      {pageNumbers.map((number) => (
        <li key={number}>
          <a
            onClick={() => {
              paginate(number)
              handleActive(number)
            }}
            href='#!'
            className={active === number ? 'active' : undefined}
          >
            {number}
          </a>
        </li>
      ))}

      {/* Nút chuyển đến trang kế tiếp */}
      <li>
        <a onClick={() => nextNumber(active)} href='#!'>
          <i className='fal fa-angle-right'></i>
        </a>
      </li>
    </ul>
  )
}

export default Pagination
