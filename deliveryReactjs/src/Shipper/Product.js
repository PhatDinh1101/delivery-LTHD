import React, { useEffect, useRef, useState } from 'react'
import Api, { endpoints } from '../configs/Api';
import "../static/Product.css"
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = () => {
  const selectRef = useRef();
  const [order, setOrder] = useState([])
  const [root_order, setRootOrder] = useState([])
  const [address, setAddress] = useState([])


  const getItem = (e) => {
    e.preventDefault();
    let selected = selectRef.current.value
    let rusult = root_order.filter((o) => o.area == selected)
    if(rusult.length !== 0)
      {setOrder(rusult)
      console.log(rusult)}
  };

  useEffect(() => {
    const loadOrder = async () => {
      let res = await Api.get(endpoints['order-status'](1))
      setOrder(res.data)
      setRootOrder(res.data)

      // console.log(res.data)
    }

    const loadAddress = async () => {
      let res = await Api.get(endpoints['address'])
      setAddress(res.data)
    }

    loadOrder()
    loadAddress()

  }, [])


  const addressName = (id_area) => {
    let results = address.filter((a) => a.id == `${id_area}`)
    return results[0]["name"]
  }
  

  return (
    <div>
      <div>Address
        <form onSubmit={getItem}>
          <p>
            <select ref={selectRef} className="wide">
              {address.map(a => {
                return <option value={a.id}>{a.name}</option>
              })}
            </select>
          </p>
          <button> Submit form </button>
        </form>
      </div>
      <div className='order-items'>
        {order != [] ? order.map(
          o => {
            return <>
            <div className='order-item'>
                <img src={`http://127.0.0.1:8000/static${o.image}`}></img>
                <span ><strong>Tên đơn hàng:   </strong><Link to={`order/${o.id}/order`}> {o.order_name}</Link></span>
                <span style={{paddingLeft: "150px"}}><strong>Khu vực: </strong>   {
                  address.length != 0 ? addressName(o.area) : "loading"
                }</span>
            </div>
            </>
          }
        ): <div>Khong co don hang nao</div>
        }
        
      </div>
    </div>
  )
}

export default Product