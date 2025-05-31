import React from 'react'

const Recepie = (item) => {
  return (
    <div className='singleproduct'>
        <h2>{item.singlep.name}</h2>
        <img src={item.singlep.image} alt="" />
        </div>
  )
}

export default Recepie