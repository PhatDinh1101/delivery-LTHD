import React, { Fragment, useRef, useState } from 'react'
import { Button, Container, Form, FormText } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import Api, { endpoints } from '../configs/Api'
import '../static/Register.css'

const RegisterShipper = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setpassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [email, setEmail] = useState('')
    const [CCCD, setCCCD] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const sex = useRef()
    const [avatar, setAvatar] = useState()
    const nav = useNavigate()


    const register = async (e) => {
        e.preventDefault();

        let form_data = new FormData()
        form_data.append("first_name", firstName)
        form_data.append("last_name", lastName)
        form_data.append("username", userName)
        form_data.append("password", password)
        form_data.append("email", email)
        form_data.append("groups", 1)
        form_data.append("CCCD", CCCD)
        form_data.append("sex", sex.current.value)
        form_data.append("address", address)
        form_data.append("phone", phone)
        form_data.append("avatar", avatar, avatar.name)
        form_data.append("is_active", false)

        let res = await Api.post(endpoints["register"],
                form_data
                ,{
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }
        )

        console.log(res.data)
        nav("/login")
    }


    return (
    <Fragment>
        <div id='from-register'>
            <Form className='from-register' onSubmit={register}>
                <FormText className="register-title" style={{fontSize: "40px", margingBottom: "20px", color: "CaptionText"}}>Đăng kí trở thành shipper</FormText>
                <div style={{display: "flex"}}>
                    <Form.Group className="mb-3" controlId="formBasicFirstName">
                        <Form.Label>Tên:</Form.Label>
                        <Form.Control type="text" value={firstName}
                        onChange={(e) => {setFirstName(e.target.value)}}
                        placeholder="First name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicLastName" style={{marginLeft: "50px"}}>
                        <Form.Label>Họ:</Form.Label>
                        <Form.Control type="text" value={lastName}
                        onChange={(e) => {setLastName(e.target.value)}}
                        placeholder="Last Name" />
                    </Form.Group>
                </div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" value={email}
                        onChange={(e) => {setEmail(e.target.value)}}
                    placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicUserName">
                    <Form.Label>Tài Khoản:</Form.Label>
                    <Form.Control type="text" value={userName}
                        onChange={(e) => {setUserName(e.target.value)}}
                    placeholder="Enter username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Mật Khẩu:</Form.Label>
                    <Form.Control type="password" value={password}
                        onChange={(e) => {setpassword(e.target.value)}}
                    placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Xác nhận lại mật khẩu</Form.Label>
                    <Form.Control type="password" value={confirmPassword}
                        onChange={(e) => {setConfirmPassword(e.target.value)}}
                    placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCCCD">
                    <Form.Label>CCCD/CMND</Form.Label>
                    <Form.Control type="text" value={CCCD}
                        onChange={(e) => {setCCCD(e.target.value)}}
                    placeholder="CCCD" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicSdt">
                    <Form.Label>Số điện thoại</Form.Label>
                    <Form.Control type="text" value={phone}
                        onChange={(e) => {setPhone(e.target.value)}}
                    placeholder="Phone number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAddress">
                    <Form.Label>Đại chỉ</Form.Label>
                    <Form.Control type="text" value={address}
                        onChange={(e) => {setAddress(e.target.value)}}
                    placeholder="Address" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Giới tính</Form.Label>
                    <Form.Select aria-label="Default select example" ref={sex}>
                        <option>Open this select menu</option>
                        <option value="Nam">Nam</option>
                        <option value="Nữ">Nữ</option>
                    </Form.Select>               
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Ảnh đại diện:</Form.Label>
                    <Form.Control type="file"
                    onChange={(e) => {setAvatar(e.target.files[0])}}
                    placeholder="note" />
                </Form.Group>
                <Button variant="primary" type="submit" className='from-submit-register'>
                        Đăng kí
                </Button>
            </Form>
        </div>
    </Fragment>
  )
}

export default RegisterShipper