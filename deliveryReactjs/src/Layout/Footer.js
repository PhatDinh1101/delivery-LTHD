import React from "react";
import "../static/Footer.css"
import {Link} from 'react-router-dom'

function Footer() {
    return(
        <>
            <footer className="page-footer font-small blue pt-4 footer-wrapper">
                <div className="container-fluid text-center text-md-left">
                    <div className="row">
                        <div className="col-md-6 mt-md-0 mt-3">
                            <h5 className="text-uppercase" style={{color: "blue", fontWeight: "bold"}}>Delivery</h5>
                            <p>Bla bla bla</p>
                        </div>

                        <hr className="clearfix w-100 d-md-none pb-0"/>

                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase" style={{color: "black", fontWeight: "bold"}}>About us</h5>
                            <ul className="list-unstyled">
                                <li><Link to="#">Link 1</Link></li>
                                <li><Link to="#">Link 2</Link></li>
                                <li><Link to="#">Link 3</Link></li>
                                <li><Link to="#">Link 4</Link></li>
                            </ul>
                        </div>

                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase" style={{color: "black", fontWeight: "bold"}}>Hướng dẫn nhanh</h5>
                            <ul className="list-unstyled">
                                <li><Link to="#">Link 1</Link></li>
                                <li><Link to="#">Link 2</Link></li>
                                <li><Link to="#">Link 3</Link></li>
                                <li><Link to="#">Link 4</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright text-center py-3">© 2020 Copyright:
                    <a href="https://mdbootstrap.com/">Bla bla bla</a>
                </div>
            </footer>
        </>
    )
}


export default Footer