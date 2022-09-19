import React from 'react'
import "../static/DropdownCustom.css"

const DropdownCustom = (props) => {
  return (
    <>
        <div className='dropDownCustom'>
            {props.children}
        </div>
    </>
  )
}

export default DropdownCustom