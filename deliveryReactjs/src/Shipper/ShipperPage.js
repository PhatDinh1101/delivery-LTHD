import React, { useState } from 'react'
import ShipperCard from './ShipperCard'
import Product from './Product'
import CommentCard from './CommentCard'
import '../static/ShipperPage.css'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ShipperPage = () => {

  const user = useSelector(state => state.user.user)
  const [opption, setopption] = useState("")


  const changeOpption = (o) => {
    setopption(o)
  }

  if(user.groups[0] == 2)
    return <Navigate to={'/'}/>

  return (
    <>
      <div className='shipper-page'>
        <div className='shipper-page-left'>
          <ShipperCard/>
        </div>
        <div className='shipper-page-center'>
          <Outlet/>
        </div>
        <div className='shipper-page-right'>
          <CommentCard/>
        </div>
      </div>
    </>
  )
}

export default ShipperPage