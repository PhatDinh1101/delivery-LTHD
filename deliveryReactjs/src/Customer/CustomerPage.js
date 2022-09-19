import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import '../static/CustomerPgae.css'
import OpptionCus from './OpptionCus'

function CustomerPage() {

  const user = useSelector(state => state.user.user)

  if(user.groups[0] == 1)
    return <Navigate to={'/'}/>

  return (
    <>  
        <div className='customer-page'>
            <div className='customer-page-center'>
                <Outlet/>
            </div>
            <div className='customer-page-option'>
                <OpptionCus/>
            </div>
        </div>  
    </>
  )
}

export default CustomerPage