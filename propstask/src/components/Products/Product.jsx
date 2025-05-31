import React from 'react'


const Product = (item) => {
    console.log(item)
  return (
    
        <div className='singleproduct'>
        <h2>{item.singlep.title}</h2>
        <img src={item.singlep.images} alt="" />
        </div>
    
  )
}

export default Product