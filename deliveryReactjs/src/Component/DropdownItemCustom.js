import React from 'react'
import { Link } from 'react-router-dom'
import "../static/DropdownItemCustom.css"

const DropdownItemCustom = (props) => {
  return (
    <>
    <div className='dropDownItemCustom'>
        <Link to = {props.linkTo ?  props.linkTo : "#"} className='dropDownLink'>
            <span>
                {props.children}
            </span>
        </Link>
    </div>
    </>
  )
}

export default DropdownItemCustom