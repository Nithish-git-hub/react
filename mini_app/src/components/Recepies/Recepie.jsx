import React from 'react'
import "./Recepie.css"
import {useNavigate} from 'react-router-dom'

const Recepie = (item) => {
  const navigate=useNavigate()
  return (
    <div className='singleproduct'>
        <h2>{item.singlep.name}</h2>
        <img src={item.singlep.image} alt="" />
        <span onClick={()=>navigate(`/recepies/${item.singlep.id}`)}>VIEW MORE</span>
        </div>
  )
}

export default Recepie;