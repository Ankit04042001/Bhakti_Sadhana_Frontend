import React from 'react'

const MenuDiv = (props) => {

  return (
    <div className='menu-item-wrapper' onClick={props.handleShow}>
        <div className='icon'> {props.children[0]}</div>
        <div className='name'> {props.children[1]}</div>
    </div>
  )
}

export default MenuDiv