import React, { Fragment, useState } from "react"
import "../static/login.css"
import { Button, Container, Form, FormText } from "react-bootstrap"
import Api, { endpoints } from "../configs/Api";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import cookies from "react-cookies";


function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [user, setUser] = useState("")
    const dispatch = useDispatch()


    const loign = async (event) => {
        event.preventDefault();
        
        // let info = await Api.get(endpoints['oauth2-info'])

        // console.log(info.data)
        let res = await Api.post(endpoints['login'], {
                "client_id": "IxzzdMjXqtverauTOvAIQCAGRuFvdpU2VsvggeDf",
                "client_secret": "XzD3txW8qjtjl14ua8E9arxjXxJGP7JIgsZvEwWO5GKwnCHLV5RDywxdhJLGlwyqKbGbtTqam4LhLW0CMCSgJ5UeQ5IsLopX8usfwbU9NGtTSO59CS3SQpLNHFQdR8Gl",
                "username": username,
                "password": password,
                "grant_type": "password"
        })

        cookies.save("access_token", res.data.access_token)

        let user = await Api.get(endpoints['current-user'], {
            headers: {
                'Authorization': `Bearer ${cookies.load("access_token")}`
            }
        })

        console.log(user)
        
        cookies.save("user", user.data)

        if(user.data.groups[0] === 2){
            dispatch({
                "type": "shipper",
                'payload': user.data
            })
            setUser(`/shipper/${user.data.id}`)
        }
        else if(user.data.groups[0] === 1){
            dispatch({
                "type": "customer",
                'payload': user.data
            })
            setUser(`/customer/${user.data.id}`)
        }           
    }

    
    if(user != "" && cookies.load("user") != null)
        return <Navigate to={user}/>

    
    return(
        <Fragment>
            <div className="login-wrapper">
                <img src= {require("../Login/img/bg.png")} className="login-bg-img"></img>
                <Container className="login-form">
                    <Form style={{display: "flex", justifyContent: "space-between", flexDirection: "column"}}
                        onSubmit={loign}
                    >
                            <FormText className="login-title">LOGIN</FormText>
                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="Enter username" 
                            value = {username}
                            onChange= {(evt) => setUsername(evt.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                            type="password" 
                            placeholder="Password" 
                            value={password}
                            onChange={(evt) => setPassword(evt.target.value)}
                            />
                        </Form.Group>
                        <div class="login-remember">
                            <input type="checkbox" id= "re-pw"/>
                            <label for = "re-pw">Remember password</label>
                        </div>
                        <Button variant="primary" type="submit" id="submit-login-form">
                            Login
                        </Button>
                        <p style={{fontSize: "13px", textAlign: "center", fontWeight: "bold", padding: "10px", color: "black"}}>or Connect with Social Media</p>
                        <div className="social-media"  style={{backgroundColor: "#ffffff", "--color": "#ffff80"}}>
                            <img src = {require("./img/ggicon.png")} alt="google" className="icon-social"/>
                            <span className="text-social">Sign in with Google</span>
                        </div>
                        <div className="social-media" style={{backgroundColor: "#019eff", "--color": "#019eff"}}>
                            <img src = {require("./img/twitter-logo.png")} alt="Twitter" className="icon-social"/>
                            <span className="text-social">Sign in with Twitter</span>
                        </div>
                        <div className="social-media" style={{backgroundColor: "#3d5595", "--color": "#3d5595"}}>
                            <img src = {require("./img/facebook-logo.png")} alt="Facebook" className="icon-social"/>
                            <span className="text-social">Sign in with Facebook</span>
                        </div>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <p><em>*Forgot password</em></p>
                            <p><em>*Create a new account</em></p>
                        </div>
                    </Form>
                </Container>
            </div>
        </Fragment>
    ) 
}
export default Login