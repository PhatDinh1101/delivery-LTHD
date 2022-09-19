import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars, faSortDown, faGlobe, faMagnifyingGlass, faBell} from "@fortawesome/free-solid-svg-icons"
import React, { useState } from "react";
import "../static/Header.css"
import DropdownCustom from "../Component/DropdownCustom";
import DropdownItemCustom from "../Component/DropdownItemCustom";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import cookies from "react-cookies"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

function Header() {

    const [dropdown, setDropdown] = useState(false)
    const user = useSelector(state => state.user.user)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const logout = (e) => {
        e.preventDefault()

        cookies.remove("access_token", "/shipper")
        cookies.remove("user", "/shipper")
        cookies.remove("access_token", "/customer")
        cookies.remove("user", "/customer")
        cookies.remove("access_token", "/")
        cookies.remove("user", "/")
        dispatch({
            "type": "logout",
            "payload": null
        })
        navigate('/')
    }

    // if(user === null)
    //     
    const getImage = () => {
        let image
        image = user.avatar.slice(0, 22) + "static" + user.avatar.slice(21)
        return image
    }


    return(
        <>
            {/* <div className="h-wrapper">
                <div className="header-container">
                    <div id="main-menu">
                        <div className="menu">
                            <FontAwesomeIcon icon={faBars} className="menu-icon"/>
                            <span>Menu</span>
                        </div>
                        <div class ="logo">
                            <h1><Link to={'/'} style={{textDecoration: "none", color: "black"}}></Link>
                                <img src={require("../Login/img/logo.png")}></img>
                            </h1>
                        </div>
                    </div>
                    {!user 
                    ? 
                    <div id="support-menu">
                    <div style={{display: 'flex'}} onClick={() => setDropdown(!dropdown)}>
                        <span>Trở thành đối tác của công ty </span>
                        <FontAwesomeIcon icon={faSortDown} style={{alignSelf: "self-start", marginLeft: "5px"}}/>
                        {dropdown && <DropdownCustom>
                            <DropdownItemCustom linkTo = "/register-customer">Đăng kí người dùng</DropdownItemCustom>
                            <DropdownItemCustom linkTo = "/register-shipper">Đăng kí Shipper</DropdownItemCustom>
                            <DropdownItemCustom linkTo = "/login">Liên hệ tư vấn</DropdownItemCustom>
                            <DropdownItemCustom linkTo = "/login">Đăng nhập</DropdownItemCustom>
                        </DropdownCustom>}                           
                    </div>
                    <div>
                        <span>Trung tâm hổ trợ</span>
                    </div>
                    <div>
                        <span><FontAwesomeIcon icon={faGlobe}/> Tiếng Việt</span>
                    </div>
                    <div>
                        <from>
                            <input placeholder="Tim kiem" type="text" className="from-control input-search"></input>
                            <button type="submit" className="btn btn-primary" id="submit-search">
                                <span><FontAwesomeIcon icon={faMagnifyingGlass}/></span>
                            </button>
                        </from>
                        
                    </div>
                    <div>
                        |
                        <span><Link to="/login"
                            style={{textDecoration: "none", color: "black"}}
                        >  Đăng nhập</Link></span>
                    </div>
                    </div>
                    :
                    <div style={{display: "flex", justifyContent: "space-around", alignItems: "center"}}>
                        <div style={{cursor: "pointer"}}>
                            <FontAwesomeIcon icon={faBell} className="menu-icon" style={{color: "gold", marginRight: "20px"}}/>
                        </div>                      
                        <div style={{display: "flex", justifyContent: "space-around", alignItems: "center", marginRight: "10px"}}>
                            <img src={getImage()} className="avartar-img"></img>
                            <span><Link to={user.groups[0]==1? `/shipper/${user.id}`:`/customer/${user.id}`}
                                style={{textDecoration: "none", color: "black"}}
                            >  {user.first_name} {user.last_name}</Link></span>
                        </div>
                        <div>
                            |
                            <span style={{textDecoration: "none", color: "black", cursor: "pointer", marginLeft: "10px"}}
                            onClick={logout}
                            >
                                Đăng Xuất
                            </span>
                        </div>
                    </div>}                                       

                </div>
            </div> */}
            <Navbar className="h-wrapper" bg="rgb(225, 240, 255)" expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        <div id="main-menu">
                            <div class ="logo">
                                <h1><Link to={'/'} style={{textDecoration: "none", color: "black"}}></Link>
                                    <img src={require("../Login/img/logo.png")}></img>
                                </h1>
                            </div>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    {!user 
                    ? 
                    <div  id="support-menu">
                    <div style={{display: 'flex'}} onClick={() => setDropdown(!dropdown)}>
                        <span>Trở thành đối tác của công ty </span>
                        <FontAwesomeIcon icon={faSortDown} style={{alignSelf: "self-start", marginLeft: "5px"}}/>
                        {dropdown && <DropdownCustom>
                            <DropdownItemCustom linkTo = "/register-customer">Đăng kí người dùng</DropdownItemCustom>
                            <DropdownItemCustom linkTo = "/register-shipper">Đăng kí Shipper</DropdownItemCustom>
                            <DropdownItemCustom linkTo = "/login">Liên hệ tư vấn</DropdownItemCustom>
                            <DropdownItemCustom linkTo = "/login">Đăng nhập</DropdownItemCustom>
                        </DropdownCustom>}                           
                    </div>
                    <div>
                        <span>Trung tâm hổ trợ</span>
                    </div>
                    <div>
                        <span><FontAwesomeIcon icon={faGlobe}/> Tiếng Việt</span>
                    </div>
                    <div>
                        <from>
                            <input placeholder="Tim kiem" type="text" className="from-control input-search"></input>
                            <button type="submit" className="btn btn-primary" id="submit-search">
                                <span><FontAwesomeIcon icon={faMagnifyingGlass}/></span>
                            </button>
                        </from>
                        
                    </div>
                    <div>
                        |
                        <span><Link to="/login"
                            style={{textDecoration: "none", color: "black"}}
                        >  Đăng nhập</Link></span>
                    </div>
                    </div>
                    :
                    <div style={{display: "flex", justifyContent: "space-around", alignItems: "center"}}>
                        <div style={{cursor: "pointer"}}>
                            <FontAwesomeIcon icon={faBell} className="menu-icon" style={{color: "gold", marginRight: "20px"}}/>
                        </div>                      
                        <div style={{display: "flex", justifyContent: "space-around", alignItems: "center", marginRight: "10px"}}>
                            <img src={getImage()} className="avartar-img"></img>
                            <span><Link to={user.groups[0]==1? `/shipper/${user.id}`:`/customer/${user.id}`}
                                style={{textDecoration: "none", color: "black"}}
                            >  {user.first_name} {user.last_name}</Link></span>
                        </div>
                        <div>
                            |
                            <span style={{textDecoration: "none", color: "black", cursor: "pointer", marginLeft: "10px"}}
                            onClick={logout}
                            >
                                Đăng Xuất
                            </span>
                        </div>
                    </div>}   
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}


export default Header