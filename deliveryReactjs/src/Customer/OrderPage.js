import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Api, { endpoints } from '../configs/Api';
import "../static/Product.css"

function OrderPage({status}) {

  // console.log(status)
  
  const selectRef = useRef();
  const [order, setOrder] = useState([])
  const [root_order, setRootOrder] = useState([])
  const [address, setAddress] = useState([])
  const user = useSelector(state => state.user.user)


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
      let res = await Api.get(endpoints['order-customer'](user.id))
      setOrder(res.data)
      setRootOrder(res.data)

      console.log(res.data)
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
    <>
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
          <button type='submit'> Submit form </button>
        </form>
      </div>
      <div className='order-items'>
        {order != [] ? order.map(
          o => {
            if(o.status == status)
              return <>
              <div className='order-item'>
                <img src={`http://127.0.0.1:8000/static${o.image}`}></img>
                  <span ><strong>Tên đơn hàng:   </strong><Link to={o.status == 1 ?`order/${o.id}` : `/customer/:id/order/${o.id}/status_2_3`}> {o.order_name}</Link></span>
                  <span style={{paddingLeft: "150px"}}><strong>Khu vực: {addressName(o.area)}</strong></span>
              </div>
              </>
            else if(status == null)
            return <>
              <div className='order-item'>
                <img src={`http://127.0.0.1:8000/static${o.image}`}></img>
                  <span ><strong>Tên đơn hàng:   </strong><Link to={o.status == 1 ?`order/${o.id}` : `/customer/:id/order/${o.id}/status_2_3`}> {o.order_name}</Link></span>
                  <span style={{paddingLeft: "150px"}}><strong>Khu vực: {addressName(o.area)}</strong></span> 
              </div>
              </>
          }
        ): <div>Khong co don hang nao</div>
        }
        
      </div>
    </div>
    </>
  )
}

export default OrderPage