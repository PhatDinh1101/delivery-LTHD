import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Api, { endpoints } from '../configs/Api'

const OrderAutionShipper = () => {

    const [order, setOrder] = useState([])
    const user = useSelector(state => state.user.user)


    useEffect(() => {
        const loadOrder = async () => {
            let res = await Api.get(endpoints["shipper-aution"](user.id))
            console.log(res.data)
            setOrder(res.data)
        }
        loadOrder()
    }, [])

  return (
    <>
        <span>Các đơn đang đấu giá:</span>
        <ul>
            {order.map((o)=>{
                if (o.status == 1)
                    return <li>
                        <Link to={`/shipper/:id/order/${o.order}/order`}>{o.order_name}</Link>
                        <span style={{marginLeft: "30px"}}>   Đã đấu giá:  {o.price} đồng</span>
                    </li>
            })}
        </ul>
    </>
  )
}

export default OrderAutionShipper