import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    const navigate = useNavigate()
    const handleClick = (()=>{
        navigate('/sign-in', {replace:true})
    })
  return (
    <div>Something Unexpected<br></br>
        Go Back to Home Page.
        <button onClick={handleClick}>Go Back</button>
    </div>
  )
}

export default Error