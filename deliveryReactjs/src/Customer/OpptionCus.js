import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../static/OpptionCus.css'

const OpptionCus = () => {
  return (
    // <div className='opption-cus'>
        <>
      <div className='comment-card'>
        <div className='opption-item'>
          <Link to={"create-order"}>Tạo đơn hàng mới</Link>
        </div>
        <div className='opption-item'>
          <Link to={"/customer/:id"}>Đơn hàng đang đấu giá</Link>
        </div>
        <div className='opption-item'>
          <Link to={"/customer/:id/all"}>Tất Cả đơn hàng</Link>
        </div>
        <div className='opption-item'>
          <Link to={"/customer/:id/delivering"}>Đơn đang giao</Link>
        </div>
        <div className='opption-item'>
          <Link to={"/customer/:id/delivered"}>Đơn Đã Giao</Link>
        </div>
        
      </div>
      
      </>
    // </div>
  )
}

export default OpptionCus