import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Api, { endpoints } from '../configs/Api'
import '../static/CommentCard.css'


const CommentCard = () => {

  return (
      <>
      <div className='comment-card'>
        <div className='opption-item'>
          <Link to={"profile"}>Trang cá nhân</Link>
        </div>
        <div className='opption-item'>
          <Link to={"/shipper/:id"}>Tìm đơn mới</Link>
        </div>
        <div className='opption-item'>
          <Link to={"orderAution"}>Đơn đang đấu giá</Link>
        </div>
        <div className='opption-item'>
          <Link to={"orderDelivering"}>Đơn đang Giao</Link>
        </div>
        <div className='opption-item'>
          <Link to={"orderDelivered"}>Các đơn đã giao</Link>
        </div>
      </div>
      </>
  )
}

export default CommentCard



// 
//             </div>
//           </div> 
//     </div>
//   </div>
// })}