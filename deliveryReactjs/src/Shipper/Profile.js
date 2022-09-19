import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Api, { endpoints } from '../configs/Api'
import "../static/Profile.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faClock} from "@fortawesome/free-solid-svg-icons"

const Profile = () => {

    const user = useSelector(state => state.user.user) 
    const [comment, setComment] = useState([])

    useEffect(() => {
        let loadComment = async () => {
            const res = await Api.get(endpoints["comment"](user.id))
            let data = res.data.sort(() => -1)
            setComment(data)
        }

        loadComment()
    }, [])
    const getImage = (img) => {
        let image
        image = img.slice(0, 22) + "static" + img.slice(21)
        return image
    }

    return (
        <>
        <div className='profile'>
            <div className='profile-info'>
                <div className='profile-info-image'>

                    {user.avatar != null
                    ? <img src={getImage(user.avatar)}></img>
                    : <img src='/avt.png'></img>}
                
                </div>
                <div className='profile-info-detail'>
                    <span className='profile-info-detail-name'>{user.first_name} {user.last_name}</span>
                </div>
            </div>
            <div className='profile-comment'>
                <span style={{fontSize: "30px", fontWeight: "bold", color: "black", paddingLeft:"10px"}}>Comment</span>
                {comment.map(c => {
                return <div className='comment-root'>
                    <div style={{display: "flex", marginRight: "10px"}}>
                            {c.customer.avatar
                            ? <img src={getImage(c.customer.avatar)}></img>
                            : <img src='/avt.png'></img>}
                        <div style={{display: "flex", marginRight: "10px", flexDirection: "column"}}>
                            <div>
                                    <span className='comment-customer-name'><Link to="#"
                                        style={{textDecoration: "none", color: "black"}}
                                    >{c.customer.first_name} {c.customer.last_name}</Link></span>
                            </div>
                            <div className='comment-star-time'>
                                    <span style={{color: "gold", fontSize: "20px"}}><em>{c.star} sao</em></span>
                                    <span style={{paddingLeft: "50px", fontSize:"15px"}}>
                                    <FontAwesomeIcon icon={faClock}/> : 
                                    <em>  {c.updated_date.slice(0, 10)}</em></span>
                            </div>
                            <div className='comment-content' style={{fontSize:"18px"}}>
                                {c.comment}
                             </div>
                        </div>
                    </div>
                </div>
                })
            }
             </div>
            </div>
        </>
    )
}

export default Profile