import React from "react";
import "../static/Introduce.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleDollarToSlot, faTruckFast, faShield} from "@fortawesome/free-solid-svg-icons"

function Introduce() {
    return(
        <>
            <div className="in-wrapper">
                <div className="banner">
                    <div>
                        <h1>Delivery</h1>
                        <p>Delivery là ứng dụng quản lý đơn hàng cho mọi gia đình, giao hàng tận nơi, lấy hàng tận cửa, đảm bảo uy tín và chất lượng
                        </p>
                        <button>ĐĂNG KÍ NGAY</button>
                    </div>
                    <div>
                        <img src={require("../Login/img/bg.png")}></img>
                    </div>
                </div>
                <div>
                    <h1>Tại sao nên sử dụng dịch vụ Delivery của chúng tôi?</h1>
                    <div>
                        <FontAwesomeIcon icon={faCircleDollarToSlot}/>
                        <p><strong>Chi phí hợp lí</strong>
                            <br/>
                            Giá tiền cuốc xe hiển thị ngay trên ứng dụng, bạn chỉ việc trả đúng số tiền này và an tâm món hàng sẽ đến tay người nhận trong thời gian sớm nhất.
                        </p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faTruckFast}/>
                        <p><strong>Chi phí hợp lí</strong>
                            <br/>
                            Giá tiền cuốc xe hiển thị ngay trên ứng dụng, bạn chỉ việc trả đúng số tiền này và an tâm món hàng sẽ đến tay người nhận trong thời gian sớm nhất.
                        </p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faShield}/>
                        <p><strong>Chi phí hợp lí</strong>
                            <br/>
                            Giá tiền cuốc xe hiển thị ngay trên ứng dụng, bạn chỉ việc trả đúng số tiền này và an tâm món hàng sẽ đến tay người nhận trong thời gian sớm nhất.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Introduce