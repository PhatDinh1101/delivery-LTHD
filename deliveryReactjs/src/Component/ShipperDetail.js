import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import Api, { endpoints } from '../configs/Api'
import "../static/ShipperDetail.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faClock} from "@fortawesome/free-solid-svg-icons"
import { Button, Form, FormText } from 'react-bootstrap'

function ShipperDetail() {
    const user = useSelector(state => state.user.user)
    const [shipper, setShipper] = useState() 
    const [comment, setComment] = useState([])
    const [rating, setRating] = useState("")
    const content = useRef()
    const {shipperID} = useParams()

    console.log(shipperID)

    useEffect(() => {
        const loadShipper = async () => {
            let res = await Api.get(endpoints['user'](shipperID))
            setShipper(res.data)
            console.log(res.data)
        }

        const loadComment = async () => {
            let res = await Api.get(endpoints["comment"](shipperID))
            let data = res.data.sort(() => -1)
            setComment(data)
        }

        loadShipper()
        loadComment()
    }, [])


    const getImage = (img) => {
        let image
        image = img.slice(0, 22) + "static" + img.slice(21)
        return image
    }

    const postComment = async (e) => {
        e.preventDefault();
        if(rating == "")
            alert("Mời bạn đánh giá trước khi bình luận")
        else {
            let res = await Api.post(endpoints['rating'],
                {
                    "star": rating,
                    "comment": content.current.value,
                    "shipper": shipperID,
                    "customer": user.id,
                }
            )

            let reloadcomment = await Api.get(endpoints["comment"](shipperID))
            let data = reloadcomment.data.sort(() => -1)
            setComment(data)

        console.log(res.data)
        }
        
    }

    console.log(rating)

  return (
    <>
        <div className='shipper-detail'>
            <div className='shipper-detail-show'>
            <div className='detail-info'>
                <div className='detail-info-image'>

                    {shipper && shipper.avatar != null
                    ? <img src={getImage(shipper.avatar)}></img>
                    : <img src='/avt.png'></img>}
                
                </div>
                <div className='detail-info-detail'>
                    {shipper && <span className='detail-info-detail-name'>Shipper:   {shipper.first_name} {shipper.last_name}</span>}
                </div>
            </div>
            <div className='shipper-comment'>
                <span style={{fontSize: "30px", fontWeight: "bold", color: "red" }}>comment</span>
                <div style={{marginTop: "70px"}}>
                    <Form onSubmit={postComment}>
                        <Form.Label>Đánh giá:</Form.Label>
                        {['radio'].map((type, index) => (
                            <div key={`inline-${type}`} className="mb-3">
                            <Form.Check
                                inline
                                label="Rất tệ"
                                name="group1"
                                type={type}
                                id={`inline-${type}-${index}`}
                                value={rating}
                                onChange={(e) => setRating(index+1)}
                            />
                            <Form.Check
                                inline
                                label="Tệ"
                                name="group1"
                                type={type}
                                id={`inline-${type}-${index}`}
                                value={rating}
                                onChange={(e) => setRating(index+2)}
                            />
                            <Form.Check
                                inline
                                label="Trung Bình"
                                name="group1"
                                type={type}
                                id={`inline-${type}-${index}`}
                                value={rating}
                                onChange={(e) => setRating(index+3)}
                            />
                            <Form.Check
                                inline
                                label="Tốt"
                                name="group1"
                                type={type}
                                id={`inline-${type}-${index}`}
                                value={rating}
                                onChange={(e) => setRating(index+4)}
                            />
                            <Form.Check
                                inline
                                label="Rất tốt"
                                name="group1"
                                type={type}
                                id={`inline-${type}-${index}`}
                                value={rating}
                                onChange={(e) => setRating(index+5)}
                            />
                           
                            </div>
                        ))}
                        <Form.Group controlId="ControlTextarea1">
                            <Form.Label>Nội dung đánh giá:</Form.Label>
                            <Form.Control as="textarea" rows="3" name="address" ref={content}/>
                        </Form.Group>
                        <Button type={'submit'} style={{marginTop: "10px"}}>Bình luận</Button>
                    </Form>
                </div>
                {comment.map(c => {
                return <div className='shipper-comment_root'>
                    <div style={{display: "flex", marginRight: "10px"}}>
                            { c.customer.avatar
                            ? <img src={getImage(c.customer.avatar)}></img>
                            : <img src='/avt.png'></img>}
                        <div style={{display: "flex", marginRight: "10px", flexDirection: "column"}}>
                            <div>
                                    <span className='comment-customer_name'><Link to="#"
                                        style={{textDecoration: "none", color: "black"}}
                                    >{c.customer.first_name} {c.customer.last_name}</Link></span>
                            </div>
                            <div className='comment_star_time'>
                                    <span style={{color: "gold"}}><em>{c.star} sao</em></span>
                                    <span style={{paddingLeft: "50px"}}>
                                    <FontAwesomeIcon icon={faClock}/> : 
                                    <em>  {c.updated_date.slice(0, 10)}</em></span>
                            </div>
                            <div className='comment_content'>
                                {c.comment}
                             </div>
                        </div>
                    </div>
                </div>
                })
            }
             </div>
            </div>
        </div>
    </>
  )
}

export default ShipperDetail