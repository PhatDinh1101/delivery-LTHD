import React, { useEffect, useRef, useState } from 'react'
import { Button, Container, Form, FormText } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Api, { endpoints } from '../configs/Api'

function CreateOrder() {
    const [address, setAddress] = useState([])
    const [orderName, setOrderName] = useState('')
    const [desription, setDesription] = useState('')
    const [note, setNote] = useState('')
    const image = useRef()
    const area = useRef()

    const nav = useNavigate()
    const user = useSelector(state => state.user.user)

    useEffect(() => {
    
        const loadAddress = async () => {
          let res = await Api.get(endpoints['address'])
          setAddress(res.data)
        }
    
        loadAddress()
    
      }, [])

    const createOrder = async (e) => {
        e.preventDefault();
        let res = await Api.post(endpoints["create-order"],
                {
                    "order": {
                      "order_name": orderName,
                      "customer": user.id,
                      "status": 1
                    },
                    "description": desription,
                    "quality": 1,
                    "note": note,
                    "area": area.current.value,
                    "image": image.current.files[0],
                    "phone_cus": {
                        "phone": user.phone
                      },
                  },
                  {
                      headers: {
                          "Content-Type": "multipart/form-data"
                      }
                  }
            )
            if(res.data != null)
                alert("Tạo thành công")
                nav("/customer/:id")
            }
  return (
    <>
    <Container>
        <Form onSubmit={createOrder}>
        <FormText className="register-title" style={{fontSize: "40px", margingBottom: "20px", color: "CaptionText"}}>Tạo đơn hàng</FormText>
            <Form.Group className="mb-3">
                <Form.Label>Tên đơn hàng:</Form.Label>
                <Form.Control type="text" value={orderName} onChange={(event) => setOrderName(event.target.value)}
                placeholder="Enter order name" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Mô tả:</Form.Label>
                <Form.Control type="text" value={desription} onChange={(event) => setDesription(event.target.value)}
                placeholder="desription" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Khu vực</Form.Label>
                <Form.Select ref={area}>
                    {address.map(a => {
                    return <option value={a.id}>{a.name}</option>
                    })}
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Địa chỉ cụ thể:</Form.Label>
                <Form.Control type="text" value={note} onChange={(event) => setNote(event.target.value)}
                placeholder="note" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Hình ảnh</Form.Label>
                <Form.Control type="file" ref={image}
                placeholder="note" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </Container>
    </>
  )
}

export default CreateOrder