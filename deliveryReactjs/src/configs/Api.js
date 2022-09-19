import axios from 'axios'


axios.defaults.withCredentials = false;

export const endpoints = {
    "oauth2-info": "/oauth2-info",
    "login": "/o/token/",
    "current-user": "/users/current-user",
    "comment": (user_id) => `/users/${user_id}/shipper_rating/`,
    "order-status": (status_id) => `/status/${status_id}/order-status/`,
    "address": "/address/",
    "create-order": "/orderdetail/",
    "register": "/users/",
    "rating": "/rating/",
    "user": (user_id) => `/users/${user_id}/`,
    "order": (order_id) => `/orderdetail/${order_id}/`,
    "aution": "/aution/",
    "shipper-aution": (shipper_id) => `/users/${shipper_id}/shipper_aution_history/`,
    "order-customer": (customer_id) => `/users/${customer_id}/orders_customer/`,
    "order-aution": (aution_id) => `/order/${aution_id}/get_aution/`,
    "order-patch": (order_id) => `/order/${order_id}/`,
    "receive": "/receive/",
    "shipperReceive": (order_id) => `/receive/${order_id}/`,
    "order-delivering": (user_id) => `/users/${user_id}/ShipperReceiver/`,
    "cash": (user_id) => `/cash/${user_id}/`
}

export default axios.create({
    baseURL: "http://localhost:8000/"
})