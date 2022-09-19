import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import "../static/Base.css"



function Base() {
    return(
        <>
            <div className="base-wrapper">
                <Header></Header>
                <Outlet/>
                <Footer></Footer>
            </div>
        </>
    )
}


export default Base