import React from 'react'
import { Link } from 'react-router-dom'
import '../css/menu-item.css'


const MenuItem = (props) => {
  return (
    <>
      <div className='menu-item'><Link to={props.url} replace={true}>{props.children} {props.name}</Link></div>
    </>
  )
}

export default MenuItem