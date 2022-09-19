import userEvent from '@testing-library/user-event'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Api, { endpoints } from '../configs/Api'
import "../static/Order.css"

const Order = () => {

    const {orderId} = useParams()
    console.log(orderId)
    const user = useSelector(state => state.user.user)
    const [order, setOrder] = useState([])
    const [price, setPrice] = useState("")

    useEffect(() => {
        const loadOrder = async () => {
            let res = await Api.get(endpoints["order"](orderId))
            console.log(res.data)
            setOrder(res.data)
        } 

        loadOrder()
    }, [])

    const getImage = () => {
        let image
        image = order.image.slice(0, 22) + "static" + order.image.slice(21)
        return image
    }

    const aution = async (e) => {
        e.preventDefault();
        let res = await Api.post(endpoints["aution"],{
            "order": orderId,
            "shipper": user.id,
            "price": price
        })

        console.log(res.data)
        alert("Đấu Giá thành công")
    }

    return (
        <>
            <div className='order-image'>
                <img src={order.length != 0 ? getImage() : "#"}></img>
            </div>
            <div className='order-name'>{order.length != 0 ? order.order.order_name: "#"}</div>
            <Form onSubmit={aution}>
            <Form.Group className="mb-3">
                <Form.Label>Đấu giá sản phẩm</Form.Label>
                <Form.Control type="text" value={price} onChange={(e)=> setPrice(e.target.value)}
                placeholder="Enter order name" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>
            <Button type='submit'>Đấu Giá</Button>
            </Form>
        </>
    )
}

export default Order