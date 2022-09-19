import React from 'react'
import { useSelector } from 'react-redux'
import '../static/ShipperCard.css'

const ShipperCard = () => {

  const user = useSelector(state => state.user.user)

  const getImage = () => {
    let image
    image = user.avatar.slice(0, 22) + "static" + user.avatar.slice(21)
    return image
}

  return (
      <>
      <div className='shipper-card'>
        <div className='shipper-card-avatar'>
          {user.avatar != null
          ? <img src={getImage()}></img>
          : <img src='/avt.png'></img>}
        </div>
        <div>
          <span>Shipper: {user.first_name} {user.last_name}</span>
        </div>
        <div>
          <span>sdt: {user.phone}</span>
        </div>
        <div>
          <span>Doanh thu: {user.cash}</span>
        </div>
      </div>
      </>
  )
}

export default ShipperCard