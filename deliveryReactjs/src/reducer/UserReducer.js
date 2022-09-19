import cookies from "react-cookies";

const initState = {
    "user": cookies.load('user')
}


const UserReducer = (state = initState, action) => {
    switch (action.type) {
        case "shipper": 
            return{
                ...state,
                "user": action.payload
            } 
        case "customer":
            return{
                ...state,
                "user": action.payload
            }
        case "logout":
            return{
                ...state,
                "user": null
            }
        default:
            return{
                ...state
            }

    }
}

export default UserReducer