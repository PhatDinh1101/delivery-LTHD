import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Api, { endpoints } from '../configs/Api'
import "../static/OrderDetail.css"

const OrderDetail = ({status}) => {
    const {orderID} = useParams()
    console.log(orderID)
    const user = useSelector(state => state.user.user)
    const [order, setOrder] = useState([])
    const [autionList, setAutionList] = useState([])
    const [shipper, setShipper] = useState([])
    const nav = useNavigate()

    useEffect(() => {
        const loadOrder = async () => {
            let res = await Api.get(endpoints["order"](orderID))
            console.log(res.data)
            setOrder(res.data)
        }
        
        const loadShipperAution = async () => {
            let res = await Api.get(endpoints['order-aution'](orderID))
            setAutionList(res.data)
            console.log(res.data)
        }

        const loadShipperReive = async () => {
            let res = await Api.get(endpoints['shipperReceive'](orderID))
            setShipper(res.data)
            console.log(res.data)
        }

        loadOrder()
        loadShipperAution()
        loadShipperReive()
    }, [])

    const getImage = () => {
        let image
        image = order.image.slice(0, 22) + "static" + order.image.slice(21)
        return image
    }

    const setStatus = async (index) => {
        let res = await Api.patch(endpoints['order-patch'](order.order.id),
        {
        
            "status": 2
            
        }
        )
        let receive =await Api.post(endpoints['receive'],{
            "order": order.order.id,
            "active": true,
            "price": autionList[index].price,
            "shipper": autionList[index].shipper
        })

        console.log(res.data)

        alert("Chọn thành công đã chuyển đơn qua mục đang giao")
        nav("/customer/:id")
    }

    return (
        <>
            <div className='order-image'>
                <img src={order.length != 0 ? getImage() : "#"}></img>
            </div>
            <div className='order-name'>{order.length != 0 ? order.order.order_name: "#"}</div>
            <br/>
            {
                status == 1 
                ?
                <div>
                    <span style={{fontSize: "20px", fontWeight: "bold"}}>Danh sách shipper đang đấu giá:</span>
                    <ul>
                        {autionList.map((a, index) => {
                            return <li style={{marginBottom: "20px"}}>
                            Tên shipper: <Link to={`/shipper_profile/${a.shipper}`}>{a.shipper_first_name} {a.shipper_last_name}</Link>
                            <span style={{marginLeft: "30px"}}>Giá đưa ra: {a.price}</span>
                            <span className='choice-shipper' onClick={() => {setStatus(index)}}>chọn shipper này</span>
                        </li>
                        })}
                    </ul>
                </div>
                :
                <div>
                     <span style={{fontSize: "20px", fontWeight: "bold"}}>Shipper Nhận đơn</span>
                     <ul>{shipper &&<li>
                            Tên shipper: <Link to={`/shipper_profile/${shipper.shipper}`}>{shipper.shipper_first_name} {shipper.shipper_last_name}</Link>
                            <span style={{marginLeft: "30px"}}>Giá đơn: {shipper.price}</span>
                         </li>
                        }
                     </ul>
                </div>
            }
        </>
    )
}

export default OrderDetail